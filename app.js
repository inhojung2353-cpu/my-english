'use strict';

/* 보기 전용 화면. 내용은 data.js(window.CONTENT)에서 가져옵니다. */

const C = window.CONTENT || { words: [], scripts: [] };
const words = C.words || [];
const scripts = C.scripts || [];

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
const latestDate = () => [...words, ...scripts].map(x => x.date || '').sort().pop();

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
  const [page, id] = (location.hash.slice(1) || 'home').split('/');
  const tab = page === 'script' ? 'scripts' : page;
  $$('.tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
  $('#back').hidden = page !== 'script';
  if (page === 'words') renderWords();
  else if (page === 'scripts') renderScripts();
  else if (page === 'script') renderScript(decodeURIComponent(id || ''));
  else renderHome();
  window.scrollTo(0, 0);
}
const setTitle = t => { $('#page-title').textContent = t; document.title = t === 'My English' ? (C.title || t) : `${t} · My English`; };
$('#back').onclick = () => (history.length > 1 ? history.back() : (location.hash = '#scripts'));
window.addEventListener('hashchange', route);

/* ---------- 홈 ---------- */
function renderHome() {
  setTitle('My English');
  const recentWords = [...words].sort(byDateDesc).slice(0, 6);
  const recentScripts = [...scripts].sort(byDateDesc).slice(0, 3);
  view.innerHTML = `
    <div class="hero">
      <h2>${esc(C.title || 'My English Notebook')}</h2>
      <p>${esc(C.subtitle || '')}</p>
    </div>
    <div class="stats">
      <a class="stat" href="#words"><b>${words.length}</b><span>단어 · 표현</span></a>
      <a class="stat" href="#scripts"><b>${scripts.length}</b><span>스크립트</span></a>
      <div class="stat"><b style="font-size:16px;line-height:33px">${latestDate() ? latestDate().slice(5).replace('-', '.') : '-'}</b><span>마지막 업데이트</span></div>
    </div>

    <div class="section-title">최근 단어 <a href="#words">전체 보기 ›</a></div>
    ${recentWords.length ? `<div class="mini-words">${recentWords.map(w => `
      <a class="card" href="#words"><div class="w">${esc(w.word)}</div>${w.ipa ? `<div class="ipa">${esc(w.ipa)}</div>` : ''}<div class="m">${esc(w.meaning)}</div></a>`).join('')}</div>`
    : `<div class="card empty"><span class="big">📚</span>아직 단어가 없어요</div>`}

    <div class="section-title">최근 스크립트 <a href="#scripts">전체 보기 ›</a></div>
    ${recentScripts.length ? recentScripts.map(scriptCard).join('')
    : `<div class="card empty"><span class="big">🎬</span>아직 스크립트가 없어요</div>`}`;
}

/* ---------- 단어 ---------- */
let wordQuery = '';
let wordTopic = '';
let hideMeaning = false;

function wordCard(w) {
  return `
    <article class="card word">
      <div class="word-head">
        <div style="flex:1;min-width:0">
          <span class="w" data-speak="${esc(w.word)}" role="button" title="눌러서 발음 듣기">${esc(w.word)}</span>${w.pos ? `<span class="pos">${esc(w.pos)}</span>` : ''}
          ${w.ipa ? `<div class="ipa">${esc(w.ipa)}</div>` : ''}
        </div>
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
      <input type="search" id="wq" placeholder="단어나 뜻으로 검색" value="${esc(wordQuery)}" autocomplete="off">
      <div class="chip-row" id="topics">
        <button class="chip ${hideMeaning ? 'on' : ''}" id="hide">🙈 뜻 가리기</button>
        <button class="chip ${!wordTopic ? 'on' : ''}" data-topic="">전체</button>
        ${topics.map(t => `<button class="chip ${wordTopic === t ? 'on' : ''}" data-topic="${esc(t)}">${esc(t)}</button>`).join('')}
      </div>
    </div>
    <div id="list" class="${hideMeaning ? 'hide-meaning' : ''}"></div>`;

  const list = $('#list');
  const draw = () => {
    const q = wordQuery.trim().toLowerCase();
    const items = words.filter(w =>
      (!wordTopic || w.topic === wordTopic) &&
      (!q || [w.word, w.meaning, w.example, w.exampleKo, w.note].some(f => (f || '').toLowerCase().includes(q))));
    if (!words.length) { list.innerHTML = `<div class="empty"><span class="big">📚</span>아직 단어가 없어요</div>`; return; }
    if (!items.length) { list.innerHTML = `<div class="empty">검색 결과가 없어요</div>`; return; }
    // 날짜별로 묶어서 최신순
    const groups = {};
    items.forEach(w => (groups[w.date || ''] ||= []).push(w));
    list.innerHTML = Object.keys(groups).sort().reverse().map(d => `
      <div class="group-title">${d ? prettyDate(d) : '날짜 없음'} · ${groups[d].length}개</div>
      ${groups[d].map(wordCard).join('')}`).join('');
  };
  draw();

  $('#wq').addEventListener('input', e => { wordQuery = e.target.value; draw(); });
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
    const card = e.target.closest('.word');
    if (card && hideMeaning && !e.target.closest('[data-speak]')) card.classList.toggle('peek');
  });
}

