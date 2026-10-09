'use strict';

/* 보기 전용 화면. 내용은 data.js(window.CONTENT)에서 가져옵니다. */

const C = window.CONTENT || { words: [], scripts: [] };
const words = C.words || [];
const scripts = C.scripts || [];
const dialogs = C.dialogs || [];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function prettyDate(k) {
  if (!k) return '';
  const [y, m, d] = k.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${y}년 ${m}월 ${d}일 (${'일월화수목금토'[date.getDay()]})`;
}
const byDateDesc = (a, b) => (b.date || '').localeCompare(a.date || '');
const byDayDesc = (a, b) => (b.day || 0) - (a.day || 0) || byDateDesc(a, b);
const latestDate = () => [...words, ...scripts, ...dialogs].map(x => x.date || '').sort().pop();

/* ---------- 발음 듣기 ---------- */
// 기기에 있는 미국 영어 목소리 중 자연스러운 것을 우선 선택
let enVoice = null;
function pickVoice() {
  const vs = speechSynthesis.getVoices().filter(v => /^en[-_]US/i.test(v.lang));
  enVoice = vs.find(v => /Samantha|Ava|Allison|Google US English|Aria|Jenny|Zira/i.test(v.name))
    || vs.find(v => v.localService) || vs[0] || null;
}
if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.addEventListener?.('voiceschanged', pickVoice);
}

let speakingBtn = null;
function speak(text, btn) {
  if (!('speechSynthesis' in window)) return alert('이 브라우저는 발음 듣기를 지원하지 않아요.');
  speechSynthesis.cancel();
  speakingBtn?.classList.remove('speaking');
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  if (enVoice) u.voice = enVoice;
  u.rate = 0.9;
  speakingBtn = btn || null;
  btn?.classList.add('speaking');
  u.onend = u.onerror = () => btn?.classList.remove('speaking');
  speechSynthesis.speak(u);
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-speak]');
  if (b) { e.preventDefault(); e.stopPropagation(); speak(b.dataset.speak, b.closest('.word')?.querySelector('.speak') || b); }
});
const speakBtn = text => `<button class="speak" data-speak="${esc(text)}" aria-label="발음 듣기">🔊</button>`;

/* ---------- 라우터 ---------- */
const view = $('#view');
function route() {
  const [page, id, sub] = (location.hash.slice(1) || 'home').split('/');
  const tab = page === 'script' ? 'scripts' : page === 'dialog' ? 'dialogs' : page;
  $$('.tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
  $('#back').hidden = page !== 'script' && page !== 'dialog';
  $('#back').dataset.to = page === 'dialog' ? '#dialogs' : '#scripts';
  if (page === 'words') renderWords();
  else if (page === 'scripts') renderScripts();
  else if (page === 'script') renderScript(decodeURIComponent(id || ''), Number(sub) || 0);
  else if (page === 'dialogs') renderDialogs();
  else if (page === 'dialog') renderDialog(decodeURIComponent(id || ''));
  else if (page === 'diary') renderDiary();
  else renderHome();
  window.scrollTo(0, 0);
}
const setTitle = t => { $('#page-title').textContent = t; document.title = t === 'My English' ? (C.title || t) : `${t} · My English`; };
$('#back').onclick = () => (history.length > 1 ? history.back() : (location.hash = $('#back').dataset.to));
window.addEventListener('hashchange', route);

/* ---------- 홈 ---------- */
function renderHome() {
  setTitle('My English');
  const recentWords = [...words].reverse().sort(byDateDesc).slice(0, 6); // 같은 날짜면 나중에 추가한 단어 먼저
  const recentScripts = [...scripts].sort(byDateDesc).slice(0, 3);
  const recentDialogs = [...dialogs].sort(byDayDesc).slice(0, 3);
  const last = latestDate();
  view.innerHTML = `
    <div class="hero">
      <h2>${esc(C.title || 'My English Notebook')}</h2>
      <p>${esc(C.subtitle || '')}</p>
      ${last ? `<p class="small">마지막 업데이트 · ${prettyDate(last)}</p>` : ''}
    </div>
    <div class="stats">
      <a class="stat" href="#words"><b>${words.length}</b><span>단어 · 표현${words.length ? ` (✓${words.filter(isLearned).length})` : ''}</span></a>
      <a class="stat" href="#scripts"><b>${scripts.length}</b><span>스크립트</span></a>
      <a class="stat" href="#dialogs"><b>${dialogs.length}</b><span>Dialog</span></a>
    </div>

    <div class="section-title">최근 단어 <a href="#words">전체 보기 ›</a></div>
    ${recentWords.length ? `<div class="mini-words">${recentWords.map(w => `
      <a class="card" href="#words"><div><span class="w">${esc(w.word)}</span>${w.ipa ? `<span class="ipa">${esc(w.ipa)}</span>` : ''}</div><div class="m">${esc(w.meaning)}</div></a>`).join('')}</div>`
    : `<div class="card empty"><span class="big">📚</span>아직 단어가 없어요</div>`}

    <div class="section-title">최근 스크립트 <a href="#scripts">전체 보기 ›</a></div>
    ${recentScripts.length ? recentScripts.map(scriptCard).join('')
    : `<div class="card empty"><span class="big">🎬</span>아직 스크립트가 없어요</div>`}

    <div class="section-title">최근 Dialog <a href="#dialogs">전체 보기 ›</a></div>
    ${recentDialogs.length ? recentDialogs.map(dialogCard).join('')
    : `<div class="card empty"><span class="big">💬</span>아직 Dialog가 없어요</div>`}`;
}

/* ---------- 단어 ---------- */
let wordQuery = '';
let wordTopic = '';
let hideMeaning = false;

// 외운 단어 체크는 이 기기의 브라우저에 저장 (단어 글자를 기준으로 기억)
const LEARNED_KEY = 'my-english-learned';
const PREFS_KEY = 'my-english-prefs';
const readJSON = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } };
const writeJSON = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const learned = new Set(readJSON(LEARNED_KEY, []));
const isLearned = w => learned.has(w.word);
let wordStatus = readJSON(PREFS_KEY, {}).wordStatus || 'all'; // all | todo | done

function wordCard(w) {
  return `
    <article class="card word ${isLearned(w) ? 'learned' : ''}">
      <div class="word-head">
        <div style="flex:1;min-width:0">
          <span class="w" data-speak="${esc(w.word)}" role="button" title="눌러서 발음 듣기">${esc(w.word)}</span>${w.ipa ? `<span class="ipa">${esc(w.ipa)}</span>` : ''}${w.pos ? `<span class="pos">${esc(w.pos)}</span>` : ''}
        </div>
        <button class="check ${isLearned(w) ? 'on' : ''}" data-check="${esc(w.word)}" aria-pressed="${isLearned(w)}" aria-label="외운 단어로 표시">✓</button>
        ${speakBtn(w.word)}
      </div>
      <div class="m">${esc(w.meaning)}</div>
      ${w.example ? `<div class="ex"><div class="en">${esc(w.example)}</div>${w.exampleKo ? `<div class="ko">${esc(w.exampleKo)}</div>` : ''}</div>` : ''}
      ${w.note ? `<div class="note">💡 ${esc(w.note)}</div>` : ''}
    </article>`;
}

function renderWords() {
  setTitle('단어');
  const topics = [...new Set(words.map(w => w.topic).filter(Boolean))];
  view.innerHTML = `
    <div class="tools">
      <div class="seg" id="status" role="tablist">
        <button data-status="all">전체 <b></b></button>
        <button data-status="todo">안 외운 단어 <b></b></button>
        <button data-status="done">외운 단어 <b></b></button>
      </div>
      <input type="search" id="wq" placeholder="단어나 뜻으로 검색" value="${esc(wordQuery)}" autocomplete="off">
      <div class="chip-row" id="topics">
        <button class="chip ${hideMeaning ? 'on' : ''}" id="hide">🙈 뜻 가리기</button>
        <button class="chip ${!wordTopic ? 'on' : ''}" data-topic="">모든 주제</button>
        ${topics.map(t => `<button class="chip ${wordTopic === t ? 'on' : ''}" data-topic="${esc(t)}">${esc(t)}</button>`).join('')}
      </div>
    </div>
    <div id="list" class="${hideMeaning ? 'hide-meaning' : ''}"></div>`;

  const list = $('#list');
  const drawStatus = () => {
    const done = words.filter(isLearned).length;
    const counts = { all: words.length, todo: words.length - done, done };
    $$('#status button').forEach(b => {
      b.classList.toggle('on', b.dataset.status === wordStatus);
      b.querySelector('b').textContent = counts[b.dataset.status];
    });
  };
  const emptyMsg = () =>
    wordStatus === 'done' && !wordQuery ? '아직 외운 단어가 없어요<br><span class="small">다 외운 단어는 ✓를 눌러 주세요</span>'
    : wordStatus === 'todo' && !wordQuery ? '🎉 모든 단어를 외웠어요!'
    : '검색 결과가 없어요';
  const draw = () => {
    drawStatus();
    const q = wordQuery.trim().toLowerCase();
    const items = words.filter(w =>
      (wordStatus === 'all' || (wordStatus === 'done') === isLearned(w)) &&
      (!wordTopic || w.topic === wordTopic) &&
      (!q || [w.word, w.meaning, w.example, w.exampleKo, w.note].some(f => (f || '').toLowerCase().includes(q))));
    if (!words.length) { list.innerHTML = `<div class="empty"><span class="big">📚</span>아직 단어가 없어요</div>`; return; }
    if (!items.length) { list.innerHTML = `<div class="empty">${emptyMsg()}</div>`; return; }
    // 묶음(Set)별로, 없으면 날짜별로 — 최신 묶음이 위로
    const groups = {};
    items.forEach(w => (groups[w.set || w.date || ''] ||= []).push(w));
    list.innerHTML = Object.keys(groups).sort((a, b) => b.localeCompare(a, undefined, { numeric: true })).map(k => `
      <div class="group-title">${/^\d{4}-/.test(k) ? prettyDate(k) : esc(k || '기타')} · ${groups[k].length}개</div>
      ${groups[k].map(wordCard).join('')}`).join('');
  };
  draw();

  $('#wq').addEventListener('input', e => { wordQuery = e.target.value; draw(); });
  $('#status').addEventListener('click', e => {
    const b = e.target.closest('[data-status]'); if (!b) return;
    wordStatus = b.dataset.status;
    writeJSON(PREFS_KEY, { ...readJSON(PREFS_KEY, {}), wordStatus });
    draw();
  });
  $('#topics').addEventListener('click', e => {
    const c = e.target.closest('.chip'); if (!c) return;
    if (c.id === 'hide') {
      hideMeaning = !hideMeaning;
      c.classList.toggle('on', hideMeaning);
      list.classList.toggle('hide-meaning', hideMeaning);
      $$('.word.peek', list).forEach(x => x.classList.remove('peek'));
      return;
    }
    wordTopic = c.dataset.topic;
    $$('[data-topic]').forEach(x => x.classList.toggle('on', x === c));
    draw();
  });
  // 뜻 가리기 상태에서 카드를 누르면 그 카드만 보기
  list.addEventListener('click', e => {
    const check = e.target.closest('[data-check]');
    if (check) {
      const word = check.dataset.check;
      learned.has(word) ? learned.delete(word) : learned.add(word);
      writeJSON(LEARNED_KEY, [...learned]);
      if (wordStatus === 'all') {
        // 전체 보기에서는 목록을 다시 그리지 않고 그 카드만 바꿔서 스크롤 위치 유지
        const on = learned.has(word);
        check.classList.toggle('on', on);
        check.setAttribute('aria-pressed', on);
        check.closest('.word').classList.toggle('learned', on);
        drawStatus();
      } else {
        // 필터 보기에서는 카드가 사라지도록 살짝 페이드 후 다시 그리기
        check.closest('.word').classList.add('leaving');
        setTimeout(draw, 220);
      }
      return;
    }
    const card = e.target.closest('.word');
    if (card && hideMeaning && !e.target.closest('[data-speak]')) card.classList.toggle('peek');
  });
}

/* ---------- 스크립트 ---------- */
/* ---------- 스크립트 (영화) ----------
   학습 노트(요약·표현·문법)는 data.js에 있고,
   대본 원문은 저작권 때문에 공개하지 않고 각자 기기(localStorage)에만 저장해요. */
const scriptKey = id => `my-english-script-${id}`;
const loadScriptText = id => { try { return localStorage.getItem(scriptKey(id)) || ''; } catch { return ''; } };
const saveScriptText = (id, text) => {
  try { text ? localStorage.setItem(scriptKey(id), text) : localStorage.removeItem(scriptKey(id)); return true; }
  catch { return false; }
};

// 자막 대본 정리: 깨진 글자 고치기 + 끊긴 줄을 문장으로 합치기
const normText = t => t.toLowerCase().replace(/[’‘`]/g, "'").replace(/\s+/g, ' ').trim();
function cleanLine(l) {
  return l
    .replace(/IV[lI]/g, 'M')                                   // OCR: IVlmm → Mmm
    .replace(/\((?:[a-z]*[A-Z]{2,}[A-Za-z]*)\)/g, '')            // (couGHING) 같은 효과음
    .replace(/^[-–—\s]+/, '')                                    // 줄 앞 대시
    .replace(/^(?:[A-Z]{3,}[A-Z0-9]*[:2Z]|[A-Z]{3,}I)\s*(?=\S)/, '') // RECEPTIONISTZ, FIONAI, JULES: 같은 화자 표시
    .replace(/\s+/g, ' ')
    .trim();
}
function parseScript(text) {
  const raw = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const lines = [];
  raw.forEach((l, i) => {
    const newSpeaker = /^[-–—]/.test(l);
    const t = cleanLine(l);
    if (!t) return;
    const prev = lines[lines.length - 1];
    if (prev && !newSpeaker && !/[.?!"”…)\]]$/.test(prev.en) && prev.en.length < 220) prev.en += ' ' + t;
    else lines.push({ en: t, i, turn: newSpeaker });
  });
  return { raw, lines };
}
// 파트 시작 줄(marker)을 찾아 나누기. 못 찾으면 줄 수로 균등 분할
function splitParts(movie, text) {
  const { raw, lines } = parseScript(text);
  const parts = movie.parts || [];
  const starts = [0];
  let from = 0, ok = true;
  parts.slice(1).forEach(p => {
    const m = normText(p.marker || '');
    const idx = m ? raw.findIndex((l, i) => i > from && normText(l).includes(m)) : -1;
    if (idx < 0) ok = false;
    from = idx < 0 ? from : idx;
    starts.push(idx);
  });
  if (!ok) starts.splice(0, starts.length, ...parts.map((_, k) => Math.round(raw.length * k / parts.length)));
  return parts.map((_, k) => {
    const a = starts[k], b = k + 1 < starts.length ? starts[k + 1] : Infinity;
    return lines.filter(l => l.i >= a && l.i < b);
  });
}

function scriptCard(s) {
  const has = !!loadScriptText(s.id);
  return `
    <a class="card script-item" href="#script/${encodeURIComponent(s.id)}">
      <div class="row-between"><h3>🎬 ${esc(s.title)}${s.original ? ` <span class="muted small">${esc(s.original)}${s.year ? ` (${s.year})` : ''}</span>` : ''}</h3>
      <span class="tag ${has ? 'done' : ''}">${has ? '원문 있음' : '원문 없음'}</span></div>
      <div class="meta">${(s.parts || []).length}개 파트 · 표현 ${(s.parts || []).reduce((n, p) => n + (p.expressions || []).length, 0)}개</div>
      ${s.summary ? `<p>${esc(s.summary)}</p>` : ''}
    </a>`;
}

function renderScripts() {
  setTitle('스크립트');
  view.innerHTML = scripts.length ? scripts.map(scriptCard).join('')
    : `<div class="empty"><span class="big">🎬</span>아직 스크립트가 없어요<br><span class="small">영상·대화·문장을 보내 주시면 여기에 정리돼요</span></div>`;
}

// 본문에서 핵심 표현을 형광펜으로 표시
function highlight(text, phrases) {
  let html = esc(text);
  const list = phrases.map(p => esc(p)).filter(Boolean).sort((a, b) => b.length - a.length);
  if (!list.length) return html;
  const re = new RegExp(`(${list.map(escRe).join('|')})`, 'gi');
  return html.replace(re, '<mark>$1</mark>');
}


function renderScript(id, partNo) {
  const s = scripts.find(x => x.id === id);
  if (!s) { setTitle('스크립트'); view.innerHTML = `<div class="empty"><span class="big">🔍</span>스크립트를 찾을 수 없어요<br><a class="small" href="#scripts" style="color:var(--primary)">목록으로 ›</a></div>`; return; }
  $('#back').dataset.to = partNo ? `#script/${s.id}` : '#scripts';
  if (partNo) return renderPart(s, partNo);
  setTitle(s.title);
  const text = loadScriptText(s.id);
  const split = text ? splitParts(s, text) : [];
  view.innerHTML = `
    <div class="card script-top">
      <h2>🎬 ${esc(s.title)}</h2>
      <div class="meta">${[s.original, s.year].filter(Boolean).map(esc).join(' · ')}</div>
      ${s.summary ? `<p>${esc(s.summary)}</p>` : ''}
    </div>
    ${scriptBox(s, text, split)}
    <div class="section-title">파트 <small>약 5~10분씩</small></div>
    ${(s.parts || []).map((p, k) => `
      <a class="card dialog-item" href="#script/${encodeURIComponent(s.id)}/${p.part}">
        <div class="day">Part<b>${p.part}</b></div>
        <div class="grow">
          <h3>${esc(p.title)}</h3>
          <div class="meta">${esc(p.time || '')}${text ? ` · ${split[k].length}문장` : ''} · 표현 ${(p.expressions || []).length}개</div>
        </div>
      </a>`).join('')}`;
  bindScriptBox(s);
}

// 원문 붙여넣기 / 관리 상자
function scriptBox(s, text, split) {
  if (text) return `
    <div class="card">
      <div class="row-between"><b>📄 내 원문</b><span class="muted small">${split.reduce((n, p) => n + p.length, 0)}문장 · 이 기기에만 저장됨</span></div>
      <div class="row" style="margin-top:10px">
        <button class="btn grow" id="sc-edit">원문 바꾸기</button>
        <button class="btn bad" id="sc-del">삭제</button>
      </div>
    </div>`;
  return `
    <div class="card">
      <b>📄 원문 붙여넣기</b>
      <p class="muted small" style="margin:6px 0 10px">영화 대본은 저작권이 있어서 공개 홈페이지에는 올리지 않아요. 가지고 계신 원문을 아래에 <b>한 번만</b> 붙여 넣으면 이 기기에만 저장되고, 자동으로 문장 정리와 파트 나누기가 돼요.</p>
      <textarea id="sc-text" rows="5" placeholder="원문 전체를 붙여 넣으세요"></textarea>
      <button class="btn primary block" id="sc-save" style="margin-top:10px">저장하고 파트 나누기</button>
    </div>`;
}
function bindScriptBox(s) {
  $('#sc-save')?.addEventListener('click', () => {
    const t = $('#sc-text').value.trim();
    if (t.split(/\n/).length < 20) { toast('원문이 너무 짧아요. 전체를 붙여 넣어 주세요'); return; }
    toast(saveScriptText(s.id, t) ? '저장했어요! 파트를 골라 읽어 보세요' : '저장에 실패했어요');
    route();
  });
  $('#sc-edit')?.addEventListener('click', () => {
    if (!confirm('지금 원문을 지우고 새로 붙여 넣을까요?')) return;
    saveScriptText(s.id, ''); route();
  });
  $('#sc-del')?.addEventListener('click', () => {
    if (!confirm('이 기기에 저장된 원문을 삭제할까요?')) return;
    saveScriptText(s.id, ''); route(); toast('삭제했어요');
  });
}

/* 파트 화면: 영화 보면서 읽는 대본 + 학습 노트 */
const READ_SIZES = [{ k: 's', label: '가', px: 16 }, { k: 'm', label: '가', px: 19 }, { k: 'l', label: '가', px: 22 }];
let readSize = readJSON(PREFS_KEY, {}).readSize || 'm';

function renderPart(s, partNo) {
  const parts = s.parts || [];
  const k = parts.findIndex(p => p.part === partNo);
  const p = parts[k];
  if (!p) { location.hash = `#script/${s.id}`; return; }
  setTitle(`${s.title} · Part ${p.part}`);
  const text = loadScriptText(s.id);
  const lines = text ? splitParts(s, text)[k] : [];
  const prev = parts[k - 1], next = parts[k + 1];

  view.innerHTML = `
    <div class="card script-top">
      <div class="pill">Part ${p.part} · ${esc(p.time || '')}</div>
      <h2 style="margin-top:6px">${esc(p.title)}</h2>
      <p>${esc(p.summary || '')}</p>
      ${(p.scenes || []).length ? `<ol class="scenes">${p.scenes.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
    </div>

    <div class="section-title">📖 대본 <small>${lines.length ? `${lines.length}문장` : ''}</small></div>
    ${lines.length ? `
      <div class="read-tools">
        <span class="muted small">글자 크기</span>
        ${READ_SIZES.map(z => `<button class="chip size-${z.k} ${readSize === z.k ? 'on' : ''}" data-size="${z.k}">${z.label}</button>`).join('')}
      </div>
      <div class="card reader" id="reader" style="--read-size:${READ_SIZES.find(z => z.k === readSize).px}px">
        ${lines.map((l, i) => `<p class="${l.turn ? 'turn' : ''}"><span class="no">${i + 1}</span>${esc(l.en)}</p>`).join('')}
      </div>`
    : `<div class="card">
        <p class="muted small" style="margin:0 0 10px">원문을 아직 붙여 넣지 않았어요. 영화 페이지에서 원문을 한 번 붙여 넣으면 여기에 이 파트의 대본이 나와요.</p>
        <a class="btn block" href="#script/${encodeURIComponent(s.id)}">원문 붙여 넣으러 가기 ›</a>
      </div>`}

    ${(p.expressions || []).length ? `
      <div class="section-title">💬 숙어 · 표현 <small>${p.expressions.length}개</small></div>
      ${p.expressions.map(e => `
        <article class="card word">
          <div class="word-head"><div class="grow"><span class="w">${esc(e.phrase)}</span></div></div>
          <div class="m">${esc(e.meaning)}</div>
          ${e.scene ? `<div class="muted small" style="margin-top:4px">🎬 ${esc(e.scene)}</div>` : ''}
          ${e.example ? `<div class="ex"><div class="en">${esc(e.example)}</div>${e.exampleKo ? `<div class="ko">${esc(e.exampleKo)}</div>` : ''}</div>` : ''}
        </article>`).join('')}` : ''}

    ${(p.grammar || []).length ? `
      <div class="section-title">📐 문법 · 패턴</div>
      ${p.grammar.map(g => `
        <article class="card word">
          <div class="word-head"><div class="grow"><span class="w" style="font-size:17px">${esc(g.point)}</span></div></div>
          <div class="m" style="font-weight:500">${esc(g.explain)}</div>
          ${g.example ? `<div class="ex"><div class="en">${esc(g.example)}</div>${g.exampleKo ? `<div class="ko">${esc(g.exampleKo)}</div>` : ''}</div>` : ''}
        </article>`).join('')}` : ''}

    <div class="pager">
      ${prev ? `<a class="card" href="#script/${encodeURIComponent(s.id)}/${prev.part}"><span class="muted small">‹ 이전</span><b>Part ${prev.part} · ${esc(prev.title)}</b></a>` : '<span></span>'}
      ${next ? `<a class="card right" href="#script/${encodeURIComponent(s.id)}/${next.part}"><span class="muted small">다음 ›</span><b>Part ${next.part} · ${esc(next.title)}</b></a>` : '<span></span>'}
    </div>`;

  $$('[data-size]').forEach(btn => btn.onclick = () => {
    readSize = btn.dataset.size;
    writeJSON(PREFS_KEY, { ...readJSON(PREFS_KEY, {}), readSize });
    $$('[data-size]').forEach(x => x.classList.toggle('on', x === btn));
    $('#reader').style.setProperty('--read-size', READ_SIZES.find(z => z.k === readSize).px + 'px');
  });
}

/* ---------- Dialog ----------
   메신저처럼 말풍선으로 보여주고, 한쪽 역할을 가려서 말하기 연습을 할 수 있어요. */
function dialogCard(d) {
  return `
    <a class="card dialog-item" href="#dialog/${encodeURIComponent(d.id)}">
      ${d.day ? `<div class="day">Day<b>${d.day}</b></div>` : ''}
      <div class="grow">
        <h3>${esc(d.key || d.title)}</h3>
        ${d.keyMeaning ? `<div class="km">${esc(d.keyMeaning)}</div>` : ''}
        <div class="meta">${esc(d.key ? d.title : (d.situation || prettyDate(d.date)))}</div>
      </div>
    </a>`;
}

// Day 순서 (Day 번호가 없으면 날짜순)
const dialogOrder = () => [...dialogs].sort((a, b) => (a.day || 1e9) - (b.day || 1e9) || (a.date || '').localeCompare(b.date || ''));
let dialogQuery = '';

function renderDialogs() {
  setTitle('Dialog');
  if (!dialogs.length) {
    view.innerHTML = `<div class="empty"><span class="big">💬</span>아직 Dialog가 없어요<br><span class="small">대화문을 보내 주시면 여기에 정리돼요</span></div>`;
    return;
  }
  view.innerHTML = `
    <div class="tools"><input type="search" id="dq" placeholder="표현이나 문장으로 검색 (예: make sure)" value="${esc(dialogQuery)}" autocomplete="off"></div>
    <div id="dlist"></div>`;
  const draw = () => {
    const q = dialogQuery.trim().toLowerCase().replace(/'/g, '’');
    const items = dialogOrder().filter(d => !q || [d.key, d.keyMeaning, d.title, d.situation, ...(d.lines || []).flatMap(l => [l.en, l.ko])]
      .some(f => (f || '').toLowerCase().includes(q)));
    $('#dlist').innerHTML = items.length ? items.map(dialogCard).join('') : `<div class="empty">검색 결과가 없어요</div>`;
  };
  draw();
  $('#dq').addEventListener('input', e => { dialogQuery = e.target.value; draw(); });
}

let dlgShowKo = true;
let dlgHide = ''; // 가릴 화자 이름 ('' = 모두 보기)

function renderDialog(id) {
  const d = dialogs.find(x => x.id === id);
  if (!d) { setTitle('Dialog'); view.innerHTML = `<div class="empty"><span class="big">🔍</span>Dialog를 찾을 수 없어요<br><a class="small" href="#dialogs" style="color:var(--primary)">목록으로 ›</a></div>`; return; }
  setTitle(d.day ? `Day ${d.day}` : d.title);
  const lines = d.lines || [];
  const exprs = d.expressions || [];
  const marks = d.marks || exprs.map(e => e.phrase);
  const order = dialogOrder();
  const at = order.indexOf(d);
  const prev = order[at - 1], next = order[at + 1];
  const speakers = [...new Set(lines.map(l => l.speaker).filter(Boolean))];
  if (dlgHide && !speakers.includes(dlgHide)) dlgHide = '';
  const hasKo = lines.some(l => l.ko);
  const wide = speakers.some(sp => sp.length > 2) ? 'wide' : '';
  const fullText = lines.map(l => l.en).join(' ');

  view.innerHTML = `
    <div class="card script-top">
      ${d.day ? `<div class="pill">Day ${d.day}</div>` : ''}
      <h2 style="margin-top:6px">${esc(d.key || d.title)}</h2>
      ${d.keyMeaning ? `<div class="km">${esc(d.keyMeaning)}</div>` : ''}
      <div class="meta" style="margin-top:6px">${[d.key ? d.title : '', d.situation].filter(Boolean).map(esc).join(' · ')}</div>
      ${d.summary ? `<p>${esc(d.summary)}</p>` : ''}
      <div class="toggle-row" style="flex-wrap:wrap">
        ${hasKo ? `<button class="chip ${dlgShowKo ? 'on' : ''}" id="dk">해석 보기</button>` : ''}
        <button class="chip" data-speak="${esc(fullText)}">🔊 전체 듣기</button>
      </div>
      ${speakers.length > 1 ? `
        <div class="muted small" style="margin:8px 2px 6px;font-weight:700">🎭 역할 연습 — 가릴 사람을 고르고, 먼저 말해 본 뒤 눌러서 확인하세요</div>
        <div class="chip-row" id="roles">
          <button class="chip ${!dlgHide ? 'on' : ''}" data-role="">모두 보기</button>
          ${speakers.map(sp => `<button class="chip ${dlgHide === sp ? 'on' : ''}" data-role="${esc(sp)}">${esc(sp)} 가리기</button>`).join('')}
        </div>` : ''}
    </div>

    <div class="section-title">Dialog</div>
    <div class="card dlg ${wide}" id="chat">
      ${lines.map(l => {
        const alt = speakers.indexOf(l.speaker) % 2 === 1;
        const hidden = dlgHide && l.speaker === dlgHide;
        return `
        <div class="dlg-line ${hidden ? 'masked' : ''}">
          <span class="who ${alt ? 'alt' : ''}">${esc(l.speaker || '')}</span>
          <div class="en">${highlight(l.en || '', marks)}</div>
          ${speakBtn(l.en || '')}
        </div>`;
      }).join('')}
    </div>

    ${hasKo ? `
      <div class="section-title" id="ko-title" ${dlgShowKo ? '' : 'hidden'}>해석</div>
      <div class="card dlg ko-block ${wide}" id="ko-block" ${dlgShowKo ? '' : 'hidden'}>
        ${lines.map(l => `
          <div class="dlg-line">
            <span class="who ${speakers.indexOf(l.speaker) % 2 === 1 ? 'alt' : ''}">${esc(l.speaker || '')}</span>
            <div class="ko">${esc(l.ko || '')}</div>
          </div>`).join('')}
      </div>` : ''}

    ${exprs.length ? `
      <div class="section-title">핵심 표현 <small>${exprs.length}개</small></div>
      <div class="card">${exprs.map(e => `<div class="expr"><b>${esc(e.phrase)}</b><span>${esc(e.meaning)}</span></div>`).join('')}</div>` : ''}

    ${(d.extras || []).length ? `
      <div class="section-title">추가 예문</div>
      <div class="card">${d.extras.map(x => `
        <div class="extra"><div class="row-between"><div class="grow"><div class="en">${highlight(x.en, marks)}</div>${x.ko ? `<div class="ko">${esc(x.ko)}</div>` : ''}</div>${speakBtn(x.en)}</div></div>`).join('')}</div>` : ''}

    ${prev || next ? `
      <div class="pager">
        ${prev ? `<a class="card" href="#dialog/${encodeURIComponent(prev.id)}"><span class="muted small">‹ 이전</span><b>${prev.day ? `Day ${prev.day} · ` : ''}${esc(prev.key || prev.title)}</b></a>` : '<span></span>'}
        ${next ? `<a class="card right" href="#dialog/${encodeURIComponent(next.id)}"><span class="muted small">다음 ›</span><b>${next.day ? `Day ${next.day} · ` : ''}${esc(next.key || next.title)}</b></a>` : '<span></span>'}
      </div>` : ''}`;

  $('#dk')?.addEventListener('click', e => {
    dlgShowKo = !dlgShowKo;
    e.target.classList.toggle('on', dlgShowKo);
    $('#ko-title').hidden = $('#ko-block').hidden = !dlgShowKo;
  });
  $('#roles')?.addEventListener('click', e => {
    const c = e.target.closest('[data-role]'); if (!c) return;
    dlgHide = c.dataset.role;
    const y = window.scrollY;
    renderDialog(id);
    window.scrollTo(0, y);
  });
  // 가린 말풍선을 누르면 그 줄만 보기
  $('#chat').addEventListener('click', e => {
    const m = e.target.closest('.dlg-line.masked, .dlg-line.peek');
    if (m && !e.target.closest('[data-speak]')) { m.classList.toggle('masked'); m.classList.toggle('peek'); }
  });
}

/* ---------- 일기 ----------
   일기와 첨삭 결과는 이 기기의 브라우저에 저장됩니다.
   첨삭은 요청문을 복사해 Claude에 붙여 넣고, 받은 답을 다시 붙여 넣는 방식이에요. */
const DIARY_KEY = 'my-english-diaries';
const DRAFT_KEY = 'my-english-diary-draft';
let diaries = readJSON(DIARY_KEY, []);
let diaryId = null; // 지금 보고 있는 일기 (null이면 새 일기)
const saveDiaries = () => writeJSON(DIARY_KEY, diaries);

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function correctionPrompt(text) {
  return `You are my English tutor. I'm a Korean learner of English. Please correct my English diary below.

Reply ONLY in this exact format. Keep the [SECTION] labels exactly as written, and write the explanations in Korean.

[CORRECTED]
(my whole diary rewritten in natural English, keeping my meaning and tone)

[MISTAKES]
- (my original phrase) → (corrected phrase) :: (short explanation in Korean)

[EXPRESSIONS]
- (useful natural English expression related to my diary) :: (meaning in Korean)

[COMMENT]
(one or two encouraging sentences in Korean)

---
My diary:
${text}`;
}

// Claude 답변을 섹션별로 나누기. 형식이 조금 달라도(마크다운 굵게, 코드 블록 등) 최대한 읽어냄
function parseCorrection(raw) {
  const re = /^[\s*#>`_]*\[(CORRECTED|MISTAKES|EXPRESSIONS|COMMENT)\][\s*`_:]*$/gim;
  const marks = [...raw.matchAll(re)];
  if (!marks.length) return null;
  const out = {};
  marks.forEach((m, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].index : raw.length;
    out[m[1].toUpperCase()] = raw.slice(m.index + m[0].length, end).replace(/^`{3}.*$/gm, '').trim();
  });
  const items = txt => (txt || '').split('\n')
    .map(l => l.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, '').trim())
    .filter(Boolean)
    .map(l => {
      const [a, ...b] = l.split('::');
      return { left: a.trim().replace(/\*\*/g, ''), right: b.join('::').trim() };
    });
  return {
    corrected: (out.CORRECTED || '').replace(/\*\*/g, ''),
    mistakes: items(out.MISTAKES).map(({ left, right }) => {
      const [from, ...to] = left.split(/\s*(?:→|->|=>)\s*/);
      return { from: from.replace(/^["“]|["”]$/g, ''), to: to.join(' → ').replace(/^["“]|["”]$/g, ''), why: right };
    }),
    expressions: items(out.EXPRESSIONS).map(({ left, right }) => ({ phrase: left, meaning: right })),
    comment: out.COMMENT || '',
  };
}

