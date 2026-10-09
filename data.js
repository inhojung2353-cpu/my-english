/* =========================================================
   홈페이지에 보이는 모든 내용은 이 파일에 있어요.
   Claude가 단어·스크립트를 정리해서 여기에 추가합니다.
   ========================================================= */
window.CONTENT = {
  title: 'My English Notebook',
  subtitle: '하나씩 쌓아가는 나의 영어 노트',

  /* ---------- 단어 · 표현 ----------
     word: 단어/표현, ipa: 발음 기호(미국식), pos: 품사, meaning: 뜻,
     example / exampleKo: 예문과 해석, note: 메모, date: 추가한 날짜, topic: 묶음 이름 */
  words: [
    {
      word: 'bored', ipa: '/bɔːrd/', pos: 'adj.', meaning: '(사람이) 지루해하는',
      example: "I'm so bored right now.", exampleKo: '나 지금 너무 지루해.',
      note: '감정을 느끼는 쪽은 -ed. "I\'m boring"은 "나는 재미없는 사람이야"라는 뜻이 돼요.',
      date: '2026-10-09', topic: '-ing / -ed 감정 형용사',
    },
    {
      word: 'boring', ipa: '/ˈbɔːrɪŋ/', pos: 'adj.', meaning: '(무엇이) 지루한, 지루하게 만드는',
      example: 'The lecture was so boring that I fell asleep.', exampleKo: '강의가 너무 지루해서 잠들어 버렸어.',
      note: '감정을 주는 쪽은 -ing.',
      date: '2026-10-09', topic: '-ing / -ed 감정 형용사',
    },
    {
      word: 'interested', ipa: '/ˈɪntrəstɪd/', pos: 'adj.', meaning: '관심 있는',
      example: "I'm really interested in Korean history.", exampleKo: '나는 한국사에 정말 관심이 많아.',
      note: 'interested in ~ 형태로 자주 써요. (흥미로운 = interesting)',
      date: '2026-10-09', topic: '-ing / -ed 감정 형용사',
    },
    {
      word: 'confusing', ipa: '/kənˈfjuːzɪŋ/', pos: 'adj.', meaning: '헷갈리게 하는',
      example: 'This math problem is confusing.', exampleKo: '이 수학 문제 헷갈려.',
      note: '내가 헷갈린 상태는 confused.',
      date: '2026-10-09', topic: '-ing / -ed 감정 형용사',
    },
    {
      word: 'bored out of my mind', ipa: '/bɔːrd aʊt əv maɪ maɪnd/', pos: 'phrase', meaning: '지루해 죽겠는',
      example: "I'm bored out of my mind.", exampleKo: '지루해 죽겠어.',
      date: '2026-10-09', topic: '원어민 표현',
    },
    {
      word: 'wiped out', ipa: '/waɪpt aʊt/', pos: 'phrase', meaning: '완전히 지친, 녹초가 된',
      example: "I'm totally wiped out today.", exampleKo: '오늘 완전 녹초야.',
      note: '비슷한 말: I\'m beat.',
      date: '2026-10-09', topic: '원어민 표현',
    },
    {
      word: 'You lost me.', ipa: '/juː lɔːst miː/', pos: 'phrase', meaning: '무슨 말인지 놓쳤어 / 이해 못 했어',
      example: "Sorry, you lost me. Can you say that again?", exampleKo: '미안, 무슨 말인지 놓쳤어. 다시 말해 줄래?',
      note: '"I\'m confused"보다 자연스러운 대화체.',
      date: '2026-10-09', topic: '원어민 표현',
    },
  ],

  /* ---------- 스크립트 ----------
     id: 주소에 쓰이는 이름(영문), title, source: 출처, date, summary: 한 줄 요약,
     lines: [{ speaker, en, ko }], expressions: [{ phrase, meaning }] — 본문에서 굵게 표시돼요 */
  scripts: [],
};