/* ---------- 스크립트 ---------- */
function scriptCard(s) {
  return `
    <a class="card script-item" href="#script/${encodeURIComponent(s.id)}">
      <h3>${esc(s.title)}</h3>
      <div class="meta">${[s.source, prettyDate(s.date)].filter(Boolean).map(esc).join(' · ')}</div>
      ${s.summary ? `<p>${esc(s.summary)}</p>` : ''}
    </a>`;
}

function renderScripts() {
  setTitle('스크립트');
  const items = [...scripts].sort(byDateDesc);
  view.innerHTML = items.length ? items.map(scriptCard).join('')
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

let showKo = true;
function renderScript(id) {
  const s = scripts.find(x => x.id === id);
  if (!s) { setTitle('스크립트'); view.innerHTML = `<div class="empty"><span class="big">🔍</span>스크립트를 찾을 수 없어요<br><a class="small" href="#scripts" style="color:var(--primary)">목록으로 ›</a></div>`; return; }
  setTitle(s.title);
  const exprs = s.expressions || [];
  const lines = s.lines || [];
  const speakers = [...new Set(lines.map(l => l.speaker).filter(Boolean))];
  const hasKo = lines.some(l => l.ko);
  const fullText = lines.map(l => l.en).join(' ');

  view.innerHTML = `
    <div class="card script-top">
      <h2>${esc(s.title)}</h2>
      <div class="meta">${[s.source, prettyDate(s.date)].filter(Boolean).map(esc).join(' · ')}</div>
      ${s.summary ? `<p>${esc(s.summary)}</p>` : ''}
      <div class="toggle-row">
        ${hasKo ? `<button class="chip ${showKo ? 'on' : ''}" id="ko">해석 보기</button>` : ''}
        <button class="chip" data-speak="${esc(fullText)}">🔊 전체 듣기</button>
      </div>
    </div>

    <div class="card ${showKo ? '' : 'hide-ko'}" id="lines">
      ${lines.map(l => {
        const idx = speakers.indexOf(l.speaker);
        return `
        <div class="line">
          ${l.speaker ? `<div class="sp ${idx % 2 ? 'alt' : ''}">${esc(l.speaker.slice(0, 1).toUpperCase())}</div>` : ''}
          <div class="body">
            ${l.speaker ? `<div class="name">${esc(l.speaker)}</div>` : ''}
            <div class="en">${highlight(l.en || '', exprs.map(e => e.phrase))}</div>
            ${l.ko ? `<div class="ko">${esc(l.ko)}</div>` : ''}
          </div>
          ${speakBtn(l.en || '')}
        </div>`;
      }).join('')}
    </div>

    ${exprs.length ? `
      <div class="section-title">핵심 표현 <small>${exprs.length}개</small></div>
      <div class="card">${exprs.map(e => `<div class="expr"><b>${esc(e.phrase)}</b><span>${esc(e.meaning)}</span></div>`).join('')}</div>` : ''}`;

  $('#ko')?.addEventListener('click', e => {
    showKo = !showKo;
    e.target.classList.toggle('on', showKo);
    $('#lines').classList.toggle('hide-ko', !showKo);
  });
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
