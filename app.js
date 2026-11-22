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
// 품사 약어를 한글로 (n. → 명사, phrasal v. → 구동사 …). "n. / v."처럼 여러 개면 각각 바꿔요
const POS_KO = { 'n.': '명사', 'v.': '동사', 'adj.': '형용사', 'adv.': '부사', 'prep.': '전치사', 'conj.': '접속사',
  'phrasal v.': '구동사', 'phrase': '표현', 'pattern': '패턴' };
const posKo = pos => pos.split('/').map(p => POS_KO[p.trim()] || p.trim()).join(' · ');
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
  else if (page === 'dialogs') renderDialogs(id === 'mine' ? 'mine' : 'list');
  else if (page === 'dialog') renderDialog(decodeURIComponent(id || ''));
  else if (page === 'diary') renderDiary();
  else renderHome();
  window.scrollTo(0, 0);
}
const setTitle = t => { $('#page-title').textContent = t; document.title = t === 'My English' ? (C.title || t) : `${t} · My English`; };
$('#back').onclick = () => (history.length > 1 ? history.back() : (location.hash = $('#back').dataset.to));
window.addEventListener('hashchange', route);

/* ---------- 홈 ---------- */
// 날짜를 시드로 한 섞기: 같은 날에는 항상 같은 결과가 나와요
function seededShuffle(arr, seedStr) {
  let h = 1779033703 ^ seedStr.length;
  for (let i = 0; i < seedStr.length; i++) { h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  let t = h >>> 0;
  const rand = () => { t += 0x6D2B79F5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// 오늘의 단어·문장 기록: { day, words, wn(단어 새로고침 횟수), sn(문장 새로고침 횟수) }
// 날짜가 바뀌면 처음부터 다시 골라요. 🔄를 누르면 횟수가 늘어 다른 6개가 나와요
const DAILY_KEY = 'my-english-daily';
function dailyState() {
  const saved = readJSON(DAILY_KEY, {});
  return saved.day === todayKey() ? saved : { day: todayKey() };
}
const dailySeed = (prefix, n) => prefix + todayKey() + (n ? '#' + n : '');

// 오늘의 단어: 외우지 못한 단어에서만 6개.
// 하루 동안은 같은 단어를 유지하고, 그사이 ✓로 외운 단어만 빼고 다른 안 외운 단어로 채워요
function todayWords(reroll = false) {
  const st = dailyState();
  const n = (st.wn || 0) + (reroll ? 1 : 0);
  const unlearned = words.filter(w => !isLearned(w));
  const prev = Array.isArray(st.words) ? st.words : [];
  const kept = reroll ? [] : prev.map(x => unlearned.find(w => w.word === x)).filter(Boolean);
  let fill = seededShuffle(unlearned, dailySeed('w', n)).filter(w => !kept.includes(w));
  // 새로고침할 때는 단어가 충분하면 방금 본 6개와 겹치지 않게
  if (reroll && unlearned.length - prev.length >= 6) fill = fill.filter(w => !prev.includes(w.word));
  const picked = [...kept, ...fill].slice(0, 6);
  writeJSON(DAILY_KEY, { ...st, wn: n, words: picked.map(w => w.word) });
  return picked;
}

// 오늘의 문장: Dialog 전체 문장 중 너무 짧거나 긴 문장을 빼고 매일 6개
function todaySentences(reroll = false) {
  const st = dailyState();
  const n = (st.sn || 0) + (reroll ? 1 : 0);
  if (reroll) writeJSON(DAILY_KEY, { ...st, sn: n });
  const pool = dialogs.flatMap(d => (d.lines || [])
    .filter(l => l.ko && l.en && l.en.length >= 15 && l.en.length <= 160)
    .map(l => ({ en: l.en, ko: l.ko, day: d.day, id: d.id, key: d.key })));
  return seededShuffle(pool, dailySeed('s', n)).slice(0, 6);
}

// 오늘의 영작: Dialog 표현을 살짝 바꾼 문제(data.js writing) 중 6개.
// 날짜가 바뀌어도 그대로 두고, 🔄를 눌렀을 때만 새 6개로 바꿔요.
// 저장 형태: { ids: [문제 id 6개], since: 이 세트를 시작한 시각 }
const writing = C.writing || [];
const WRITE_SET_KEY = 'my-english-writing-set';
function todayWriting(reroll = false) {
  const saved = readJSON(WRITE_SET_KEY, null);
  const want = Math.min(6, writing.length);
  let ids = saved && Array.isArray(saved.ids) ? saved.ids.filter(id => writing.some(c => c.id === id)) : [];
  let since = saved && saved.since;
  if (!saved) {
    // 처음 한 번: 지금까지 보던 오늘 세트를 그대로 이어받고, 오늘 써 둔 답도 보이게
    const st = dailyState();
    ids = seededShuffle(writing, dailySeed('c', st.cn || 0)).slice(0, want).map(c => c.id);
    since = new Date(new Date().toDateString()).getTime();
  }
  if (reroll) {
    // 새로고침: 남은 문제가 충분하면 방금 본 6개와 겹치지 않게
    const fresh = writing.filter(c => !ids.includes(c.id));
    ids = seededShuffle(fresh.length >= want ? fresh : writing, 'c' + Date.now()).slice(0, want).map(c => c.id);
    since = Date.now();
  } else if (ids.length < want) {
    // 문제가 지워졌거나 모자라면 빈 자리만 채우기
    ids = [...ids, ...seededShuffle(writing.filter(c => !ids.includes(c.id)), 'c' + Date.now()).slice(0, want - ids.length).map(c => c.id)];
  }
  if (!saved || reroll || ids.length !== saved.ids.length) writeJSON(WRITE_SET_KEY, { ids, since });
  return ids.map(id => writing.find(c => c.id === id));
}
// 내가 쓴 영작은 날짜별로 계속 쌓여요 (이 기기에 저장). 키: '날짜|문제id'
const WRITE_LOG_KEY = 'my-english-writing-log';
function writingLog() {
  const log = readJSON(WRITE_LOG_KEY, null);
  if (log) return log;
  // 예전 방식(그날 하루만 저장)에 남아 있던 답을 옮겨 오기
  const old = readJSON('my-english-writing', {});
  const moved = {};
  Object.entries(old.answers || {}).forEach(([id, mine]) => {
    if (old.day && mine && mine.trim()) moved[`${old.day}|${id}`] = { date: old.day, id, mine, ts: Date.now() };
  });
  writeJSON(WRITE_LOG_KEY, moved);
  return moved;
}
// 지금 세트를 시작한 뒤에 쓴 답 중 문제마다 가장 최근 것을 칸에 채워 둬요 (며칠에 걸쳐 이어 쓰기 가능)
const writingSince = () => (readJSON(WRITE_SET_KEY, {}) || {}).since || 0;
const loadAnswers = () => {
  const since = writingSince(), out = {}, at = {};
  Object.values(writingLog()).forEach(e => {
    if ((e.ts || 0) >= since && !((at[e.id] || 0) > (e.ts || 0))) { out[e.id] = e.mine; at[e.id] = e.ts || 0; }
  });
  return out;
};
const saveAnswer = (id, text) => {
  const log = writingLog(), key = `${todayKey()}|${id}`;
  if (text.trim()) log[key] = { date: todayKey(), id, mine: text, ts: Date.now() };
  else {
    // 칸을 비우면 이 세트에서 쓴 그 문제의 답을 지워요 (다시 열어도 빈칸)
    const since = writingSince();
    Object.keys(log).forEach(k => { if (log[k].id === id && (log[k].ts || 0) >= since) delete log[k]; });
  }
  writeJSON(WRITE_LOG_KEY, log);
};
// 내 답 vs 모범 답안 비교 (둥근 따옴표·대소문자 차이는 무시)
function compareHtml(mine, model) {
  const a = normEn(mine), b = normEn(model);
  if (!a) return '';
  return a.toLowerCase() === b.toLowerCase()
    ? `<div class="comp-label">내 답과 비교</div><div class="comp-perfect">🎉 모범 답안과 똑같아요!</div>`
    : `<div class="comp-label">내 답과 비교 <span class="muted small"><del>내 답에만 있음</del> <ins>모범 답안</ins></span></div><div class="diff comp-mine">${diffHtml(a, b)}</div>`;
}
// 비교할 때 둥근 따옴표·대소문자 차이는 무시
const normEn = t => t.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();

// 유튜브 주소에서 영상 ID 뽑기 (watch?v=, youtu.be/, shorts/, embed/, live/)
function youtubeId(url = '') {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
  return m ? m[1] : (/^[\w-]{11}$/.test(url) ? url : null);
}
const embedUrl = id => `https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`;

// 앱에서 직접 추가한 영상은 이 기기에만 저장돼요
const VIDEO_KEY = 'my-english-videos';
const myVideos = () => readJSON(VIDEO_KEY, []);
const saveMyVideos = list => writeJSON(VIDEO_KEY, list);
function allVideos() {
  const fromData = (C.videos || []).map((v, i) => ({ ...v, ts: i, mine: false }));
  const mine = myVideos().map(v => ({ ...v, mine: true }));
  return [...fromData, ...mine].map(v => ({ ...v, vid: youtubeId(v.url) })).filter(v => v.vid)
    .sort((a, b) => (b.date || '').localeCompare(a.date || '') || (b.ts || 0) - (a.ts || 0));
}

function renderHome(reroll = {}) {
  setTitle('My English');
  const last = latestDate();
  const tw = todayWords(reroll.words);
  const ts = todaySentences(reroll.sents);
  const tc = todayWriting(reroll.write);
  const answers = loadAnswers();
  const dayOf = n => dialogs.find(d => d.day === n);
  const videos = allVideos();
  const main = videos[0];
  const today = new Date();
  const todayLabel = `${today.getMonth() + 1}월 ${today.getDate()}일`;

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

    <div class="section-title">📚 오늘의 단어 <span class="title-right"><small>${todayLabel}</small>${tw.length ? `<button class="reroll" id="reroll-words" aria-label="다른 단어로 새로고침">🔄</button>` : ''}</span></div>
    ${tw.length ? `
      <div class="home-tools"><button class="chip ${hideMeaning ? 'on' : ''}" id="home-hide">🙈 뜻 가리기</button><span class="muted small">${hideMeaning ? '단어를 누르면 뜻이 보여요' : ''}</span></div>
      <div class="card vlist ${hideMeaning ? 'hide-meaning' : ''}" id="today-words">${tw.map(w => `
      <div class="vrow word">
        <div class="vhead-row"><div class="vhead"><span class="vw">${esc(w.word)}</span>${w.ipa ? `<span class="ipa">${esc(w.ipa)}</span>` : ''}${w.pos ? `<span class="pos">${esc(posKo(w.pos))}</span>` : ''}</div>${speakBtn(w.word)}</div>
        <div class="vm">${esc(w.meaning)}</div>
        ${w.example ? `<div class="vex"><div class="en">${esc(w.example)}</div>${w.exampleKo ? `<div class="ko">${esc(w.exampleKo)}</div>` : ''}</div>` : ''}
      </div>`).join('')}</div>
      <a class="more-link" href="#words">단어 탭에서 더 보기 ›</a>`
    : words.length
      ? `<div class="card empty"><span class="big">🎉</span>모든 단어를 외웠어요!<br><span class="small">새 단어를 보내 주시면 여기에 다시 나와요</span></div>`
      : `<div class="card empty"><span class="big">📚</span>아직 단어가 없어요</div>`}

    <div class="section-title">💬 오늘의 문장 <span class="title-right"><small>누르면 영어</small>${ts.length ? `<button class="reroll" id="reroll-sents" aria-label="다른 문장으로 새로고침">🔄</button>` : ''}</span></div>
    ${ts.length ? `
      <p class="muted small" style="margin:-2px 4px 8px">한글을 보고 영어로 먼저 말해 본 뒤 눌러서 확인해 보세요.</p>
      <div class="card vlist" id="sents">${ts.map((t, i) => `
        <div class="vrow sent" data-i="${i}" role="button" tabindex="0" aria-expanded="false">
          <div class="sent-ko"><span class="sent-no">${i + 1}</span><span class="grow">${esc(t.ko)}</span></div>
          <div class="sent-en">
            <div class="row-between"><div class="en grow">${esc(t.en)}</div>${speakBtn(t.en)}</div>
            <a class="sent-src" href="#dialog/${encodeURIComponent(t.id)}">Day ${t.day} · ${esc(t.key || '')} ›</a>
          </div>
        </div>`).join('')}</div>
      <button class="more-link" id="sents-all">모두 펼치기</button>`
    : `<div class="card empty"><span class="big">💬</span>아직 Dialog가 없어요</div>`}

    <div class="section-title">✍️ 오늘의 영작 <span class="title-right"><small>Dialog 응용</small>${tc.length ? `<button class="reroll" id="reroll-write" aria-label="다른 문제로 새로고침">🔄</button>` : ''}</span></div>
    ${tc.length ? `
      <p class="muted small" style="margin:-2px 4px 8px">한글 문장을 영어로 써 보고 <b>정답 보기</b>로 확인하세요. 답은 하나가 아니에요. 뜻이 통하면 OK! 문제는 🔄를 누를 때만 바뀌어요.</p>
      <div class="card vlist" id="compose">${tc.map((c, i) => {
        const d = dayOf(c.day);
        return `
        <div class="vrow comp" data-id="${esc(c.id)}">
          <div class="sent-ko"><span class="sent-no">${i + 1}</span><span class="grow">${esc(c.ko)}</span></div>
          <textarea class="comp-input" rows="2" placeholder="영어로 써 보세요" autocapitalize="sentences" autocomplete="off" spellcheck="false">${esc(answers[c.id] || '')}</textarea>
          <button class="chip comp-toggle">정답 보기</button>
          <div class="comp-answer">
            <div class="comp-label">모범 답안</div>
            <div class="row-between"><div class="en grow">${esc(c.en)}</div>${speakBtn(c.en)}</div>
            <div class="comp-diff"></div>
            ${(c.tips || []).length ? `<div class="comp-label">알아 둘 것</div><ul class="note-subs comp-tips">${c.tips.map(t => `<li>${inlineCode(t)}</li>`).join('')}</ul>` : ''}
            ${d ? `<a class="sent-src" href="#dialog/${encodeURIComponent(d.id)}">Day ${d.day} · ${esc(d.key || '')} 복습하기 ›</a>` : ''}
          </div>
        </div>`;
      }).join('')}</div>
      <a class="more-link" href="#dialogs/mine">쓴 영작은 저장돼요 · 지난 영작 보기 ›</a>`
    : ''}

    <div class="section-title">🎬 오늘의 영상</div>
    ${main ? `
      <div class="card video-card">
        <div class="video-wrap"><iframe id="yt" src="${embedUrl(main.vid)}" title="${esc(main.title || 'YouTube video')}" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>
        <div class="video-meta">
          <b id="yt-title">${esc(main.title || '오늘의 영상')}</b>
          <div class="muted small" id="yt-note">${esc(main.note || '')}</div>
        </div>
      </div>
      ${videos.length > 1 ? `
        <div class="card vlist">${videos.map((v, i) => `
          <div class="vrow video-item ${i === 0 ? 'on' : ''}" data-v="${i}" role="button" tabindex="0">
            <span class="grow">${esc(v.title || '제목 없는 영상')}</span>
            <span class="muted small">${v.date ? esc(v.date.slice(5).replace('-', '.')) : ''}</span>
            ${v.mine ? `<button class="video-del" data-del="${esc(String(v.ts))}" aria-label="영상 삭제">✕</button>` : ''}
          </div>`).join('')}</div>`
      : main.mine ? `<button class="more-link" data-del="${esc(String(main.ts))}">이 영상 삭제</button>` : ''}`
    : `<div class="card empty"><span class="big">🎬</span>아직 영상이 없어요<br><span class="small">아래에 유튜브 링크를 붙여 넣어 추가해 보세요</span></div>`}

    <div class="card video-add">
      <b>＋ 영상 추가</b>
      <input type="url" id="v-url" placeholder="유튜브 링크 붙여 넣기" autocomplete="off" inputmode="url">
      <input type="text" id="v-title" placeholder="제목 (선택)" autocomplete="off">
      <button class="btn primary block" id="v-add">추가하기</button>
      <p class="muted small" style="margin:8px 2px 0">추가한 영상은 이 기기에만 저장돼요. 가장 최근에 추가한 영상이 위에 크게 나와요.</p>
    </div>`;

  // 🔄 새로고침: 화면 위치는 그대로 두고 그 영역만 새 6개로
  const refresh = (opt, msg) => { const y = window.scrollY; renderHome(opt); window.scrollTo(0, y); toast(msg); };
  $('#reroll-words')?.addEventListener('click', () => refresh({ words: true }, '새 단어 6개를 골랐어요'));
  $('#reroll-sents')?.addEventListener('click', () => refresh({ sents: true }, '새 문장 6개를 골랐어요'));
  $('#reroll-write')?.addEventListener('click', () => refresh({ write: true }, '새 영작 문제 6개를 골랐어요'));

  // 오늘의 영작: 쓰는 대로 저장, 정답 보기에서 내 답과 비교
  const compose = $('#compose');
  if (compose) {
    compose.addEventListener('input', e => {
      const box = e.target.closest('.comp-input'); if (!box) return;
      saveAnswer(box.closest('.comp').dataset.id, box.value);
    });
    compose.addEventListener('click', e => {
      const btn = e.target.closest('.comp-toggle'); if (!btn) return;
      const row = btn.closest('.comp');
      const open = row.classList.toggle('open');
      btn.textContent = open ? '정답 접기' : '정답 보기';
      if (!open) return;
      row.querySelector('.comp-diff').innerHTML =
        compareHtml(row.querySelector('.comp-input').value, writing.find(c => c.id === row.dataset.id)?.en || '');
    });
  }

  // 오늘의 단어: 뜻 가리기 / 눌러서 보기
  const twBox = $('#today-words');
  if (twBox) {
    $('#home-hide').onclick = () => { hideMeaning = !hideMeaning; renderHome(); };
    twBox.addEventListener('click', e => {
      const row = e.target.closest('.word');
      if (row && hideMeaning && !e.target.closest('[data-speak]')) row.classList.toggle('peek');
    });
  }

  // 오늘의 문장: 눌러서 영어 보기
  const sents = $('#sents');
  if (sents) {
    const toggle = row => { row.classList.toggle('open'); row.setAttribute('aria-expanded', row.classList.contains('open')); };
    sents.addEventListener('click', e => {
      if (e.target.closest('[data-speak]') || e.target.closest('a')) return;
      const row = e.target.closest('.sent'); if (row) toggle(row);
    });
    sents.addEventListener('keydown', e => {
      const row = e.target.closest('.sent');
      if (row && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggle(row); }
    });
    $('#sents-all').onclick = e => {
      const open = e.target.textContent === '모두 펼치기';
      $$('.sent', sents).forEach(r => { r.classList.toggle('open', open); r.setAttribute('aria-expanded', open); });
      e.target.textContent = open ? '모두 접기' : '모두 펼치기';
    };
  }

  // 지난 영상 고르기
  const pick = item => {
    const v = videos[Number(item.dataset.v)];
    $('#yt').src = embedUrl(v.vid);
    $('#yt-title').textContent = v.title || '영상';
    $('#yt-note').textContent = v.note || '';
    $$('.video-item').forEach(x => x.classList.toggle('on', x === item));
    $('.video-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  $$('.video-item').forEach(item => {
    item.addEventListener('click', e => { if (!e.target.closest('[data-del]')) pick(item); });
    item.addEventListener('keydown', e => { if (e.key === 'Enter') pick(item); });
  });

  // 영상 삭제 (앱에서 추가한 영상만)
  $$('[data-del]').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    if (!confirm('이 영상을 목록에서 삭제할까요?')) return;
    saveMyVideos(myVideos().filter(v => String(v.ts) !== btn.dataset.del));
    renderHome(); toast('삭제했어요');
  }));

  // 영상 추가
  $('#v-add').onclick = () => {
    const url = $('#v-url').value.trim();
    const title = $('#v-title').value.trim();
    if (!youtubeId(url)) { toast('유튜브 링크가 맞는지 확인해 주세요'); $('#v-url').focus(); return; }
    if (allVideos().some(v => v.vid === youtubeId(url))) { toast('이미 추가된 영상이에요'); return; }
    saveMyVideos([...myVideos(), { url, title, date: todayKey(), ts: Date.now() }]);
    renderHome();
    toast('영상을 추가했어요 🎬');
    $('.video-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

/* ---------- 단어 ---------- */
let wordQuery = '';
let wordTopic = '';
let hideMeaning = true; // 뜻 가리기가 기본. 홈과 단어 탭이 같은 설정을 써요

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
          <span class="w" data-speak="${esc(w.word)}" role="button" title="눌러서 발음 듣기">${esc(w.word)}</span>${w.ipa ? `<span class="ipa">${esc(w.ipa)}</span>` : ''}${w.pos ? `<span class="pos">${esc(posKo(w.pos))}</span>` : ''}
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
      <div class="meta">${(s.parts || []).length}개 파트 · 단어 ${(s.parts || []).reduce((n, p) => n + (p.words || []).length, 0)} · 표현 ${(s.parts || []).reduce((n, p) => n + (p.expressions || []).length, 0)}</div>
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
          <div class="meta">${esc(p.time || '')}${text ? ` · ${split[k].length}문장` : ''} · 단어 ${(p.words || []).length} · 표현 ${(p.expressions || []).length}</div>
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

    ${(p.words || []).length ? `
      <div class="section-title">📝 단어 <small>${p.words.length}개</small></div>
      <div class="card vlist">${p.words.map(w => `
        <div class="vrow">
          <div class="vhead-row"><div class="vhead"><span class="vw">${esc(w.word)}</span>${w.ipa ? `<span class="ipa">${esc(w.ipa)}</span>` : ''}${w.pos ? `<span class="pos">${esc(posKo(w.pos))}</span>` : ''}</div>${speakBtn(w.word)}</div>
          <div class="vm">${esc(w.meaning)}</div>
          ${w.example ? `<div class="vex"><div class="en">${esc(w.example)}</div>${w.exampleKo ? `<div class="ko">${esc(w.exampleKo)}</div>` : ''}</div>` : ''}
        </div>`).join('')}</div>` : ''}

    ${(p.expressions || []).length ? `
      <div class="section-title">💬 숙어 · 표현 <small>${p.expressions.length}개</small></div>
      <div class="card vlist">${p.expressions.map(e => `
        <div class="vrow">
          <div class="vhead"><span class="vw">${esc(e.phrase)}</span></div>
          <div class="vm">${esc(e.meaning)}</div>
          ${e.scene ? `<div class="vscene">🎬 ${esc(e.scene)}</div>` : ''}
          ${e.example ? `<div class="vex"><div class="en">${esc(e.example)}</div>${e.exampleKo ? `<div class="ko">${esc(e.exampleKo)}</div>` : ''}</div>` : ''}
        </div>`).join('')}</div>` : ''}

    ${(p.grammar || []).length ? `
      <div class="section-title">📐 문법 · 패턴 <small>${p.grammar.length}개</small></div>
      <div class="card vlist">${p.grammar.map(g => `
        <div class="vrow">
          <div class="vhead"><span class="vw">${esc(g.point)}</span></div>
          <div class="vm" style="font-weight:500">${esc(g.explain)}</div>
          ${g.example ? `<div class="vex"><div class="en">${esc(g.example)}</div>${g.exampleKo ? `<div class="ko">${esc(g.exampleKo)}</div>` : ''}</div>` : ''}
        </div>`).join('')}</div>` : ''}

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

// `단어` 표기를 강조 표시로
const inlineCode = t => esc(t).replace(/`([^`]+)`/g, '<code>$1</code>');

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

// Dialog 탭 위 [Dialog | 내 영작] 전환
function dialogSeg(mode) {
  const myCount = myWritingEntries().length;
  return `<div class="seg seg-2" role="tablist">
    <a href="#dialogs" role="tab" aria-selected="${mode === 'list'}" class="${mode === 'list' ? 'on' : ''}">Dialog <b>${dialogs.length}</b></a>
    <a href="#dialogs/mine" role="tab" aria-selected="${mode === 'mine'}" class="${mode === 'mine' ? 'on' : ''}">내 영작 <b>${myCount}</b></a>
  </div>`;
}

function renderDialogs(mode = 'list') { // 목록은 최신 Day가 위로 (내림차순)
  setTitle('Dialog');
  if (mode === 'mine') return renderMyWriting();
  if (!dialogs.length) {
    view.innerHTML = `<div class="tools">${dialogSeg(mode)}</div><div class="empty"><span class="big">💬</span>아직 Dialog가 없어요<br><span class="small">대화문을 보내 주시면 여기에 정리돼요</span></div>`;
    return;
  }
  view.innerHTML = `
    <div class="tools">${dialogSeg(mode)}<input type="search" id="dq" placeholder="표현이나 문장으로 검색 (예: make sure)" value="${esc(dialogQuery)}" autocomplete="off"></div>
    <div id="dlist"></div>`;
  const draw = () => {
    const q = dialogQuery.trim().toLowerCase().replace(/'/g, '’');
    const items = dialogOrder().reverse().filter(d => !q || [d.key, d.keyMeaning, d.title, d.situation, ...(d.lines || []).flatMap(l => [l.en, l.ko])]
      .some(f => (f || '').toLowerCase().includes(q)));
    $('#dlist').innerHTML = items.length ? items.map(dialogCard).join('') : `<div class="empty">검색 결과가 없어요</div>`;
  };
  draw();
  $('#dq').addEventListener('input', e => { dialogQuery = e.target.value; draw(); });
}

// 내 영작: 홈에서 쓴 답이 날짜별로 쌓여요 (최신 날짜가 위로)
function myWritingEntries() {
  return Object.entries(writingLog())
    .map(([key, e]) => ({ key, ...e, c: writing.find(c => c.id === e.id) }))
    .filter(e => e.c && e.mine && e.mine.trim())
    .sort((a, b) => b.date.localeCompare(a.date) || (b.ts || 0) - (a.ts || 0));
}

function renderMyWriting() {
  const entries = myWritingEntries();
  const groups = {};
  entries.forEach(e => (groups[e.date] ||= []).push(e));
  view.innerHTML = `<div class="tools">${dialogSeg('mine')}</div>` + (entries.length
    ? Object.keys(groups).map(date => `
      <div class="group-title">${prettyDate(date)} · ${groups[date].length}문장</div>
      <div class="card vlist">${groups[date].map(e => {
        const d = dialogs.find(x => x.day === e.c.day);
        return `
        <div class="vrow mine-item" data-key="${esc(e.key)}">
          <div class="vhead-row"><div class="mine-ko grow">${esc(e.c.ko)}</div><button class="video-del" data-del aria-label="이 영작 삭제">✕</button></div>
          <div class="comp-label">내 답</div>
          <div class="mine-text">${esc(e.mine)}</div>
          <div class="comp-label">모범 답안</div>
          <div class="row-between"><div class="en grow">${esc(e.c.en)}</div>${speakBtn(e.c.en)}</div>
          <button class="chip mine-toggle">비교 · 설명 보기</button>
          <div class="mine-more">
            ${compareHtml(e.mine, e.c.en)}
            ${(e.c.tips || []).length ? `<div class="comp-label">알아 둘 것</div><ul class="note-subs comp-tips">${e.c.tips.map(t => `<li>${inlineCode(t)}</li>`).join('')}</ul>` : ''}
            ${d ? `<a class="sent-src" href="#dialog/${encodeURIComponent(d.id)}">Day ${d.day} · ${esc(d.key || '')} 복습하기 ›</a>` : ''}
          </div>
        </div>`;
      }).join('')}</div>`).join('')
    : `<div class="empty"><span class="big">✍️</span>아직 저장된 영작이 없어요<br><span class="small">홈의 오늘의 영작에서 영어로 쓰면 여기에 날짜별로 쌓여요</span><br><a class="small" href="#home" style="color:var(--primary)">오늘의 영작 하러 가기 ›</a></div>`);

  view.addEventListener('click', onMyWritingClick);
}
function onMyWritingClick(e) {
  if (!location.hash.startsWith('#dialogs/mine')) { view.removeEventListener('click', onMyWritingClick); return; }
  const item = e.target.closest('.mine-item'); if (!item) return;
  if (e.target.closest('[data-del]')) {
    if (!confirm('이 영작을 삭제할까요?')) return;
    const log = writingLog(); delete log[item.dataset.key]; writeJSON(WRITE_LOG_KEY, log);
    view.removeEventListener('click', onMyWritingClick);
    const y = window.scrollY; renderMyWriting(); window.scrollTo(0, y); toast('삭제했어요');
    return;
  }
  const btn = e.target.closest('.mine-toggle'); if (!btn) return;
  const open = item.classList.toggle('open');
  btn.textContent = open ? '접기' : '비교 · 설명 보기';
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
  const whoW = Math.max(26, ...speakers.map(sp => Math.ceil(sp.length * 9.5))); // 가장 긴 이름에 맞춰 줄 맞춤
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
    <div class="card dlg ${wide}" style="--who-w:${whoW}px" id="chat">
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
      <div class="card dlg ko-block ${wide}" style="--who-w:${whoW}px" id="ko-block" ${dlgShowKo ? '' : 'hidden'}>
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

    ${(d.notes || []).length ? `
      <div class="section-title">📐 문법 노트</div>
      <div class="card vlist">${d.notes.map(n => `
        <div class="vrow">
          <div class="vhead"><span class="vw">${esc(n.point)}</span></div>
          <div class="note-body">${inlineCode(n.explain)}</div>
          ${(n.subs || []).length ? `<ul class="note-subs">${n.subs.map(x => `<li>${inlineCode(x)}</li>`).join('')}</ul>` : ''}
        </div>`).join('')}</div>` : ''}

    ${(d.questions || []).length ? `
      <div class="section-title">💭 생각해 볼 질문 <small>먼저 영어로 답해 보세요</small></div>
      <div class="card vlist" id="dq-list">${d.questions.map((q, i) => `
        <div class="vrow qa">
          <div class="vhead-row"><div class="qa-q grow"><span class="sent-no">${i + 1}</span><span>${esc(q.q)}</span></div>${speakBtn(q.q)}</div>
          <button class="chip qa-toggle">예시 답 보기</button>
          <div class="qa-a">
            <div class="row-between"><div class="en grow">${esc(q.answer)}</div>${speakBtn(q.answer)}</div>
            ${q.answerKo ? `<div class="ko">${esc(q.answerKo)}</div>` : ''}
          </div>
        </div>`).join('')}</div>` : ''}

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
  // 생각해 볼 질문: 예시 답 펼치기
  $('#dq-list')?.addEventListener('click', e => {
    const btn = e.target.closest('.qa-toggle'); if (!btn) return;
    const open = btn.closest('.qa').classList.toggle('open');
    btn.textContent = open ? '접기' : '예시 답 보기';
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