// 단어 단위 비교(LCS)로 고친 부분 표시
function diffHtml(a, b) {
  const A = a.split(/(\s+)/).filter(Boolean), B = b.split(/(\s+)/).filter(Boolean);
  if (A.length * B.length > 4e6) return esc(b);
  const n = A.length, m = B.length;
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out = [];
  const push = (kind, t) => { const last = out[out.length - 1]; if (last && last.kind === kind) last.t += t; else out.push({ kind, t }); };
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (A[i] === B[j]) { push('same', A[i]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) push('del', A[i++]);
    else push('ins', B[j++]);
  }
  while (i < n) push('del', A[i++]);
  while (j < m) push('ins', B[j++]);
  return out.map(p => p.kind === 'same' ? esc(p.t)
    : p.t.trim() ? `<${p.kind}>${esc(p.t)}</${p.kind}>` : (p.kind === 'ins' ? esc(p.t) : '')).join('');
}

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    const ok = document.execCommand('copy'); ta.remove(); return ok;
  }
}

let toastTimer;
function toast(msg) {
  let t = $('#toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function resultHtml(text, raw) {
  const r = parseCorrection(raw);
  if (!r) return `
    <div class="section-title">첨삭 결과</div>
    <div class="card"><p class="muted small" style="margin:0 0 8px">정해진 형식이 아니라서 받은 내용을 그대로 보여드려요.</p><div class="prose">${esc(raw)}</div></div>`;
  return `
    ${r.corrected ? `
      <div class="section-title">바뀐 부분 <small><del>지운 곳</del> <ins>고친 곳</ins></small></div>
      <div class="card diff">${diffHtml(text, r.corrected)}</div>
      <div class="section-title">고친 글</div>
      <div class="card"><div class="row-between"><div class="prose grow">${esc(r.corrected)}</div>${speakBtn(r.corrected)}</div></div>` : ''}
    ${r.mistakes.length ? `
      <div class="section-title">고친 이유 <small>${r.mistakes.length}개</small></div>
      <div class="card">${r.mistakes.map(m => `
        <div class="mistake">
          <div><span class="from">${esc(m.from)}</span>${m.to ? ` → <span class="to">${esc(m.to)}</span>` : ''}</div>
          ${m.why ? `<div class="why">${esc(m.why)}</div>` : ''}
        </div>`).join('')}</div>` : ''}
    ${r.expressions.length ? `
      <div class="section-title">배울 표현</div>
      <div class="card">${r.expressions.map(e => `<div class="expr"><b>${esc(e.phrase)}</b><span>${esc(e.meaning)}</span></div>`).join('')}</div>` : ''}
    ${r.comment ? `<div class="card comment">💬 ${esc(r.comment)}</div>` : ''}`;
}

function renderDiary() {
  setTitle('일기');
  const cur = diaries.find(d => d.id === diaryId);
  if (!cur) diaryId = null;
  const draft = readJSON(DRAFT_KEY, {});
  const text = cur ? cur.text : (draft.text || '');
  const raw = cur ? (cur.result || '') : (draft.result || '');
  const date = cur ? cur.date : todayKey();
  const past = [...diaries].sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt - a.updatedAt);

  view.innerHTML = `
    <div class="card">
      <div class="row-between" style="margin-bottom:8px">
        <b>${cur ? prettyDate(date) + ' 일기' : '✍️ 오늘의 영어 일기'}</b>
        ${cur ? `<button class="chip" id="new-diary">＋ 새 일기</button>` : `<span class="muted small">${prettyDate(date)}</span>`}
      </div>
      <textarea id="d-text" rows="7" placeholder="Today I ...&#10;&#10;짧아도 괜찮아요. 오늘 있었던 일을 영어로 써 보세요." autocapitalize="sentences" spellcheck="false">${esc(text)}</textarea>
      <div class="muted small" id="d-count" style="text-align:right;margin:4px 2px 10px"></div>
      <button class="btn primary block" id="d-copy">📋 첨삭 요청문 복사</button>
      <a class="btn block" href="https://claude.ai/new" target="_blank" rel="noopener" style="margin-top:8px">Claude 열기 ↗</a>
      <p class="muted small" style="margin:10px 2px 0">복사한 요청문을 Claude에 붙여 넣고, 받은 답변을 <b>전부 복사</b>해서 아래 칸에 붙여 넣어 주세요.</p>
    </div>

    <div class="card">
      <b>첨삭 결과 붙여넣기</b>
      <textarea id="d-result" rows="4" placeholder="Claude 답변을 여기에 붙여 넣으세요" style="margin-top:8px">${esc(raw)}</textarea>
      <div class="row" style="margin-top:10px">
        ${cur ? `<button class="btn bad" id="d-del">삭제</button>` : ''}
        <button class="btn primary grow" id="d-show">첨삭 결과 보기</button>
      </div>
    </div>

    <div id="d-out">${text && raw ? resultHtml(text, raw) : ''}</div>

    ${past.length ? `
      <div class="section-title">지난 일기 <small>${past.length}개</small></div>
      ${past.map(d => `
        <button class="card diary-item ${d.id === diaryId ? 'on' : ''}" data-diary="${d.id}">
          <div class="row-between"><b>${prettyDate(d.date)}</b><span class="tag ${d.result ? 'done' : ''}">${d.result ? '첨삭 완료' : '첨삭 전'}</span></div>
          <p>${esc(d.text)}</p>
        </button>`).join('')}` : ''}`;

  const tText = $('#d-text'), tResult = $('#d-result');
  const count = () => {
    const w = tText.value.trim() ? tText.value.trim().split(/\s+/).length : 0;
    $('#d-count').textContent = `${w} words`;
  };
  count();
  // 새 일기는 쓰는 중에 임시 저장
  const saveDraft = () => { if (!diaryId) writeJSON(DRAFT_KEY, { text: tText.value, result: tResult.value }); };
  tText.addEventListener('input', () => { count(); saveDraft(); });
  tResult.addEventListener('input', saveDraft);

  $('#d-copy').onclick = async () => {
    const t = tText.value.trim();
    if (!t) { toast('먼저 일기를 써 주세요'); tText.focus(); return; }
    toast(await copyText(correctionPrompt(t)) ? '복사했어요! Claude에 붙여 넣으세요' : '복사에 실패했어요');
  };

  $('#d-show').onclick = () => {
    const t = tText.value.trim(), r = tResult.value.trim();
    if (!t) { toast('먼저 일기를 써 주세요'); tText.focus(); return; }
    if (!r) { toast('Claude 답변을 붙여 넣어 주세요'); tResult.focus(); return; }
    if (diaryId) {
      Object.assign(diaries.find(d => d.id === diaryId), { text: t, result: r, updatedAt: Date.now() });
    } else {
      diaryId = Date.now().toString(36);
      diaries.push({ id: diaryId, date: todayKey(), text: t, result: r, createdAt: Date.now(), updatedAt: Date.now() });
      writeJSON(DRAFT_KEY, {});
    }
    saveDiaries();
    renderDiary();
    $('#d-out').scrollIntoView({ behavior: 'smooth', block: 'start' });
    toast('저장했어요 ✍️');
  };

  $('#new-diary')?.addEventListener('click', () => { diaryId = null; renderDiary(); window.scrollTo(0, 0); });
  $('#d-del')?.addEventListener('click', () => {
    if (!confirm('이 일기를 삭제할까요?')) return;
    diaries = diaries.filter(d => d.id !== diaryId);
    diaryId = null;
    saveDiaries();
    renderDiary();
    toast('삭제했어요');
  });
  $$('[data-diary]').forEach(b => b.onclick = () => { diaryId = b.dataset.diary; renderDiary(); window.scrollTo(0, 0); });
}

route();

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  // 새 버전이 올라오면 한 번 자동으로 새로고침해서 최신 내용을 보여줌
  const hadController = !!navigator.serviceWorker.controller;
  let reloaded = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (hadController && !reloaded) { reloaded = true; location.reload(); }
  });
  navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' })
    .then(reg => {
      reg.update();
      document.addEventListener('visibilitychange', () => { if (!document.hidden) reg.update(); });
    })
    .catch(() => {});
}
