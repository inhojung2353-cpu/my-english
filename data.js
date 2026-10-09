/* =========================================================
   홈페이지에 보이는 모든 내용은 이 파일에 있어요.
   Claude가 단어·스크립트를 정리해서 여기에 추가합니다.
   ========================================================= */
window.CONTENT = {
  title: 'My English Notebook',
  subtitle: '하나씩 쌓아가는 나의 영어 노트',

  /* ---------- 단어 · 표현 ----------
     word: 단어/표현, ipa: 발음 기호(미국식), pos: 품사, meaning: 뜻,
     example / exampleKo: 예문과 해석, note: 메모, date: 추가한 날짜, topic: 주제, set: 묶음(Set 1, Set 2 …) */
  words: [
    {
      "word": "reliable",
      "ipa": "/rɪˈlaɪəbl/",
      "pos": "adj.",
      "meaning": "믿을 수 있는, 신뢰할 만한",
      "example": "We need a reliable supplier who can deliver on time.",
      "exampleKo": "제때 납품할 수 있는 믿을 만한 공급업체가 필요해요.",
      "note": "reliable source(믿을 만한 출처). rely on(~에 의지하다)과 같은 뿌리예요.",
      "date": "2026-10-09",
      "topic": "성격·태도",
      "set": "Set 1"
    },
    {
      "word": "estimate",
      "ipa": "/ˈestɪmət/",
      "pos": "n. / v.",
      "meaning": "견적(서), 추정치 / 추정하다",
      "example": "Could you send us a cost estimate by Friday?",
      "exampleKo": "금요일까지 비용 견적서를 보내 주실 수 있나요?",
      "note": "명사는 /ˈestɪmət/ [에스티멋], 동사는 /ˈestɪmeɪt/ [에스티메이트]로 발음이 달라요. rough estimate = 대략적인 추정치.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 1"
    },
    {
      "word": "implement",
      "ipa": "/ˈɪmplɪment/",
      "pos": "v.",
      "meaning": "시행하다, 실행하다",
      "example": "The company will implement a new security policy next month.",
      "exampleKo": "회사는 다음 달에 새 보안 정책을 시행할 거예요.",
      "note": "implement a plan / policy / system 형태로 자주 써요. 명사는 implementation.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "commitment",
      "ipa": "/kəˈmɪtmənt/",
      "pos": "n.",
      "meaning": "약속, 헌신, 전념",
      "example": "Thank you for your commitment to this project.",
      "exampleKo": "이 프로젝트에 헌신해 주셔서 감사합니다.",
      "note": "commitment to + 명사/동명사 (to 뒤에 ~ing). make a commitment = 약속하다.",
      "date": "2026-10-09",
      "topic": "성격·태도",
      "set": "Set 1"
    },
    {
      "word": "process",
      "ipa": "/ˈprɑːses/",
      "pos": "n. / v.",
      "meaning": "과정, 절차 / 처리하다",
      "example": "Your order is being processed and will ship tomorrow.",
      "exampleKo": "주문이 처리되고 있으며 내일 발송됩니다.",
      "note": "hiring process = 채용 절차, process a request = 요청을 처리하다.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "appliance",
      "ipa": "/əˈplaɪəns/",
      "pos": "n.",
      "meaning": "(가정용) 기기, 가전제품",
      "example": "All kitchen appliances come with a two-year warranty.",
      "exampleKo": "모든 주방 가전은 2년 보증이 제공됩니다.",
      "note": "home appliances = 가전제품. application(지원서, 앱)과 헷갈리지 마세요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 1"
    },
    {
      "word": "expenditure",
      "ipa": "/ɪkˈspendɪtʃər/",
      "pos": "n.",
      "meaning": "지출, 비용",
      "example": "We need to reduce our monthly expenditure on office supplies.",
      "exampleKo": "사무용품에 드는 월 지출을 줄여야 해요.",
      "note": "expenditure on ~ = ~에 대한 지출. expense보다 더 격식 있는 말이에요.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 1"
    },
    {
      "word": "executive",
      "ipa": "/ɪɡˈzekjətɪv/",
      "pos": "n. / adj.",
      "meaning": "임원, 경영진 / 경영의",
      "example": "The executives will meet to discuss next year’s budget.",
      "exampleKo": "임원들이 내년 예산을 논의하려고 회의할 거예요.",
      "note": "CEO = Chief Executive Officer. executive assistant = 임원 비서.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "assignment",
      "ipa": "/əˈsaɪnmənt/",
      "pos": "n.",
      "meaning": "(맡겨진) 업무, 과제, 배정",
      "example": "My first assignment was to analyze last year’s sales data.",
      "exampleKo": "내 첫 업무는 작년 판매 데이터를 분석하는 거였어요.",
      "note": "동사 assign = 배정하다, 맡기다. be assigned to ~ = ~에 배정되다.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "opponent",
      "ipa": "/əˈpoʊnənt/",
      "pos": "n.",
      "meaning": "상대, 반대자",
      "example": "She easily defeated her opponent in the final match.",
      "exampleKo": "그녀는 결승전에서 상대를 쉽게 이겼어요.",
      "note": "반대 의견을 가진 사람에게도 써요: opponents of the plan = 그 계획의 반대자들.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 1"
    },
    {
      "word": "distracted",
      "ipa": "/dɪˈstræktɪd/",
      "pos": "adj.",
      "meaning": "산만한, 정신이 딴 데 팔린",
      "example": "I get distracted easily when I work from home.",
      "exampleKo": "재택근무할 때는 쉽게 집중이 흐트러져요.",
      "note": "-ed라서 \"산만해진\" 사람의 상태예요 (bored/boring 규칙!). distracting = 주의를 흩뜨리는.",
      "date": "2026-10-09",
      "topic": "성격·태도",
      "set": "Set 1"
    },
    {
      "word": "state",
      "ipa": "/steɪt/",
      "pos": "v. / n.",
      "meaning": "(공식적으로) 말하다, 명시하다 / 상태, (미국의) 주",
      "example": "The contract clearly states that payment is due within 30 days.",
      "exampleKo": "계약서에 대금은 30일 이내에 지불해야 한다고 명확히 나와 있어요.",
      "note": "as stated above = 위에서 언급한 대로. state of mind = 마음 상태.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "over time",
      "ipa": "/ˌoʊvər ˈtaɪm/",
      "pos": "phrase",
      "meaning": "시간이 지나면서, 점차",
      "example": "Your English will improve over time if you keep practicing.",
      "exampleKo": "꾸준히 연습하면 영어 실력은 시간이 지나면서 늘 거예요.",
      "note": "붙여 쓴 overtime은 \"야근, 초과 근무\"라서 뜻이 달라요! (Dialog Day 11)",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 1"
    },
    {
      "word": "strong will",
      "ipa": "/ˌstrɔːŋ ˈwɪl/",
      "pos": "n.",
      "meaning": "강한 의지",
      "example": "It takes a strong will to study English every day.",
      "exampleKo": "매일 영어 공부를 하려면 강한 의지가 필요해요.",
      "note": "형용사는 strong-willed (의지가 강한). willpower = 의지력.",
      "date": "2026-10-09",
      "topic": "성격·태도",
      "set": "Set 1"
    },
    {
      "word": "patient",
      "ipa": "/ˈpeɪʃnt/",
      "pos": "adj. / n.",
      "meaning": "참을성 있는 / 환자",
      "example": "Thank you for being so patient while we fixed the issue.",
      "exampleKo": "문제를 해결하는 동안 기다려 주셔서 감사합니다.",
      "note": "명사 patience = 인내심. \"Thank you for your patience.\"는 고객 응대 단골 문장이에요.",
      "date": "2026-10-09",
      "topic": "성격·태도",
      "set": "Set 1"
    },
    {
      "word": "assess",
      "ipa": "/əˈses/",
      "pos": "v.",
      "meaning": "평가하다, 가늠하다",
      "example": "We need to assess the risks before we make a decision.",
      "exampleKo": "결정하기 전에 위험 요소를 평가해야 해요.",
      "note": "명사 assessment = 평가. assess the damage = 피해 규모를 평가하다.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "suspend",
      "ipa": "/səˈspend/",
      "pos": "v.",
      "meaning": "일시 중단하다, 정지하다",
      "example": "The service was suspended due to system maintenance.",
      "exampleKo": "시스템 점검으로 서비스가 일시 중단되었어요.",
      "note": "완전히 끝내는 게 아니라 \"잠시\" 멈추는 느낌이에요. 명사는 suspension.",
      "date": "2026-10-09",
      "topic": "일정·출장",
      "set": "Set 1"
    },
    {
      "word": "productivity",
      "ipa": "/ˌproʊdʌkˈtɪvəti/",
      "pos": "n.",
      "meaning": "생산성",
      "example": "The new software has increased our team’s productivity.",
      "exampleKo": "새 소프트웨어 덕분에 우리 팀 생산성이 올랐어요.",
      "note": "boost / improve productivity = 생산성을 높이다. productive = 생산적인.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "investigation",
      "ipa": "/ɪnˌvestɪˈɡeɪʃn/",
      "pos": "n.",
      "meaning": "조사, 수사",
      "example": "The company launched an investigation into the data leak.",
      "exampleKo": "회사는 데이터 유출에 대한 조사에 착수했어요.",
      "note": "investigation into ~ = ~에 대한 조사. 동사는 investigate.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "compensate",
      "ipa": "/ˈkɑːmpenseɪt/",
      "pos": "v.",
      "meaning": "보상하다, 보충하다",
      "example": "The airline compensated passengers for the delay.",
      "exampleKo": "항공사가 지연에 대해 승객들에게 보상했어요.",
      "note": "compensate (사람) for (손해). 명사 compensation = 보상(금), 급여.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 1"
    },
    {
      "word": "precaution",
      "ipa": "/prɪˈkɔːʃn/",
      "pos": "n.",
      "meaning": "예방 조치, 조심",
      "example": "As a precaution, please back up your files regularly.",
      "exampleKo": "만일에 대비해 파일을 정기적으로 백업해 주세요.",
      "note": "take precautions = 예방 조치를 취하다. as a precaution = 만일에 대비해.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 1"
    },
    {
      "word": "progressive",
      "ipa": "/prəˈɡresɪv/",
      "pos": "adj.",
      "meaning": "진보적인, 점진적인",
      "example": "The company has a progressive approach to remote work.",
      "exampleKo": "그 회사는 원격 근무에 대해 진보적인 방식을 취하고 있어요.",
      "note": "progress(진전) + -ive. \"점진적인\"으로도 써요: a progressive increase = 점진적인 증가.",
      "date": "2026-10-09",
      "topic": "성격·태도",
      "set": "Set 1"
    },
    {
      "word": "priority",
      "ipa": "/praɪˈɔːrəti/",
      "pos": "n.",
      "meaning": "우선순위, 우선 사항",
      "example": "Customer satisfaction is our top priority.",
      "exampleKo": "고객 만족이 우리의 최우선 과제예요.",
      "note": "top priority = 최우선 과제. 동사 prioritize = 우선순위를 정하다.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "release",
      "ipa": "/rɪˈliːs/",
      "pos": "v. / n.",
      "meaning": "출시하다, 공개하다 / 출시, 발표",
      "example": "The new version of the app will be released next week.",
      "exampleKo": "앱 새 버전은 다음 주에 출시돼요.",
      "note": "press release = 보도 자료, release date = 출시일.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "itinerary",
      "ipa": "/aɪˈtɪnəreri/",
      "pos": "n.",
      "meaning": "여행 일정(표)",
      "example": "I’ll email you the itinerary for the business trip.",
      "exampleKo": "출장 일정표를 이메일로 보내 드릴게요.",
      "note": "발음 주의: [아이티너레리]. travel itinerary = 여행 일정표.",
      "date": "2026-10-09",
      "topic": "일정·출장",
      "set": "Set 1"
    },
    {
      "word": "accommodate",
      "ipa": "/əˈkɑːmədeɪt/",
      "pos": "v.",
      "meaning": "수용하다, (요구를) 들어주다, 숙박시키다",
      "example": "The hotel can accommodate up to 200 guests.",
      "exampleKo": "그 호텔은 최대 200명까지 수용할 수 있어요.",
      "note": "accommodate a request = 요청을 들어주다. 명사 accommodation(s) = 숙소. 철자는 c 두 개, m 두 개!",
      "date": "2026-10-09",
      "topic": "일정·출장",
      "set": "Set 1"
    },
    {
      "word": "complete",
      "ipa": "/kəmˈpliːt/",
      "pos": "v. / adj.",
      "meaning": "완료하다, (양식을) 작성하다 / 완전한",
      "example": "Please complete the form and submit it by Monday.",
      "exampleKo": "양식을 작성해서 월요일까지 제출해 주세요.",
      "note": "complete a form = fill out a form (양식 작성). 명사는 completion.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 1"
    },
    {
      "word": "postpone",
      "ipa": "/poʊstˈpoʊn/",
      "pos": "v.",
      "meaning": "연기하다, 미루다",
      "example": "The meeting has been postponed until next Tuesday.",
      "exampleKo": "회의가 다음 주 화요일로 연기되었어요.",
      "note": "postpone + ~ing (동명사). 같은 뜻의 구동사는 put off.",
      "date": "2026-10-09",
      "topic": "일정·출장",
      "set": "Set 1"
    },
    {
      "word": "essential",
      "ipa": "/ɪˈsenʃl/",
      "pos": "adj.",
      "meaning": "필수적인, 매우 중요한",
      "example": "Good communication is essential for teamwork.",
      "exampleKo": "팀워크에는 원활한 소통이 꼭 필요해요.",
      "note": "It is essential to ~ / that ~. 복수 명사 essentials = 필수품.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 1"
    },
    {
      "word": "reimbursement",
      "ipa": "/ˌriːɪmˈbɜːrsmənt/",
      "pos": "n.",
      "meaning": "(비용) 환급, 상환",
      "example": "Submit your receipts to receive reimbursement for travel expenses.",
      "exampleKo": "출장비를 환급받으려면 영수증을 제출하세요.",
      "note": "동사 reimburse = (비용을) 돌려주다. 회사 경비 처리에서 자주 써요.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 1"
    },
    {
      "word": "decline",
      "ipa": "/dɪˈklaɪn/",
      "pos": "v. / n.",
      "meaning": "감소하다, (정중히) 거절하다 / 감소",
      "example": "Sales declined by 10% last quarter.",
      "exampleKo": "지난 분기에 매출이 10% 감소했어요.",
      "note": "\"정중히 거절하다\"로도 써요: decline an invitation = 초대를 거절하다.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "congestion",
      "ipa": "/kənˈdʒestʃən/",
      "pos": "n.",
      "meaning": "(교통) 혼잡, 정체",
      "example": "Traffic congestion is terrible during rush hour.",
      "exampleKo": "출퇴근 시간엔 교통 체증이 심해요.",
      "note": "코막힘에도 써요: nasal congestion.",
      "date": "2026-10-09",
      "topic": "일정·출장",
      "set": "Set 2"
    },
    {
      "word": "prosper",
      "ipa": "/ˈprɑːspər/",
      "pos": "v.",
      "meaning": "번영하다, 번창하다",
      "example": "The business prospered after it moved online.",
      "exampleKo": "온라인으로 옮긴 뒤 사업이 번창했어요.",
      "note": "prosperity = 번영, prosperous = 번영하는.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "negotiate",
      "ipa": "/nɪˈɡoʊʃieɪt/",
      "pos": "v.",
      "meaning": "협상하다",
      "example": "We negotiated a better price with the supplier.",
      "exampleKo": "공급업체와 협상해서 더 좋은 가격을 받았어요.",
      "note": "negotiate with + 사람. 명사는 negotiation.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "expand",
      "ipa": "/ɪkˈspænd/",
      "pos": "v.",
      "meaning": "확장하다, 넓히다",
      "example": "The company plans to expand into Asian markets.",
      "exampleKo": "회사는 아시아 시장으로 확장할 계획이에요.",
      "note": "expand into ~ = ~로 진출하다. 명사는 expansion.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "duration",
      "ipa": "/duˈreɪʃn/",
      "pos": "n.",
      "meaning": "(지속) 기간",
      "example": "Please stay seated for the duration of the flight.",
      "exampleKo": "비행하는 동안 내내 자리에 앉아 계세요.",
      "note": "for the duration of ~ = ~하는 동안 내내.",
      "date": "2026-10-09",
      "topic": "일정·출장",
      "set": "Set 2"
    },
    {
      "word": "procedure",
      "ipa": "/prəˈsiːdʒər/",
      "pos": "n.",
      "meaning": "절차, (의료) 시술",
      "example": "Please follow the safety procedures.",
      "exampleKo": "안전 절차를 따라 주세요.",
      "note": "process(과정)보다 정해진 \"규칙·순서\"에 가까워요.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "profit",
      "ipa": "/ˈprɑːfɪt/",
      "pos": "n. / v.",
      "meaning": "이익, 수익 / 이익을 얻다",
      "example": "The company made a profit this year.",
      "exampleKo": "회사가 올해 수익을 냈어요.",
      "note": "make a profit = 수익을 내다. profitable = 수익성 있는.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "promote",
      "ipa": "/prəˈmoʊt/",
      "pos": "v.",
      "meaning": "승진시키다, 홍보하다, 촉진하다",
      "example": "She was promoted to manager last month.",
      "exampleKo": "그녀는 지난달 매니저로 승진했어요.",
      "note": "be promoted to ~ = ~로 승진하다. 명사 promotion = 승진, 판촉.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "raise",
      "ipa": "/reɪz/",
      "pos": "v. / n.",
      "meaning": "올리다, (문제를) 제기하다 / 임금 인상",
      "example": "I’m going to ask my boss for a raise.",
      "exampleKo": "상사에게 월급 인상을 요청할 거예요.",
      "note": "raise는 \"무엇을 올리다\"(목적어 있음), rise는 \"스스로 오르다\".",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "guarantee",
      "ipa": "/ˌɡærənˈtiː/",
      "pos": "v. / n.",
      "meaning": "보장하다 / 보증",
      "example": "We guarantee delivery within 24 hours.",
      "exampleKo": "24시간 이내 배송을 보장합니다.",
      "note": "money-back guarantee = 환불 보증.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "lease",
      "ipa": "/liːs/",
      "pos": "n. / v.",
      "meaning": "임대차 계약 / 임대하다",
      "example": "We signed a two-year lease for the new office.",
      "exampleKo": "새 사무실을 2년 임대 계약했어요.",
      "note": "rent보다 장기적이고 공식적인 계약이에요.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "effective",
      "ipa": "/ɪˈfektɪv/",
      "pos": "adj.",
      "meaning": "효과적인, (규정이) 시행되는",
      "example": "The new policy is effective from January 1.",
      "exampleKo": "새 정책은 1월 1일부터 시행돼요.",
      "note": "effective(효과적인) vs efficient(효율적인) 구별하세요!",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "immediate",
      "ipa": "/ɪˈmiːdiət/",
      "pos": "adj.",
      "meaning": "즉각적인, 당면한, 직속의",
      "example": "This problem needs immediate attention.",
      "exampleKo": "이 문제는 즉각적인 조치가 필요해요.",
      "note": "immediately = 즉시. immediate supervisor = 직속 상사.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "prescribe",
      "ipa": "/prɪˈskraɪb/",
      "pos": "v.",
      "meaning": "(약을) 처방하다, 규정하다",
      "example": "The doctor prescribed some medicine for my cold.",
      "exampleKo": "의사가 감기약을 처방해 줬어요.",
      "note": "명사 prescription = 처방전. (목록의 Prescrive·prescribe를 하나로 합쳤어요)",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "major",
      "ipa": "/ˈmeɪdʒər/",
      "pos": "adj. / n. / v.",
      "meaning": "주요한, 큰 / 전공 / 전공하다",
      "example": "There were no major problems during the launch.",
      "exampleKo": "출시하는 동안 큰 문제는 없었어요.",
      "note": "major in ~ = ~을 전공하다. majority = 대다수.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "promptly",
      "ipa": "/ˈprɑːmptli/",
      "pos": "adv.",
      "meaning": "신속하게, 정각에",
      "example": "Please reply promptly to customer emails.",
      "exampleKo": "고객 이메일에는 신속하게 답장해 주세요.",
      "note": "at 9 a.m. promptly = 오전 9시 정각에. prompt = 신속한.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "warrant",
      "ipa": "/ˈwɔːrənt/",
      "pos": "v. / n.",
      "meaning": "~할 만하다, 정당화하다 / 영장",
      "example": "The situation doesn’t warrant a full investigation.",
      "exampleKo": "그 상황은 전면 조사를 할 정도는 아니에요.",
      "note": "warranty(품질 보증서)와 구별하세요.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "withdraw",
      "ipa": "/wɪðˈdrɔː/",
      "pos": "v.",
      "meaning": "(돈을) 인출하다, 철회하다, 물러나다",
      "example": "I need to withdraw some cash from the ATM.",
      "exampleKo": "ATM에서 현금을 좀 뽑아야 해요.",
      "note": "withdraw an offer = 제안을 철회하다. 명사 withdrawal.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "indicate",
      "ipa": "/ˈɪndɪkeɪt/",
      "pos": "v.",
      "meaning": "나타내다, 보여 주다",
      "example": "The data indicates that sales are improving.",
      "exampleKo": "데이터를 보면 매출이 좋아지고 있어요.",
      "note": "indicate that ~. indicator = 지표.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "ignore",
      "ipa": "/ɪɡˈnɔːr/",
      "pos": "v.",
      "meaning": "무시하다",
      "example": "Don’t ignore warning messages on your computer.",
      "exampleKo": "컴퓨터 경고 메시지를 무시하지 마세요.",
      "note": "ignorant(무지한)와는 뜻이 달라요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "renew",
      "ipa": "/rɪˈnuː/",
      "pos": "v.",
      "meaning": "갱신하다, 연장하다",
      "example": "I need to renew my passport before the trip.",
      "exampleKo": "여행 전에 여권을 갱신해야 해요.",
      "note": "renew a contract / subscription. 명사 renewal.",
      "date": "2026-10-09",
      "topic": "일정·출장",
      "set": "Set 2"
    },
    {
      "word": "opportunity",
      "ipa": "/ˌɑːpərˈtuːnəti/",
      "pos": "n.",
      "meaning": "기회",
      "example": "This job is a great opportunity to learn new skills.",
      "exampleKo": "이 일은 새로운 기술을 배울 좋은 기회예요.",
      "note": "opportunity to + 동사 / for + 명사.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "respond",
      "ipa": "/rɪˈspɑːnd/",
      "pos": "v.",
      "meaning": "응답하다, 반응하다",
      "example": "Please respond to this email by Friday.",
      "exampleKo": "금요일까지 이 이메일에 답해 주세요.",
      "note": "respond to ~ (to 필수). 명사 response.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "remit",
      "ipa": "/rɪˈmɪt/",
      "pos": "v.",
      "meaning": "송금하다",
      "example": "Please remit payment within 30 days.",
      "exampleKo": "30일 이내에 대금을 송금해 주세요.",
      "note": "remittance = 송금(액). 청구서·인보이스에 자주 나와요.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "reply",
      "ipa": "/rɪˈplaɪ/",
      "pos": "v. / n.",
      "meaning": "답장하다 / 답장",
      "example": "Sorry for the late reply.",
      "exampleKo": "답장이 늦어서 죄송해요.",
      "note": "reply to ~. 이메일 첫 문장 단골 표현이에요.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "prospective",
      "ipa": "/prəˈspektɪv/",
      "pos": "adj.",
      "meaning": "장래의, 잠재적인",
      "example": "We’re meeting with a prospective client tomorrow.",
      "exampleKo": "내일 잠재 고객과 미팅이 있어요.",
      "note": "prospective employee / buyer = 입사 예정자 / 구매 예정자.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "terminate",
      "ipa": "/ˈtɜːrmɪneɪt/",
      "pos": "v.",
      "meaning": "종료하다, 해지하다",
      "example": "Either party can terminate the contract with 30 days’ notice.",
      "exampleKo": "양측 모두 30일 전에 통보하면 계약을 해지할 수 있어요.",
      "note": "end보다 공식적인 말. 명사 termination.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "afford",
      "ipa": "/əˈfɔːrd/",
      "pos": "v.",
      "meaning": "(~할) 여유가 있다",
      "example": "I can’t afford a new car right now.",
      "exampleKo": "지금은 새 차를 살 여유가 없어요.",
      "note": "can’t afford to ~ (Dialog Day 6). affordable = 가격이 적당한.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "numerous",
      "ipa": "/ˈnuːmərəs/",
      "pos": "adj.",
      "meaning": "수많은",
      "example": "We received numerous complaints about the delay.",
      "exampleKo": "지연에 대한 불만을 수없이 받았어요.",
      "note": "many보다 격식 있는 말이에요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "react",
      "ipa": "/riˈækt/",
      "pos": "v.",
      "meaning": "반응하다",
      "example": "How did your boss react to the news?",
      "exampleKo": "상사가 그 소식에 어떻게 반응했어?",
      "note": "react to ~. 명사 reaction.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "annual",
      "ipa": "/ˈænjuəl/",
      "pos": "adj.",
      "meaning": "연례의, 매년의",
      "example": "The annual meeting is held every March.",
      "exampleKo": "연례 회의는 매년 3월에 열려요.",
      "note": "annual leave = 연차. annually = 매년.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "agenda",
      "ipa": "/əˈdʒendə/",
      "pos": "n.",
      "meaning": "안건, 의제",
      "example": "What’s on the agenda for today’s meeting?",
      "exampleKo": "오늘 회의 안건이 뭐예요?",
      "note": "on the agenda = 안건에 올라 있는.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "frequent",
      "ipa": "/ˈfriːkwənt/",
      "pos": "adj.",
      "meaning": "잦은, 빈번한",
      "example": "He’s a frequent customer at our store.",
      "exampleKo": "그는 우리 가게 단골이에요.",
      "note": "frequently = 자주. frequent flyer = 항공사 단골 고객.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "effect",
      "ipa": "/ɪˈfekt/",
      "pos": "n.",
      "meaning": "효과, 영향",
      "example": "The new rule had a positive effect on productivity.",
      "exampleKo": "새 규칙이 생산성에 긍정적인 영향을 줬어요.",
      "note": "effect(명사) vs affect(동사: 영향을 주다). have an effect on ~.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "efficient",
      "ipa": "/ɪˈfɪʃnt/",
      "pos": "adj.",
      "meaning": "효율적인",
      "example": "This new system is much more efficient.",
      "exampleKo": "이 새 시스템이 훨씬 효율적이에요.",
      "note": "명사 efficiency. effective(효과적인)와 구별!",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "candidate",
      "ipa": "/ˈkændɪdət/",
      "pos": "n.",
      "meaning": "후보자, 지원자",
      "example": "We interviewed five candidates for the position.",
      "exampleKo": "그 자리에 지원자 다섯 명을 면접했어요.",
      "note": "applicant(지원자)와 비슷해요.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "caution",
      "ipa": "/ˈkɔːʃn/",
      "pos": "n. / v.",
      "meaning": "주의, 조심 / 주의를 주다",
      "example": "Please use caution when the floor is wet.",
      "exampleKo": "바닥이 젖었을 때는 조심하세요.",
      "note": "cautious = 조심스러운. with caution = 조심해서.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "permission",
      "ipa": "/pərˈmɪʃn/",
      "pos": "n.",
      "meaning": "허락, 허가, 권한",
      "example": "You need permission to access this file.",
      "exampleKo": "이 파일에 접근하려면 권한이 필요해요.",
      "note": "ask for permission. 동사 permit = 허락하다.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "boost",
      "ipa": "/buːst/",
      "pos": "v. / n.",
      "meaning": "높이다, 끌어올리다 / 증가",
      "example": "The new campaign boosted our sales.",
      "exampleKo": "새 캠페인 덕분에 매출이 올랐어요.",
      "note": "boost productivity / confidence.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "confirmation",
      "ipa": "/ˌkɑːnfərˈmeɪʃn/",
      "pos": "n.",
      "meaning": "확인, 확정",
      "example": "You will receive a confirmation email shortly.",
      "exampleKo": "곧 확인 이메일을 받으실 거예요.",
      "note": "동사 confirm. booking confirmation = 예약 확인.",
      "date": "2026-10-09",
      "topic": "일정·출장",
      "set": "Set 2"
    },
    {
      "word": "frustrate",
      "ipa": "/ˈfrʌstreɪt/",
      "pos": "v.",
      "meaning": "좌절시키다, 짜증 나게 하다",
      "example": "The slow internet really frustrates me.",
      "exampleKo": "느린 인터넷 때문에 정말 짜증 나요.",
      "note": "frustrated(짜증 난 사람) vs frustrating(짜증 나게 하는 것).",
      "date": "2026-10-09",
      "topic": "감정·상태",
      "set": "Set 2"
    },
    {
      "word": "materials",
      "ipa": "/məˈtɪriəlz/",
      "pos": "n.",
      "meaning": "자료, 재료",
      "example": "I’ll send you the meeting materials in advance.",
      "exampleKo": "회의 자료를 미리 보내 드릴게요.",
      "note": "raw materials = 원자재.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "appropriate",
      "ipa": "/əˈproʊpriət/",
      "pos": "adj.",
      "meaning": "적절한",
      "example": "Is this outfit appropriate for the interview?",
      "exampleKo": "이 옷 면접에 적절할까?",
      "note": "반대말 inappropriate = 부적절한.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "impression",
      "ipa": "/ɪmˈpreʃn/",
      "pos": "n.",
      "meaning": "인상",
      "example": "She made a good impression on the interviewers.",
      "exampleKo": "그녀는 면접관들에게 좋은 인상을 남겼어요.",
      "note": "make a good first impression = 좋은 첫인상을 남기다.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "avoid",
      "ipa": "/əˈvɔɪd/",
      "pos": "v.",
      "meaning": "피하다",
      "example": "Try to avoid making the same mistake.",
      "exampleKo": "같은 실수를 하지 않도록 해요.",
      "note": "avoid + ~ing (동명사)!",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "manage to",
      "ipa": "/ˈmænɪdʒ tə/",
      "pos": "phrase",
      "meaning": "(어렵게) 간신히 ~해내다",
      "example": "I managed to finish the report on time.",
      "exampleKo": "보고서를 간신히 제시간에 끝냈어요.",
      "note": "과거형 managed to로 많이 써요.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "wrap up",
      "ipa": "/ˌræp ˈʌp/",
      "pos": "phrasal v.",
      "meaning": "마무리하다",
      "example": "Let’s wrap up the meeting.",
      "exampleKo": "회의를 마무리하죠.",
      "note": "\"That’s a wrap!\" = 끝!",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "examine",
      "ipa": "/ɪɡˈzæmɪn/",
      "pos": "v.",
      "meaning": "자세히 살펴보다, 검사하다, 진찰하다",
      "example": "The doctor examined my throat.",
      "exampleKo": "의사가 내 목을 진찰했어요.",
      "note": "examination(exam) = 시험, 검사.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "bring",
      "ipa": "/brɪŋ/",
      "pos": "v.",
      "meaning": "가져오다, 데려오다",
      "example": "Can you bring your laptop to the meeting?",
      "exampleKo": "회의에 노트북 가져올 수 있어요?",
      "note": "bring(이쪽으로) vs take(저쪽으로). bring up = 화제를 꺼내다.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "take off",
      "ipa": "/ˌteɪk ˈɔːf/",
      "pos": "phrasal v.",
      "meaning": "이륙하다, (옷을) 벗다, 쉬다, (갑자기) 잘되다",
      "example": "The plane takes off at 9 a.m.",
      "exampleKo": "비행기는 오전 9시에 이륙해요.",
      "note": "take a day off = 하루 쉬다. Her career took off. = 그녀의 커리어가 급성장했다.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "too ~ to …",
      "ipa": "",
      "pos": "pattern",
      "meaning": "너무 ~해서 …할 수 없다",
      "example": "I was too tired to go out last night.",
      "exampleKo": "어젯밤엔 너무 피곤해서 나갈 수 없었어요.",
      "note": "= so ~ that I couldn’t …",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "on top of that",
      "ipa": "",
      "pos": "phrase",
      "meaning": "게다가, 그것뿐 아니라",
      "example": "It was raining, and on top of that, I lost my umbrella.",
      "exampleKo": "비가 왔는데, 게다가 우산까지 잃어버렸어요.",
      "note": "on top of ~ = ~에 더해 (Dialog Day 28).",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "guilty",
      "ipa": "/ˈɡɪlti/",
      "pos": "adj.",
      "meaning": "죄책감이 드는, 유죄의",
      "example": "I feel guilty about missing her birthday.",
      "exampleKo": "그녀 생일을 놓쳐서 마음이 안 좋아요.",
      "note": "feel guilty about ~. guilty pleasure = 남몰래 즐기는 것.",
      "date": "2026-10-09",
      "topic": "감정·상태",
      "set": "Set 2"
    },
    {
      "word": "atmosphere",
      "ipa": "/ˈætməsfɪr/",
      "pos": "n.",
      "meaning": "분위기, 대기",
      "example": "I love the relaxed atmosphere of this cafe.",
      "exampleKo": "이 카페의 여유로운 분위기가 좋아요.",
      "note": "지구의 \"대기\"라는 뜻도 있어요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "depressed",
      "ipa": "/dɪˈprest/",
      "pos": "adj.",
      "meaning": "우울한",
      "example": "He’s been feeling depressed since he lost his job.",
      "exampleKo": "그는 일자리를 잃은 뒤로 우울해하고 있어요.",
      "note": "depressing = 우울하게 만드는. (목록의 depresse를 depressed로 정리했어요)",
      "date": "2026-10-09",
      "topic": "감정·상태",
      "set": "Set 2"
    },
    {
      "word": "several",
      "ipa": "/ˈsevrəl/",
      "pos": "adj.",
      "meaning": "몇몇의, 여러",
      "example": "I’ve been to Japan several times.",
      "exampleKo": "일본에 여러 번 가 봤어요.",
      "note": "a few보다 조금 많은 느낌이에요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "stuck",
      "ipa": "/stʌk/",
      "pos": "adj.",
      "meaning": "갇힌, 꼼짝 못 하는, 막힌",
      "example": "I was stuck in traffic for an hour.",
      "exampleKo": "한 시간 동안 차가 막혀서 꼼짝 못 했어요.",
      "note": "be stuck on ~ = (문제에서) 막히다. get stuck = 갇히다.",
      "date": "2026-10-09",
      "topic": "감정·상태",
      "set": "Set 2"
    },
    {
      "word": "silence",
      "ipa": "/ˈsaɪləns/",
      "pos": "n.",
      "meaning": "침묵, 고요",
      "example": "There was a long silence after he spoke.",
      "exampleKo": "그가 말한 뒤 긴 침묵이 흘렀어요.",
      "note": "silent = 조용한. in silence = 조용히.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "whole",
      "ipa": "/hoʊl/",
      "pos": "adj. / n.",
      "meaning": "전체의, 온 / 전체",
      "example": "I spent the whole day cleaning.",
      "exampleKo": "하루 종일 청소했어요.",
      "note": "the whole + 단수 명사. hole(구멍)과 발음이 같아요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "mortgage",
      "ipa": "/ˈmɔːrɡɪdʒ/",
      "pos": "n.",
      "meaning": "(주택) 담보 대출",
      "example": "We’re still paying off our mortgage.",
      "exampleKo": "아직 주택 담보 대출을 갚고 있어요.",
      "note": "발음 주의: t가 묵음이에요 [모기지].",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "be supposed to",
      "ipa": "",
      "pos": "phrase",
      "meaning": "~하기로 되어 있다, ~해야 한다",
      "example": "I was supposed to call him yesterday.",
      "exampleKo": "어제 그에게 전화하기로 했었는데.",
      "note": "was supposed to = 하기로 했는데 (못 했다).",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "in order to",
      "ipa": "",
      "pos": "phrase",
      "meaning": "~하기 위해서",
      "example": "I wake up early in order to study English.",
      "exampleKo": "영어 공부를 하려고 일찍 일어나요.",
      "note": "in order not to ~ = ~하지 않기 위해.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "make it up to ~",
      "ipa": "",
      "pos": "phrase",
      "meaning": "~에게 (미안한 것을) 만회하다, 보답하다",
      "example": "Sorry I’m late. I’ll make it up to you.",
      "exampleKo": "늦어서 미안해. 꼭 만회할게.",
      "note": "make up for ~ = (손실을) 메우다.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "even if",
      "ipa": "",
      "pos": "conj.",
      "meaning": "비록 ~하더라도",
      "example": "I’ll go even if it rains.",
      "exampleKo": "비가 오더라도 갈 거예요.",
      "note": "even though = (실제로) ~이긴 하지만.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "make it to ~",
      "ipa": "",
      "pos": "phrase",
      "meaning": "~에 (제때) 가다, 참석하다",
      "example": "Can you make it to the meeting at 3?",
      "exampleKo": "3시 회의에 올 수 있어요?",
      "note": "make it = 해내다, 제시간에 도착하다.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "as soon as",
      "ipa": "",
      "pos": "conj.",
      "meaning": "~하자마자",
      "example": "I’ll call you as soon as I get home.",
      "exampleKo": "집에 도착하자마자 전화할게.",
      "note": "미래 일이라도 현재형(get)을 써요.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "as long as",
      "ipa": "",
      "pos": "conj.",
      "meaning": "~하기만 하면, ~하는 한",
      "example": "You can borrow my car as long as you return it by tonight.",
      "exampleKo": "오늘 밤까지 돌려주기만 하면 내 차 빌려 가도 돼.",
      "note": "조건을 말할 때 써요.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "variety",
      "ipa": "/vəˈraɪəti/",
      "pos": "n.",
      "meaning": "다양성, 여러 가지",
      "example": "The store offers a wide variety of products.",
      "exampleKo": "그 가게는 아주 다양한 제품을 팔아요.",
      "note": "a variety of ~ = 다양한 ~. various = 다양한.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "asset",
      "ipa": "/ˈæset/",
      "pos": "n.",
      "meaning": "자산, 귀중한 존재",
      "example": "She is a great asset to our team.",
      "exampleKo": "그녀는 우리 팀에 큰 자산이에요.",
      "note": "사람에게도 써요.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "conduct",
      "ipa": "/kənˈdʌkt/",
      "pos": "v. / n.",
      "meaning": "(조사 등을) 실시하다 / 행동",
      "example": "We conducted a survey of 500 customers.",
      "exampleKo": "고객 500명을 대상으로 설문 조사를 실시했어요.",
      "note": "conduct a survey / an interview. 명사는 /ˈkɑːndʌkt/로 강세가 앞에 와요.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "observe",
      "ipa": "/əbˈzɜːrv/",
      "pos": "v.",
      "meaning": "관찰하다, (규칙을) 지키다",
      "example": "We observed how users interacted with the app.",
      "exampleKo": "사용자들이 앱을 어떻게 쓰는지 관찰했어요.",
      "note": "observation = 관찰. observe the rules = 규칙을 지키다.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "at last",
      "ipa": "",
      "pos": "phrase",
      "meaning": "마침내, 드디어",
      "example": "At last, the project is finished!",
      "exampleKo": "드디어 프로젝트가 끝났어!",
      "note": "finally와 비슷하지만 오래 기다린 안도감이 느껴져요.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "as",
      "ipa": "/æz/",
      "pos": "conj. / prep.",
      "meaning": "~ 때문에, ~할 때, ~로서, ~처럼",
      "example": "As it was raining, we stayed home.",
      "exampleKo": "비가 와서 집에 있었어요.",
      "note": "뜻이 많으니 문맥으로 파악! I work as a data analyst. = 데이터 분석가로 일해요.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "entire",
      "ipa": "/ɪnˈtaɪər/",
      "pos": "adj.",
      "meaning": "전체의",
      "example": "The entire team worked overtime this week.",
      "exampleKo": "이번 주에 팀 전체가 야근했어요.",
      "note": "whole과 비슷해요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "realize",
      "ipa": "/ˈriːəlaɪz/",
      "pos": "v.",
      "meaning": "깨닫다, 실현하다",
      "example": "I didn’t realize it was so late.",
      "exampleKo": "이렇게 늦은 줄 몰랐어요.",
      "note": "realize a dream = 꿈을 이루다.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "from time to time",
      "ipa": "",
      "pos": "phrase",
      "meaning": "때때로, 가끔",
      "example": "I still think about it from time to time.",
      "exampleKo": "아직도 가끔 그 생각이 나요.",
      "note": "= sometimes, now and then.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "be worth it",
      "ipa": "",
      "pos": "phrase",
      "meaning": "그만한 가치가 있다",
      "example": "The hike was hard, but the view was worth it.",
      "exampleKo": "등산은 힘들었지만 경치가 그만한 가치가 있었어요.",
      "note": "be worth + ~ing: It’s worth trying. = 해 볼 만해.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "relieve",
      "ipa": "/rɪˈliːv/",
      "pos": "v.",
      "meaning": "(고통을) 덜어 주다, 안심시키다",
      "example": "This medicine will relieve your headache.",
      "exampleKo": "이 약이 두통을 덜어 줄 거예요.",
      "note": "relieved = 안도한. relief = 안도, 완화.",
      "date": "2026-10-09",
      "topic": "감정·상태",
      "set": "Set 2"
    },
    {
      "word": "import",
      "ipa": "/ɪmˈpɔːrt/",
      "pos": "v. / n.",
      "meaning": "수입하다, (파일을) 불러오다 / 수입(품)",
      "example": "Korea imports most of its oil.",
      "exampleKo": "한국은 석유 대부분을 수입해요.",
      "note": "반대말 export. 데이터 작업에서도 써요: import a CSV file.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "certain",
      "ipa": "/ˈsɜːrtn/",
      "pos": "adj.",
      "meaning": "확실한, 특정한",
      "example": "Are you certain about that?",
      "exampleKo": "그거 확실해?",
      "note": "a certain ~ = 어떤 (특정한). certainly = 확실히.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "political",
      "ipa": "/pəˈlɪtɪkl/",
      "pos": "adj.",
      "meaning": "정치의, 정치적인",
      "example": "Let’s not talk about political issues at work.",
      "exampleKo": "회사에서는 정치 얘기는 하지 말자.",
      "note": "politics = 정치, politician = 정치인.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "theory",
      "ipa": "/ˈθiːəri/",
      "pos": "n.",
      "meaning": "이론, 가설",
      "example": "In theory, the plan should work.",
      "exampleKo": "이론상으로는 그 계획이 통해야 해요.",
      "note": "in theory = 이론상으로는. confirm my theory도 참고하세요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "be determined to",
      "ipa": "",
      "pos": "phrase",
      "meaning": "~하기로 굳게 결심하다",
      "example": "I’m determined to pass the exam this time.",
      "exampleKo": "이번엔 꼭 시험에 붙기로 결심했어요.",
      "note": "determination = 결심, 투지.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "optimistic",
      "ipa": "/ˌɑːptɪˈmɪstɪk/",
      "pos": "adj.",
      "meaning": "낙관적인",
      "example": "I’m optimistic about the results.",
      "exampleKo": "결과에 대해 낙관하고 있어요.",
      "note": "반대말 pessimistic = 비관적인.",
      "date": "2026-10-09",
      "topic": "성격·태도",
      "set": "Set 2"
    },
    {
      "word": "motivate",
      "ipa": "/ˈmoʊtɪveɪt/",
      "pos": "v.",
      "meaning": "동기를 부여하다",
      "example": "Good managers know how to motivate their team.",
      "exampleKo": "좋은 관리자는 팀에 동기를 부여하는 법을 알아요.",
      "note": "motivated = 의욕 있는, motivation = 동기.",
      "date": "2026-10-09",
      "topic": "성격·태도",
      "set": "Set 2"
    },
    {
      "word": "twice as much as ~",
      "ipa": "",
      "pos": "pattern",
      "meaning": "~보다 두 배 많이",
      "example": "This laptop costs twice as much as mine.",
      "exampleKo": "이 노트북은 내 것보다 두 배 비싸요.",
      "note": "셀 수 있는 명사는 twice as many as. 세 배는 three times as much as.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "come up",
      "ipa": "/ˌkʌm ˈʌp/",
      "pos": "phrasal v.",
      "meaning": "(일이) 생기다, (화제가) 나오다",
      "example": "Something came up, so I can’t make it tonight.",
      "exampleKo": "일이 생겨서 오늘 밤에 못 가.",
      "note": "come up with = 생각해 내다 (Dialog Day 1).",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "be connected to ~",
      "ipa": "",
      "pos": "phrase",
      "meaning": "~와 연결되어 있다, 관련 있다",
      "example": "Is your laptop connected to the Wi-Fi?",
      "exampleKo": "노트북 와이파이에 연결됐어?",
      "note": "관계에도 써요: His stress is connected to work.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "due to",
      "ipa": "",
      "pos": "prep.",
      "meaning": "~ 때문에",
      "example": "The flight was delayed due to bad weather.",
      "exampleKo": "악천후로 비행기가 지연됐어요.",
      "note": "because of보다 격식 있는 말. 공지문 단골이에요.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "intense",
      "ipa": "/ɪnˈtens/",
      "pos": "adj.",
      "meaning": "강렬한, 치열한",
      "example": "The competition in this market is intense.",
      "exampleKo": "이 시장은 경쟁이 치열해요.",
      "note": "intensive(집중적인)와 구별하세요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "especially",
      "ipa": "/ɪˈspeʃəli/",
      "pos": "adv.",
      "meaning": "특히",
      "example": "I love Korean food, especially kimchi stew.",
      "exampleKo": "한국 음식 좋아해요, 특히 김치찌개요.",
      "note": "목록에 두 번 있어서 하나로 합쳤어요.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "possibility",
      "ipa": "/ˌpɑːsəˈbɪləti/",
      "pos": "n.",
      "meaning": "가능성",
      "example": "Is there any possibility of a delay?",
      "exampleKo": "지연될 가능성이 있나요?",
      "note": "possibility of ~ing.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "strategy",
      "ipa": "/ˈstrætədʒi/",
      "pos": "n.",
      "meaning": "전략",
      "example": "We need a new marketing strategy.",
      "exampleKo": "새로운 마케팅 전략이 필요해요.",
      "note": "strategic = 전략적인.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "massive",
      "ipa": "/ˈmæsɪv/",
      "pos": "adj.",
      "meaning": "거대한, 엄청난",
      "example": "The update caused a massive increase in traffic.",
      "exampleKo": "업데이트 후 트래픽이 엄청나게 늘었어요.",
      "note": "huge보다 묵직하고 강한 느낌이에요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "equivalent",
      "ipa": "/ɪˈkwɪvələnt/",
      "pos": "adj. / n.",
      "meaning": "동등한, ~에 해당하는 / 동등한 것",
      "example": "One cup is equivalent to about 240 ml.",
      "exampleKo": "한 컵은 약 240ml에 해당해요.",
      "note": "be equivalent to ~.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "a mix of A and B",
      "ipa": "",
      "pos": "phrase",
      "meaning": "A와 B가 섞인 것",
      "example": "Our team is a mix of new and experienced members.",
      "exampleKo": "우리 팀은 신입과 경력자가 섞여 있어요.",
      "note": "a good mix = 적절한 조합.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "head to ~",
      "ipa": "/ˈhed tə/",
      "pos": "phrase",
      "meaning": "~로 향하다, 가다",
      "example": "I’m heading to the office now.",
      "exampleKo": "지금 사무실로 가는 중이에요.",
      "note": "목록에 두 번 있어서 하나로 합쳤어요. head home = 집에 가다 (to 없이).",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "confirm my theory",
      "ipa": "",
      "pos": "phrase",
      "meaning": "내 가설(추측)을 입증하다",
      "example": "The test results confirmed my theory.",
      "exampleKo": "테스트 결과가 내 가설을 입증했어요.",
      "note": "confirm = 확인하다, 확정하다 (confirmation 참고).",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "decide on ~",
      "ipa": "",
      "pos": "phrase",
      "meaning": "(여러 선택지 중) ~로 정하다",
      "example": "Have you decided on a name for the project?",
      "exampleKo": "프로젝트 이름 정했어?",
      "note": "decide to + 동사 / decide on + 명사.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "go for it",
      "ipa": "",
      "pos": "phrase",
      "meaning": "한번 해 봐! (응원)",
      "example": "If you really want the job, go for it!",
      "exampleKo": "그 일을 정말 원하면 도전해 봐!",
      "note": "go for ~ = ~을 고르다: I’ll go for the pasta.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "quote",
      "ipa": "/kwoʊt/",
      "pos": "n. / v.",
      "meaning": "견적(가) / 인용하다",
      "example": "Can you give me a quote for the repair?",
      "exampleKo": "수리 견적 좀 받을 수 있을까요?",
      "note": "estimate(추정 견적)보다 더 확정된 가격이에요.",
      "date": "2026-10-09",
      "topic": "비용·돈",
      "set": "Set 2"
    },
    {
      "word": "predictably",
      "ipa": "/prɪˈdɪktəbli/",
      "pos": "adv.",
      "meaning": "예상대로, 뻔하게",
      "example": "Predictably, the meeting ran late.",
      "exampleKo": "예상대로 회의가 늦게 끝났어요.",
      "note": "predictable = 예측 가능한, 뻔한.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "emphasize",
      "ipa": "/ˈemfəsaɪz/",
      "pos": "v.",
      "meaning": "강조하다",
      "example": "The manager emphasized the importance of teamwork.",
      "exampleKo": "매니저가 팀워크의 중요성을 강조했어요.",
      "note": "명사 emphasis = 강조.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "assessment",
      "ipa": "/əˈsesmənt/",
      "pos": "n.",
      "meaning": "평가",
      "example": "We’ll do a risk assessment before the launch.",
      "exampleKo": "출시 전에 위험 평가를 할 거예요.",
      "note": "동사 assess는 Set 1에 있어요.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "argument",
      "ipa": "/ˈɑːrɡjumənt/",
      "pos": "n.",
      "meaning": "말다툼, 논쟁, 논거",
      "example": "They had an argument about money.",
      "exampleKo": "그들은 돈 문제로 말다툼을 했어요.",
      "note": "\"주장, 논거\"로도 써요: a strong argument.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "nonetheless",
      "ipa": "/ˌnʌnðəˈles/",
      "pos": "adv.",
      "meaning": "그럼에도 불구하고",
      "example": "It was a difficult year. Nonetheless, we met our goals.",
      "exampleKo": "힘든 한 해였어요. 그럼에도 목표를 달성했어요.",
      "note": "= nevertheless. however보다 강조하는 느낌이에요.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "defend my position",
      "ipa": "",
      "pos": "phrase",
      "meaning": "내 입장을 옹호하다",
      "example": "I had to defend my position in the meeting.",
      "exampleKo": "회의에서 내 입장을 변호해야 했어요.",
      "note": "position = 입장, 의견.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "be in touch",
      "ipa": "",
      "pos": "phrase",
      "meaning": "연락하다",
      "example": "I’ll be in touch next week.",
      "exampleKo": "다음 주에 연락드릴게요.",
      "note": "keep in touch = 연락하고 지내다, get in touch with ~ = ~에게 연락하다.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "outcome",
      "ipa": "/ˈaʊtkʌm/",
      "pos": "n.",
      "meaning": "결과",
      "example": "We’re waiting for the outcome of the negotiation.",
      "exampleKo": "협상 결과를 기다리고 있어요.",
      "note": "result와 비슷해요.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "desperate",
      "ipa": "/ˈdespərət/",
      "pos": "adj.",
      "meaning": "필사적인, 절박한, 간절한",
      "example": "I was desperate for a cup of coffee.",
      "exampleKo": "커피 한 잔이 너무 간절했어요.",
      "note": "be desperate for ~ / to ~.",
      "date": "2026-10-09",
      "topic": "감정·상태",
      "set": "Set 2"
    },
    {
      "word": "except",
      "ipa": "/ɪkˈsept/",
      "pos": "prep.",
      "meaning": "~을 제외하고",
      "example": "The office is open every day except Sunday.",
      "exampleKo": "사무실은 일요일 빼고 매일 열어요.",
      "note": "except for ~. expect(기대하다)와 헷갈리지 마세요!",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "these past two days",
      "ipa": "",
      "pos": "phrase",
      "meaning": "지난 이틀 동안",
      "example": "I’ve been really busy these past two days.",
      "exampleKo": "지난 이틀 동안 정말 바빴어요.",
      "note": "현재완료와 잘 어울려요. these past few weeks = 지난 몇 주 동안.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "overlook",
      "ipa": "/ˌoʊvərˈlʊk/",
      "pos": "v.",
      "meaning": "간과하다, 놓치다, 내려다보다",
      "example": "We overlooked a small error in the report.",
      "exampleKo": "보고서의 작은 오류를 놓쳤어요.",
      "note": "a room overlooking the sea = 바다가 내려다보이는 방.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "finalize",
      "ipa": "/ˈfaɪnəlaɪz/",
      "pos": "v.",
      "meaning": "마무리하다, 확정하다",
      "example": "We need to finalize the schedule by Friday.",
      "exampleKo": "금요일까지 일정을 확정해야 해요.",
      "note": "finalize a deal / contract.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "overseas",
      "ipa": "/ˌoʊvərˈsiːz/",
      "pos": "adv. / adj.",
      "meaning": "해외로, 해외의",
      "example": "She’s planning to study overseas.",
      "exampleKo": "그녀는 해외에서 공부할 계획이에요.",
      "note": "go overseas (to 없이!). = abroad.",
      "date": "2026-10-09",
      "topic": "일정·출장",
      "set": "Set 2"
    },
    {
      "word": "recognize",
      "ipa": "/ˈrekəɡnaɪz/",
      "pos": "v.",
      "meaning": "알아보다, 인정하다",
      "example": "I didn’t recognize you with your new haircut.",
      "exampleKo": "머리 바꿔서 못 알아봤어.",
      "note": "recognition = 인정, 인식.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "imminent",
      "ipa": "/ˈɪmɪnənt/",
      "pos": "adj.",
      "meaning": "임박한, 곧 닥칠",
      "example": "The release of the new model is imminent.",
      "exampleKo": "새 모델 출시가 임박했어요.",
      "note": "eminent(저명한)와 철자가 비슷하니 주의하세요.",
      "date": "2026-10-09",
      "topic": "일상·기타",
      "set": "Set 2"
    },
    {
      "word": "ask for",
      "ipa": "/ˈæsk fər/",
      "pos": "phrasal v.",
      "meaning": "~을 요청하다",
      "example": "Don’t be afraid to ask for help.",
      "exampleKo": "도움을 요청하는 걸 두려워하지 마세요.",
      "note": "ask for permission / a raise.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "get rid of ~",
      "ipa": "",
      "pos": "phrase",
      "meaning": "~을 없애다, 처분하다",
      "example": "I need to get rid of some old clothes.",
      "exampleKo": "오래된 옷들을 좀 처분해야 해요.",
      "note": "throw out(버리다, Dialog Day 29)과 비슷해요.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "repetitive",
      "ipa": "/rɪˈpetətɪv/",
      "pos": "adj.",
      "meaning": "반복적인",
      "example": "Data entry is a repetitive task.",
      "exampleKo": "데이터 입력은 반복적인 작업이에요.",
      "note": "repeat = 반복하다.",
      "date": "2026-10-09",
      "topic": "업무·회사",
      "set": "Set 2"
    },
    {
      "word": "likewise",
      "ipa": "/ˈlaɪkwaɪz/",
      "pos": "adv.",
      "meaning": "마찬가지로, 저도요",
      "example": "“Nice to meet you.” “Likewise!”",
      "exampleKo": "\"만나서 반가워요.\" \"저도요!\"",
      "note": "문장 앞에서 \"마찬가지로\": Likewise, our costs went up.",
      "date": "2026-10-09",
      "topic": "연결어",
      "set": "Set 2"
    },
    {
      "word": "make up",
      "ipa": "/ˌmeɪk ˈʌp/",
      "pos": "phrasal v.",
      "meaning": "(이야기를) 지어내다, 화해하다, 구성하다",
      "example": "He made up an excuse for being late.",
      "exampleKo": "그는 지각한 핑계를 지어냈어요.",
      "note": "make up with ~ = ~와 화해하다. Women make up 40% of the team. = 팀의 40%를 차지하다.",
      "date": "2026-10-09",
      "topic": "표현·구문",
      "set": "Set 2"
    },
    {
      "word": "adapt",
      "ipa": "/əˈdæpt/",
      "pos": "v.",
      "meaning": "적응하다, 맞추다",
      "example": "It took me a while to adapt to the new job.",
      "exampleKo": "새 직장에 적응하는 데 시간이 좀 걸렸어요.",
      "note": "adapt to ~. adopt(채택하다)와 구별! (목록의 adapts를 기본형으로 정리했어요)",
      "date": "2026-10-09",
      "topic": "성격·태도",
      "set": "Set 2"
    }
  ],

  /* ---------- 스크립트 ----------
     id: 주소에 쓰이는 이름(영문), title, source: 출처, date, summary: 한 줄 요약,
     lines: [{ speaker, en, ko }], expressions: [{ phrase, meaning }] — 본문에서 굵게 표시돼요 */
  scripts: [],

  /* ---------- Dialog ----------
     id: 주소에 쓰이는 이름(영문), title, situation: 상황, date, summary: 한 줄 요약,
     lines: [{ speaker, en, ko }] — 첫 번째 화자는 왼쪽, 두 번째 화자는 오른쪽 말풍선,
     expressions: [{ phrase, meaning }], day: Day 번호, key/keyMeaning: 그날의 핵심 표현,
     marks: 본문에서 형광펜으로 칠할 부분, extras: 추가 예문 */
  dialogs: [
    {
      "id": "day01",
      "day": 1,
      "key": "for now",
      "keyMeaning": "일단은, 당분간은",
      "title": "아들 이름 정하기",
      "situation": "아기 이름을 고민하는 부부",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "What do we call my son?",
          "ko": "우리 아들 이름 뭐라고 부를까?"
        },
        {
          "speaker": "B",
          "en": "How about Byung-chul?",
          "ko": "병철이 어때?"
        },
        {
          "speaker": "A",
          "en": "Byung-chul? Are you serious?",
          "ko": "병철이? 진심이야?"
        },
        {
          "speaker": "B",
          "en": "What? That is a cute boy’s name.",
          "ko": "왜? 귀여운 남자아이 이름이잖아."
        },
        {
          "speaker": "A",
          "en": "Fine. We’ll call him Byung-chul for now, but let’s see what else we can come up with. I want to give him a good name.",
          "ko": "알았어. 일단은 병철이라고 부르자. 그래도 다른 이름도 더 생각해 보자. 좋은 이름 지어 주고 싶어."
        }
      ],
      "expressions": [
        {
          "phrase": "for now",
          "meaning": "일단은, 당분간은 (나중에 바뀔 수 있음)"
        },
        {
          "phrase": "come up with",
          "meaning": "(생각·아이디어를) 떠올리다, 생각해 내다"
        },
        {
          "phrase": "Are you serious?",
          "meaning": "진심이야? / 정말이야?"
        }
      ],
      "marks": [
        "for now"
      ]
    },
    {
      "id": "day02",
      "day": 2,
      "key": "for the most part",
      "keyMeaning": "대체로, 대부분은",
      "title": "드라마 추천",
      "situation": "친구와 드라마 이야기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "This drama looks fun.",
          "ko": "이 드라마 재밌어 보인다."
        },
        {
          "speaker": "B",
          "en": "Oh, that? I saw it right when it came out.",
          "ko": "아, 그거? 나 그거 나오자마자 봤어."
        },
        {
          "speaker": "A",
          "en": "You did? How was it?",
          "ko": "그래? 어땠어?"
        },
        {
          "speaker": "B",
          "en": "It was OK for the most part. I was expecting a twist at the end, but there wasn’t one.",
          "ko": "대체로 괜찮았어. 마지막에 반전이 있을 줄 알았는데 없더라."
        },
        {
          "speaker": "A",
          "en": "Would you recommend it?",
          "ko": "추천할 만해?"
        },
        {
          "speaker": "B",
          "en": "Yeah, if you have time, you should check it out.",
          "ko": "응, 시간 있으면 한번 봐 봐."
        }
      ],
      "expressions": [
        {
          "phrase": "for the most part",
          "meaning": "대체로, 대부분은"
        },
        {
          "phrase": "right when it came out",
          "meaning": "나오자마자"
        },
        {
          "phrase": "a twist (ending)",
          "meaning": "반전 (결말)"
        },
        {
          "phrase": "check it out",
          "meaning": "한번 보다, 확인해 보다"
        }
      ],
      "marks": [
        "for the most part"
      ]
    },
    {
      "id": "day03",
      "day": 3,
      "key": "It’s not like ~",
      "keyMeaning": "~인 것도 아니야 (오해 풀기)",
      "title": "억울했던 하루",
      "situation": "회사에서 있었던 일을 친구에게 이야기하기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Today, my manager asked me to work on a new data analysis project.",
          "ko": "오늘 매니저가 나한테 새 데이터 분석 프로젝트를 맡겼어."
        },
        {
          "speaker": "A",
          "en": "I was really busy, so I couldn’t analyze the data as deeply as I wanted before sending it to her.",
          "ko": "너무 바빠서 보내기 전에 원하는 만큼 깊이 분석하지 못했어."
        },
        {
          "speaker": "A",
          "en": "She got upset because she thought I had done it carelessly.",
          "ko": "내가 대충 했다고 생각해서 매니저가 기분이 상했어."
        },
        {
          "speaker": "A",
          "en": "But it’s not like I didn’t care or didn’t put in any effort. I did my best with the time I had.",
          "ko": "근데 내가 신경을 안 썼거나 노력을 안 한 건 아니야. 주어진 시간 안에서 최선을 다했어."
        },
        {
          "speaker": "B",
          "en": "What did you do exactly?",
          "ko": "정확히 뭘 했는데?"
        },
        {
          "speaker": "A",
          "en": "I analyzed user behavior and created a report using SQL and Power BI.",
          "ko": "SQL이랑 Power BI로 사용자 행동을 분석해서 보고서를 만들었어."
        }
      ],
      "expressions": [
        {
          "phrase": "It’s not like ~",
          "meaning": "~인 것도 아니야, ~한 건 아니야"
        },
        {
          "phrase": "put in effort",
          "meaning": "노력을 들이다"
        },
        {
          "phrase": "carelessly",
          "meaning": "대충, 성의 없이"
        },
        {
          "phrase": "with the time I had",
          "meaning": "주어진 시간 안에서"
        }
      ],
      "marks": [
        "it’s not like"
      ]
    },
    {
      "id": "day04",
      "day": 4,
      "key": "otherwise",
      "keyMeaning": "① 그렇지 않으면 ② 그 점 말고는",
      "title": "비 오는 일요일 아침",
      "situation": "교회 가기 전 서두르는 두 사람",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "We should get going. Otherwise, I think I’ll be late for church. It’s raining, so I think there will be a lot of traffic.",
          "ko": "이제 가야겠어. 안 그러면 교회에 늦을 것 같아. 비가 와서 차가 많이 막힐 것 같아."
        },
        {
          "speaker": "B",
          "en": "Oh, really? Should we just take a taxi? Otherwise, we’ll probably be late.",
          "ko": "아, 정말? 그냥 택시 탈까? 안 그러면 아마 늦을 거야."
        },
        {
          "speaker": "A",
          "en": "Don’t worry. I think we can make the bus if we walk a little faster.",
          "ko": "걱정 마. 조금만 빨리 걸으면 버스 탈 수 있을 것 같아."
        },
        {
          "speaker": "B",
          "en": "Then let’s have lunch after church. I’m a little hungry, but otherwise I’m fine.",
          "ko": "그럼 예배 끝나고 점심 먹자. 좀 배고픈 것만 빼면 괜찮아."
        }
      ],
      "expressions": [
        {
          "phrase": "otherwise",
          "meaning": "① 그렇지 않으면 ② (그 점) 말고는"
        },
        {
          "phrase": "get going",
          "meaning": "출발하다, 슬슬 가다"
        },
        {
          "phrase": "make the bus",
          "meaning": "(늦지 않게) 버스를 타다"
        },
        {
          "phrase": "a lot of traffic",
          "meaning": "차가 많이 막힘"
        }
      ],
      "marks": [
        "otherwise"
      ]
    },
    {
      "id": "day05",
      "day": 5,
      "key": "go over",
      "keyMeaning": "검토하다, 다시 짚어 보다",
      "title": "혼자 결정하는 팀원",
      "situation": "독단적으로 일하는 Molly를 타이르는 상황",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Come on, Molly. We’ve gone over this a dozen times. You can’t keep acting on your own like this.",
          "ko": "몰리, 제발. 이거 몇 번이나 얘기했잖아. 이렇게 계속 혼자 행동하면 안 돼."
        },
        {
          "speaker": "Molly",
          "en": "I know, but all that does is slow everything down. You trust my judgment, right? When have I been wrong?",
          "ko": "알아요, 근데 그렇게 하면 모든 게 느려지기만 해요. 제 판단 믿으시잖아요? 제가 틀린 적 있어요?"
        },
        {
          "speaker": "A",
          "en": "It’s not about that. We’re all part of a team. If something like this comes up, you have to share it with the rest of us so we can go over it and come to a decision together. That’s the only way a system can work.",
          "ko": "그게 문제가 아니야. 우린 다 한 팀이잖아. 이런 일이 생기면 나머지 사람들한테도 공유해서 같이 검토하고 함께 결정해야 해. 그래야 시스템이 돌아가."
        }
      ],
      "expressions": [
        {
          "phrase": "go over",
          "meaning": "검토하다, 다시 짚어 보다"
        },
        {
          "phrase": "a dozen times",
          "meaning": "수십 번, 여러 번"
        },
        {
          "phrase": "act on your own",
          "meaning": "혼자 (마음대로) 행동하다"
        },
        {
          "phrase": "All that does is ~",
          "meaning": "그건 ~하기만 할 뿐이야"
        },
        {
          "phrase": "come to a decision",
          "meaning": "결정을 내리다"
        }
      ],
      "marks": [
        "gone over",
        "go over"
      ]
    },
    {
      "id": "day06",
      "day": 6,
      "key": "make sure",
      "keyMeaning": "꼭 ~하도록 하다, 확실히 하다",
      "title": "아직 안 부친 서류",
      "situation": "우체국에 서류를 보내야 하는 상황",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Hey, why is that document still here? I thought you would’ve taken it to the post office by now.",
          "ko": "저 서류 왜 아직 여기 있어? 지금쯤이면 우체국에 가져간 줄 알았는데."
        },
        {
          "speaker": "B",
          "en": "Don’t worry. It’s on my to-do list.",
          "ko": "걱정 마. 할 일 목록에 있어."
        },
        {
          "speaker": "A",
          "en": "You’d better make sure that it’s in the mail within the next couple of days. The holidays are coming up.",
          "ko": "앞으로 이삼일 안에 꼭 부치도록 해. 곧 연휴잖아."
        },
        {
          "speaker": "B",
          "en": "I’m going to mail it today. Don’t worry about it.",
          "ko": "오늘 부칠 거야. 걱정하지 마."
        },
        {
          "speaker": "A",
          "en": "And make sure to double-check the address. We can’t afford another mistake like last time.",
          "ko": "그리고 주소 꼭 다시 확인해. 지난번 같은 실수를 또 하면 안 돼."
        }
      ],
      "expressions": [
        {
          "phrase": "make sure (that) ~ / make sure to ~",
          "meaning": "꼭 ~하도록 하다"
        },
        {
          "phrase": "It’s on my to-do list.",
          "meaning": "할 일 목록에 있어."
        },
        {
          "phrase": "in the mail",
          "meaning": "우편으로 발송된"
        },
        {
          "phrase": "can’t afford ~",
          "meaning": "~할 여유가 없다, ~하면 안 된다"
        },
        {
          "phrase": "double-check",
          "meaning": "다시 확인하다"
        }
      ],
      "marks": [
        "make sure"
      ]
    },
    {
      "id": "day07",
      "day": 7,
      "key": "keep up with",
      "keyMeaning": "(소식·흐름을) 따라가다",
      "title": "요즘 AI 소식",
      "situation": "AI 뉴스에 대해 이야기하는 친구들",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "So, what’s new in AI?",
          "ko": "요즘 AI 쪽에 새로운 거 있어?"
        },
        {
          "speaker": "B",
          "en": "I haven’t really been keeping up with the latest, but it doesn’t seem like there’s any new news.",
          "ko": "최신 소식은 잘 못 따라가고 있는데, 딱히 새로운 소식은 없는 것 같아."
        },
        {
          "speaker": "A",
          "en": "Maybe that’s a good thing. I remember people saying that they need to slow down the development.",
          "ko": "오히려 잘된 걸 수도 있어. 사람들이 개발 속도를 늦춰야 한다고 했던 거 기억나."
        },
        {
          "speaker": "B",
          "en": "They’re still saying that, but I think people are just overreacting. I think there are still a lot of problems we need to solve.",
          "ko": "아직도 그렇게들 말하는데, 내 생각엔 그냥 과민 반응이야. 아직 해결해야 할 문제가 많다고 봐."
        }
      ],
      "expressions": [
        {
          "phrase": "keep up with",
          "meaning": "(소식·흐름을) 따라가다"
        },
        {
          "phrase": "the latest",
          "meaning": "최신 소식"
        },
        {
          "phrase": "slow down",
          "meaning": "속도를 늦추다"
        },
        {
          "phrase": "overreact",
          "meaning": "과민 반응하다"
        }
      ],
      "marks": [
        "keeping up with",
        "keep up with"
      ]
    },
    {
      "id": "day08",
      "day": 8,
      "key": "make use of",
      "keyMeaning": "활용하다",
      "title": "새 물건 둘 자리",
      "situation": "집 안 공간을 정리하는 두 사람",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Where should we put this?",
          "ko": "이거 어디에 둘까?"
        },
        {
          "speaker": "B",
          "en": "Hmm. Good question. How about we move that table somewhere else? I think we can make use of that space.",
          "ko": "음, 그러게. 저 테이블을 다른 데로 옮기는 건 어때? 저 공간을 활용할 수 있을 것 같아."
        },
        {
          "speaker": "A",
          "en": "Oh, that’s a good idea.",
          "ko": "오, 좋은 생각이다."
        },
        {
          "speaker": "B",
          "en": "Yeah. We hardly ever use that table anyway.",
          "ko": "응. 어차피 저 테이블 거의 안 쓰잖아."
        }
      ],
      "expressions": [
        {
          "phrase": "make use of",
          "meaning": "활용하다"
        },
        {
          "phrase": "How about we ~?",
          "meaning": "~하는 게 어때?"
        },
        {
          "phrase": "hardly ever",
          "meaning": "거의 ~하지 않다"
        }
      ],
      "marks": [
        "make use of"
      ]
    },
    {
      "id": "day09",
      "day": 9,
      "key": "depend on",
      "keyMeaning": "~에 달려 있다",
      "title": "전기차 살까?",
      "situation": "전기차 구매를 고민하는 친구",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Do you think I should get an electric car?",
          "ko": "나 전기차 사는 게 좋을까?"
        },
        {
          "speaker": "B",
          "en": "Maybe. But it depends.",
          "ko": "그럴 수도. 근데 상황에 따라 달라."
        },
        {
          "speaker": "A",
          "en": "It depends on what? My budget?",
          "ko": "뭐에 따라 다른데? 내 예산?"
        },
        {
          "speaker": "B",
          "en": "Well, that too. But it depends more on what you’re going to use it for. From what I understand, an electric car is fine if your apartment has charging stations, but it’s inconvenient if it doesn’t. So, it really depends on your environment and how you’re using it.",
          "ko": "음, 그것도 있지. 근데 그보다는 뭘 하려고 쓰느냐에 더 달려 있어. 내가 알기로는 아파트에 충전소가 있으면 전기차도 괜찮은데, 없으면 불편해. 그러니까 결국 환경이랑 어떻게 쓰느냐에 달렸어."
        }
      ],
      "expressions": [
        {
          "phrase": "It depends.",
          "meaning": "상황에 따라 달라."
        },
        {
          "phrase": "depend on",
          "meaning": "~에 달려 있다"
        },
        {
          "phrase": "From what I understand, ~",
          "meaning": "내가 알기로는 ~"
        },
        {
          "phrase": "that too",
          "meaning": "그것도 그렇고"
        }
      ],
      "marks": [
        "depends"
      ]
    },
    {
      "id": "day10",
      "day": 10,
      "key": "one of those (days)",
      "keyMeaning": "(유난히 힘든) 그런 날",
      "title": "정신없던 하루",
      "situation": "퇴근 후 하루를 묻는 대화",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "How was work today?",
          "ko": "오늘 일 어땠어?"
        },
        {
          "speaker": "B",
          "en": "It was really busy today.",
          "ko": "오늘 엄청 바빴어."
        },
        {
          "speaker": "A",
          "en": "Why?",
          "ko": "왜?"
        },
        {
          "speaker": "B",
          "en": "I had a lot of meetings. It was one of those days.",
          "ko": "회의가 많았거든. 그냥 그런 날 있잖아."
        },
        {
          "speaker": "A",
          "en": "I hope tomorrow is better!",
          "ko": "내일은 좀 나아지길 바라!"
        }
      ],
      "expressions": [
        {
          "phrase": "It was one of those days.",
          "meaning": "(일이 안 풀리거나 정신없던) 그런 날이었어."
        },
        {
          "phrase": "How was work?",
          "meaning": "일은 어땠어?"
        }
      ],
      "marks": [
        "one of those days"
      ]
    },
    {
      "id": "day11",
      "day": 11,
      "key": "in and of itself",
      "keyMeaning": "그 자체로는",
      "title": "야근은 나쁜 걸까?",
      "situation": "야근에 대한 생각 나누기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Do you think working overtime is a bad thing?",
          "ko": "야근하는 게 나쁜 거라고 생각해?"
        },
        {
          "speaker": "B",
          "en": "Not in and of itself. It can be helpful sometimes.",
          "ko": "그 자체로 나쁜 건 아니야. 가끔은 도움이 될 수도 있어."
        },
        {
          "speaker": "A",
          "en": "Yeah, but doing it every week sounds exhausting.",
          "ko": "그래도 매주 하는 건 너무 지칠 것 같아."
        },
        {
          "speaker": "B",
          "en": "Exactly. Overtime isn’t bad in and of itself, but too much of it can lead to burnout.",
          "ko": "맞아. 야근 자체가 나쁜 건 아닌데, 너무 많이 하면 번아웃이 올 수 있어."
        },
        {
          "speaker": "A",
          "en": "That makes sense. Balance is the important part.",
          "ko": "맞는 말이야. 균형이 중요하지."
        }
      ],
      "expressions": [
        {
          "phrase": "in and of itself",
          "meaning": "그 자체로는"
        },
        {
          "phrase": "work overtime",
          "meaning": "야근하다, 초과 근무하다"
        },
        {
          "phrase": "lead to burnout",
          "meaning": "번아웃으로 이어지다"
        },
        {
          "phrase": "That makes sense.",
          "meaning": "일리 있네. / 이해돼."
        }
      ],
      "marks": [
        "in and of itself"
      ]
    },
    {
      "id": "day12",
      "day": 12,
      "key": "for a change",
      "keyMeaning": "기분 전환 삼아, 모처럼",
      "title": "오늘 점심은 밖에서",
      "situation": "점심 메뉴를 정하는 두 사람",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "What do you want for lunch?",
          "ko": "점심 뭐 먹고 싶어?"
        },
        {
          "speaker": "B",
          "en": "I was thinking today maybe we could go out for a change.",
          "ko": "오늘은 기분 전환 삼아 밖에 나가서 먹을까 했어."
        },
        {
          "speaker": "A",
          "en": "Really? Where?",
          "ko": "그래? 어디?"
        },
        {
          "speaker": "B",
          "en": "I heard about this place that just opened called 몽쉘미쉥. They have really good brunches.",
          "ko": "몽쉘미쉥이라는 새로 생긴 곳 얘기를 들었어. 브런치가 정말 맛있대."
        },
        {
          "speaker": "A",
          "en": "Sounds good. Let’s go now.",
          "ko": "좋아. 지금 가자."
        },
        {
          "speaker": "B",
          "en": "Actually, how about we walk for a change? It’s not that far.",
          "ko": "아, 이번엔 모처럼 걸어가는 게 어때? 별로 안 멀어."
        }
      ],
      "expressions": [
        {
          "phrase": "for a change",
          "meaning": "기분 전환 삼아, 모처럼"
        },
        {
          "phrase": "I was thinking maybe we could ~",
          "meaning": "~하면 어떨까 생각했어"
        },
        {
          "phrase": "a place that just opened",
          "meaning": "새로 생긴 곳"
        },
        {
          "phrase": "It’s not that far.",
          "meaning": "그렇게 멀지 않아."
        }
      ],
      "marks": [
        "for a change"
      ]
    },
    {
      "id": "day13",
      "day": 13,
      "key": "pull off",
      "keyMeaning": "(어려운 일을) 해내다",
      "title": "발표 성공",
      "situation": "발표를 마친 동료를 칭찬하기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "I can’t believe you pulled off that presentation.",
          "ko": "그 발표를 해내다니 믿기지가 않아."
        },
        {
          "speaker": "B",
          "en": "Honestly, I was really nervous.",
          "ko": "솔직히 엄청 긴장했어."
        },
        {
          "speaker": "A",
          "en": "You didn’t look nervous at all. You really pulled it off.",
          "ko": "전혀 긴장한 것처럼 안 보였어. 진짜 잘 해냈어."
        },
        {
          "speaker": "B",
          "en": "Thanks. I spent the whole weekend preparing for it.",
          "ko": "고마워. 주말 내내 준비했거든."
        },
        {
          "speaker": "A",
          "en": "Well, all that hard work definitely paid off.",
          "ko": "그 노력이 확실히 결실을 봤네."
        }
      ],
      "expressions": [
        {
          "phrase": "pull off / pull it off",
          "meaning": "(어려운 일을) 해내다"
        },
        {
          "phrase": "spend + 시간 + ~ing",
          "meaning": "~하면서 시간을 보내다"
        },
        {
          "phrase": "pay off",
          "meaning": "(노력이) 결실을 보다"
        }
      ],
      "marks": [
        "pulled off",
        "pulled it off"
      ]
    },
    {
      "id": "day14",
      "day": 14,
      "key": "just the ~",
      "keyMeaning": "딱 맞는 ~",
      "title": "아버지 칠순 식당 찾기",
      "situation": "조용하고 괜찮은 식당을 추천받는 상황",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Do you know any good restaurants in Seoul? Nothing too trendy, a bit low-key, but someplace nice.",
          "ko": "서울에 괜찮은 식당 알아? 너무 유행하는 곳 말고, 좀 조용하면서 괜찮은 데로."
        },
        {
          "speaker": "B",
          "en": "Are you taking your wife there?",
          "ko": "아내분이랑 가는 거야?"
        },
        {
          "speaker": "A",
          "en": "No, just my parents. It’s my dad’s 70th birthday.",
          "ko": "아니, 부모님이랑. 아버지 칠순이거든."
        },
        {
          "speaker": "B",
          "en": "Hmm, I think I know just the place then. I don’t know if they’re still in business in that area, but let me check.",
          "ko": "음, 그럼 딱 맞는 곳을 알 것 같아. 아직 그 동네에서 영업하는지는 모르겠는데 확인해 볼게."
        },
        {
          "speaker": "A",
          "en": "Thanks! I just need to pick out a gift.",
          "ko": "고마워! 이제 선물만 고르면 돼."
        }
      ],
      "expressions": [
        {
          "phrase": "just the place / just the thing",
          "meaning": "딱 맞는 곳 / 딱 맞는 것"
        },
        {
          "phrase": "low-key",
          "meaning": "조용한, 소박한"
        },
        {
          "phrase": "still in business",
          "meaning": "아직 영업 중인"
        },
        {
          "phrase": "pick out",
          "meaning": "고르다"
        }
      ],
      "marks": [
        "just the place"
      ]
    },
    {
      "id": "day15",
      "day": 15,
      "key": "happen to",
      "keyMeaning": "혹시 ~해? / 마침(우연히) ~하다",
      "title": "지난주 발표 자료 찾기",
      "situation": "회사 동료에게 파일을 묻는 상황",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Hey, do you happen to remember where we saved the presentation from last week’s meeting?",
          "ko": "혹시 지난주 회의 발표 자료 어디에 저장했는지 기억나?"
        },
        {
          "speaker": "B",
          "en": "I’m not completely sure, but I happen to have a copy of it on my laptop because I worked on it yesterday.",
          "ko": "확실하진 않은데, 어제 작업해서 마침 내 노트북에 사본이 있어."
        },
        {
          "speaker": "A",
          "en": "That would be great. I need to check some of the numbers before my meeting with the manager this afternoon.",
          "ko": "그거 좋다. 오늘 오후 매니저 미팅 전에 숫자 몇 개 확인해야 하거든."
        },
        {
          "speaker": "B",
          "en": "No problem. I can send it to you now, but do you happen to know which version is the latest one?",
          "ko": "문제없어. 지금 보내 줄 수 있는데, 혹시 어떤 버전이 최신인지 알아?"
        },
        {
          "speaker": "A",
          "en": "I think the file you worked on yesterday should be the latest version.",
          "ko": "네가 어제 작업한 파일이 최신 버전일 거야."
        }
      ],
      "expressions": [
        {
          "phrase": "Do you happen to ~?",
          "meaning": "혹시 ~해? (공손하게 묻기)"
        },
        {
          "phrase": "happen to ~",
          "meaning": "마침(우연히) ~하다"
        },
        {
          "phrase": "work on",
          "meaning": "~을 작업하다"
        },
        {
          "phrase": "the latest version",
          "meaning": "최신 버전"
        }
      ],
      "marks": [
        "happen to"
      ]
    },
    {
      "id": "day16",
      "day": 16,
      "key": "not ~ until",
      "keyMeaning": "~가 되어서야 ~하다",
      "title": "여유로운 출근길?",
      "situation": "출근 시간을 두고 이야기하는 상황",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Didn’t you say you had to be at work by 9:30?",
          "ko": "9시 반까지 출근해야 한다고 하지 않았어?"
        },
        {
          "speaker": "B",
          "en": "Yeah, but I really don’t need to be at my desk until my boss comes to work, and he usually doesn’t arrive until around 10. I still have about half an hour.",
          "ko": "응, 근데 사실 상사가 출근하기 전까지는 자리에 없어도 돼. 그리고 상사는 보통 10시쯤 돼서야 와. 아직 30분 정도 남았어."
        },
        {
          "speaker": "A",
          "en": "I see. I wouldn’t get too comfortable though. I heard the subway workers went on strike this morning.",
          "ko": "그렇구나. 그래도 너무 여유 부리진 않는 게 좋을걸. 오늘 아침에 지하철 노조가 파업했대."
        },
        {
          "speaker": "B",
          "en": "What? Why didn’t you tell me earlier?",
          "ko": "뭐? 왜 진작 말 안 했어?"
        }
      ],
      "expressions": [
        {
          "phrase": "not ~ until …",
          "meaning": "…가 되어서야 ~하다"
        },
        {
          "phrase": "I wouldn’t ~",
          "meaning": "(나라면) ~하지 않을 거야 — 부드러운 조언"
        },
        {
          "phrase": "go on strike",
          "meaning": "파업하다"
        },
        {
          "phrase": "be at my desk",
          "meaning": "자리에 있다"
        }
      ],
      "marks": [
        "until"
      ],
      "extras": [
        {
          "en": "She won’t be back until next week.",
          "ko": "그녀는 다음 주나 되어야 돌아와요."
        }
      ]
    },
    {
      "id": "day17",
      "day": 17,
      "key": "I wonder if ~",
      "keyMeaning": "~일지 궁금하다",
      "title": "Appendix 1 · 연휴 마지막 날",
      "situation": "혼잣말 · 일기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "Me",
          "en": "Today is the last day of my holiday, so I felt sad all day.",
          "ko": "오늘이 연휴 마지막 날이라 하루 종일 마음이 울적했다."
        },
        {
          "speaker": "Me",
          "en": "I visited my friend’s house with my wife, and we had a good time together for a few hours.",
          "ko": "아내와 친구 집에 놀러 가서 몇 시간 동안 즐거운 시간을 보냈다."
        },
        {
          "speaker": "Me",
          "en": "Tomorrow, I have to go back to work.",
          "ko": "내일은 다시 출근해야 한다."
        },
        {
          "speaker": "Me",
          "en": "I wonder if work will be really busy.",
          "ko": "회사가 많이 바쁠지 궁금하다."
        }
      ],
      "expressions": [
        {
          "phrase": "I wonder if ~",
          "meaning": "~일지 궁금하다"
        },
        {
          "phrase": "have a good time",
          "meaning": "즐거운 시간을 보내다"
        },
        {
          "phrase": "go back to work",
          "meaning": "다시 출근하다, 일터로 돌아가다"
        }
      ],
      "marks": [
        "I wonder if"
      ]
    },
    {
      "id": "day18",
      "day": 18,
      "key": "be about to",
      "keyMeaning": "막 ~하려던 참이다",
      "title": "커피 한 잔 더?",
      "situation": "카페에서 우연히 Kevin을 만난 상황",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Oh, Kevin! If I had known you were here, I would’ve gotten another cup of coffee.",
          "ko": "어, 케빈! 네가 여기 있는 줄 알았으면 커피 한 잔 더 사 왔을 텐데."
        },
        {
          "speaker": "Kevin",
          "en": "No, it’s OK. Don’t mind me. I was about to leave anyway.",
          "ko": "아니야, 괜찮아. 나 신경 쓰지 마. 어차피 막 가려던 참이었어."
        },
        {
          "speaker": "A",
          "en": "Really? Because I can run right out and get another cup of coffee. It’s no problem. You should stay a little longer and chat with us.",
          "ko": "정말? 지금 바로 나가서 한 잔 더 사 올 수 있어. 전혀 문제없어. 좀 더 있다가 우리랑 얘기하다 가."
        },
        {
          "speaker": "Kevin",
          "en": "I really wish I could, but I’ve really got to go. Thanks though.",
          "ko": "정말 그러고 싶은데 진짜 가 봐야 해. 그래도 고마워."
        }
      ],
      "expressions": [
        {
          "phrase": "be about to ~",
          "meaning": "막 ~하려던 참이다"
        },
        {
          "phrase": "Don’t mind me.",
          "meaning": "나는 신경 쓰지 마."
        },
        {
          "phrase": "If I had known ~, I would’ve …",
          "meaning": "~인 줄 알았으면 …했을 텐데"
        },
        {
          "phrase": "I wish I could, but ~",
          "meaning": "그러고 싶은데 ~"
        },
        {
          "phrase": "I’ve got to go.",
          "meaning": "가 봐야 해."
        }
      ],
      "marks": [
        "about to"
      ]
    },
    {
      "id": "day19",
      "day": 19,
      "key": "both A and B",
      "keyMeaning": "A와 B 모두",
      "title": "Appendix 2 · 바빴던 한 주",
      "situation": "혼잣말 · 일기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "Me",
          "en": "I’ve been really busy all week.",
          "ko": "이번 주 내내 정말 바빴다."
        },
        {
          "speaker": "Me",
          "en": "My boss asked me to work on a new data project.",
          "ko": "상사가 새 데이터 프로젝트를 맡겼다."
        },
        {
          "speaker": "Me",
          "en": "I think this project is pretty difficult for me, and it will take a lot of time.",
          "ko": "이 프로젝트는 나한테 꽤 어렵고, 시간도 많이 걸릴 것 같다."
        },
        {
          "speaker": "Me",
          "en": "After the project is finished, my team might move to another group.",
          "ko": "프로젝트가 끝나면 우리 팀이 다른 그룹으로 옮길 수도 있다."
        },
        {
          "speaker": "Me",
          "en": "I think this week will be really important for both me and my team.",
          "ko": "이번 주는 나와 우리 팀 모두에게 정말 중요할 것 같다."
        }
      ],
      "expressions": [
        {
          "phrase": "both A and B",
          "meaning": "A와 B 모두"
        },
        {
          "phrase": "ask someone to ~",
          "meaning": "누구에게 ~해 달라고 하다"
        },
        {
          "phrase": "take a lot of time",
          "meaning": "시간이 많이 걸리다"
        },
        {
          "phrase": "might ~",
          "meaning": "~할 수도 있다"
        }
      ],
      "marks": [
        "both me and my team"
      ]
    },
    {
      "id": "day20",
      "day": 20,
      "key": "be planning to",
      "keyMeaning": "~할 계획이다",
      "title": "Appendix 3 · 드디어 토요일",
      "situation": "혼잣말 · 일기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "Me",
          "en": "Finally, it’s Saturday!",
          "ko": "드디어 토요일이다!"
        },
        {
          "speaker": "Me",
          "en": "This morning, I got plenty of rest.",
          "ko": "오늘 아침엔 푹 쉬었다."
        },
        {
          "speaker": "Me",
          "en": "I’m going to clean my house because I haven’t cleaned it in a long time.",
          "ko": "한동안 청소를 안 해서 집 청소를 할 거다."
        },
        {
          "speaker": "Me",
          "en": "First, I went to a cafe near my house.",
          "ko": "먼저 집 근처 카페에 갔다."
        },
        {
          "speaker": "Me",
          "en": "I had a cup of coffee, studied English, and had some bread.",
          "ko": "커피 한 잔 마시고, 영어 공부하고, 빵을 좀 먹었다."
        },
        {
          "speaker": "Me",
          "en": "Today, I’m also planning to learn how to use Superset because being able to use it well will be important for my work.",
          "ko": "오늘은 Superset 사용법도 배울 계획이다. 잘 다룰 수 있으면 업무에 중요할 것 같아서다."
        },
        {
          "speaker": "Me",
          "en": "It will be important for both me and my team.",
          "ko": "나와 우리 팀 모두에게 중요할 것이다."
        },
        {
          "speaker": "Me",
          "en": "I’m not sure if I can use the tool well yet, but I’ll do my best to learn it.",
          "ko": "아직 이 툴을 잘 쓸 수 있을지는 모르겠지만, 최선을 다해 배울 것이다."
        }
      ],
      "expressions": [
        {
          "phrase": "be planning to ~",
          "meaning": "~할 계획이다"
        },
        {
          "phrase": "get plenty of rest",
          "meaning": "푹 쉬다"
        },
        {
          "phrase": "haven’t ~ in a long time",
          "meaning": "한동안 ~하지 않았다"
        },
        {
          "phrase": "I’m not sure if ~",
          "meaning": "~일지 잘 모르겠다"
        },
        {
          "phrase": "do my best",
          "meaning": "최선을 다하다"
        }
      ],
      "marks": [
        "planning to"
      ]
    },
    {
      "id": "day21",
      "day": 21,
      "key": "might as well",
      "keyMeaning": "(그럴 바엔) ~하는 게 낫겠다",
      "title": "편의점 심부름",
      "situation": "편의점 가는 길에 부탁하기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "I’m on my way to the convenience store. You need anything?",
          "ko": "나 편의점 가는 길인데, 뭐 필요한 거 있어?"
        },
        {
          "speaker": "B",
          "en": "Yeah. Actually, could you get me some batteries? Some double-As. And some Scotch tape. Oh, and I also need a USB-A to C connector.",
          "ko": "응. 사실 건전지 좀 사다 줄래? AA 건전지로. 그리고 스카치테이프도. 아, USB-A to C 젠더도 필요해."
        },
        {
          "speaker": "A",
          "en": "I don’t even know what that is. Look, if you have some things to buy, you might as well just come along.",
          "ko": "그게 뭔지도 모르겠다. 저기, 살 게 그렇게 있으면 그냥 같이 가는 게 낫겠어."
        }
      ],
      "expressions": [
        {
          "phrase": "might as well ~",
          "meaning": "(그럴 바엔) ~하는 게 낫겠다"
        },
        {
          "phrase": "on my way to ~",
          "meaning": "~에 가는 길에"
        },
        {
          "phrase": "come along",
          "meaning": "같이 가다, 따라오다"
        },
        {
          "phrase": "double-As",
          "meaning": "AA 건전지"
        }
      ],
      "marks": [
        "might as well"
      ]
    },
    {
      "id": "day22",
      "day": 22,
      "key": "get back to it",
      "keyMeaning": "하던 일로 돌아가다",
      "title": "청소하다 잠깐 쉬는 중",
      "situation": "혼잣말 · 지금 하는 일 말하기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "Me",
          "en": "It’s about half past 11.",
          "ko": "지금 11시 반쯤이다."
        },
        {
          "speaker": "Me",
          "en": "I’m still at home.",
          "ko": "아직 집이다."
        },
        {
          "speaker": "Me",
          "en": "I’ve been cleaning all morning.",
          "ko": "아침 내내 청소하고 있다."
        },
        {
          "speaker": "Me",
          "en": "I’m just finishing up in the living room.",
          "ko": "거실만 마무리하는 중이다."
        },
        {
          "speaker": "Me",
          "en": "I’m just taking a short break right now.",
          "ko": "지금은 잠깐 쉬는 중이다."
        },
        {
          "speaker": "Me",
          "en": "It’s a lot of work.",
          "ko": "일이 많다."
        },
        {
          "speaker": "Me",
          "en": "It’s almost time for lunch.",
          "ko": "곧 점심시간이다."
        },
        {
          "speaker": "Me",
          "en": "I haven’t decided what to eat yet.",
          "ko": "아직 뭘 먹을지 못 정했다."
        },
        {
          "speaker": "Me",
          "en": "I wish I had someone who cooked for me every day.",
          "ko": "매일 밥해 주는 사람이 있으면 좋겠다."
        },
        {
          "speaker": "Me",
          "en": "That would make life so much easier.",
          "ko": "그러면 사는 게 훨씬 편할 텐데."
        },
        {
          "speaker": "Me",
          "en": "Anyway, I think there’s some leftover pizza in the fridge.",
          "ko": "어쨌든 냉장고에 남은 피자가 좀 있는 것 같다."
        },
        {
          "speaker": "Me",
          "en": "I might just finish that.",
          "ko": "그거나 먹어 치워야겠다."
        },
        {
          "speaker": "Me",
          "en": "Well, I guess I better get back to it.",
          "ko": "자, 이제 다시 하던 거 해야겠다."
        }
      ],
      "expressions": [
        {
          "phrase": "get back to it",
          "meaning": "하던 일로 돌아가다"
        },
        {
          "phrase": "half past 11",
          "meaning": "11시 반"
        },
        {
          "phrase": "finish up",
          "meaning": "마무리하다"
        },
        {
          "phrase": "take a short break",
          "meaning": "잠깐 쉬다"
        },
        {
          "phrase": "I wish I had ~",
          "meaning": "~가 있으면 좋겠다"
        },
        {
          "phrase": "leftover",
          "meaning": "남은 (음식)"
        }
      ],
      "marks": [
        "get back to it"
      ]
    },
    {
      "id": "day23",
      "day": 23,
      "key": "choose A over B",
      "keyMeaning": "B 대신 A를 택하다",
      "title": "음악 대신 의대",
      "situation": "진로 선택에 대해 묻는 대화",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "You chose med school over music, right?",
          "ko": "음악 대신 의대를 택했다며?"
        },
        {
          "speaker": "B",
          "en": "Yeah, it was a tough decision.",
          "ko": "응, 힘든 결정이었어."
        },
        {
          "speaker": "A",
          "en": "Do you have any regrets about not pursuing music?",
          "ko": "음악을 계속하지 않은 거 후회한 적 있어?"
        },
        {
          "speaker": "B",
          "en": "A few, but I try not to think about it too much.",
          "ko": "조금은. 근데 너무 많이 생각하지 않으려고 해."
        }
      ],
      "expressions": [
        {
          "phrase": "choose A over B",
          "meaning": "B 대신 A를 택하다"
        },
        {
          "phrase": "a tough decision",
          "meaning": "힘든 결정"
        },
        {
          "phrase": "have regrets about ~",
          "meaning": "~에 대해 후회하다"
        },
        {
          "phrase": "pursue",
          "meaning": "(꿈·진로를) 추구하다, 계속하다"
        }
      ],
      "marks": [
        "chose med school over music"
      ],
      "extras": [
        {
          "en": "You know, I might as well just tell him not to come because you guys are just going to embarrass me again.",
          "ko": "있잖아, 너희가 또 날 창피하게 만들 테니까 그냥 걔한테 오지 말라고 하는 게 낫겠어. (Day21 might as well 복습)"
        }
      ]
    },
    {
      "id": "day24",
      "day": 24,
      "key": "clear my head",
      "keyMeaning": "머리를 식히다",
      "title": "힘들었던 한 주",
      "situation": "오랜만에 만난 친구를 걱정하는 대화",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Hey, I haven’t seen you around lately.",
          "ko": "요즘 통 안 보이더라."
        },
        {
          "speaker": "B",
          "en": "I know… I had a rough week, emotionally.",
          "ko": "그러게… 감정적으로 힘든 한 주였어."
        },
        {
          "speaker": "A",
          "en": "Want to talk about it?",
          "ko": "얘기하고 싶어?"
        },
        {
          "speaker": "B",
          "en": "Maybe later. I just need some time to clear my head.",
          "ko": "나중에. 지금은 그냥 머리 좀 식힐 시간이 필요해."
        }
      ],
      "expressions": [
        {
          "phrase": "clear my head",
          "meaning": "머리를 식히다, 생각을 정리하다"
        },
        {
          "phrase": "I haven’t seen you around lately.",
          "meaning": "요즘 통 안 보이더라."
        },
        {
          "phrase": "a rough week",
          "meaning": "힘든 한 주"
        },
        {
          "phrase": "Want to talk about it?",
          "meaning": "얘기하고 싶어?"
        }
      ],
      "marks": [
        "clear my head"
      ]
    },
    {
      "id": "day25",
      "day": 25,
      "key": "I’ve been meaning to ~",
      "keyMeaning": "전부터 ~하려고 했어",
      "title": "새로 생긴 이탈리안 식당",
      "situation": "주말 약속 잡기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Hey, I’ve been meaning to ask you. Are you free this weekend?",
          "ko": "전부터 물어보려고 했는데, 이번 주말에 시간 있어?"
        },
        {
          "speaker": "B",
          "en": "I think so. Why?",
          "ko": "그럴 것 같은데. 왜?"
        },
        {
          "speaker": "A",
          "en": "I’ve been meaning to try that new Italian restaurant near the station. Would you like to go with me?",
          "ko": "역 근처에 새로 생긴 이탈리안 식당 가 보려고 했거든. 같이 갈래?"
        },
        {
          "speaker": "B",
          "en": "Yeah, I would love to! I’ve heard the pasta there is really good.",
          "ko": "응, 좋아! 거기 파스타 진짜 맛있다고 들었어."
        },
        {
          "speaker": "A",
          "en": "Great! Would Saturday evening work for you?",
          "ko": "좋아! 토요일 저녁 괜찮아?"
        }
      ],
      "expressions": [
        {
          "phrase": "I’ve been meaning to ~",
          "meaning": "전부터 ~하려고 했어"
        },
        {
          "phrase": "I would love to!",
          "meaning": "좋아! (기꺼이)"
        },
        {
          "phrase": "Would ~ work for you?",
          "meaning": "~ 괜찮아? (시간·날짜 정할 때)"
        }
      ],
      "marks": [
        "I’ve been meaning to"
      ]
    },
    {
      "id": "day26",
      "day": 26,
      "key": "can’t help ~ing",
      "keyMeaning": "~하지 않을 수 없다",
      "title": "디저트는 못 참지",
      "situation": "단 것을 줄이려는 친구와의 대화",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "I thought you were trying to cut down on sweets.",
          "ko": "너 단 거 줄이려는 줄 알았는데."
        },
        {
          "speaker": "B",
          "en": "I am, but I can’t help eating dessert when it looks this good.",
          "ko": "줄이고 있지. 근데 이렇게 맛있어 보이면 디저트를 안 먹을 수가 없어."
        },
        {
          "speaker": "A",
          "en": "I know what you mean. I can’t help ordering something sweet after dinner either.",
          "ko": "무슨 말인지 알아. 나도 저녁 먹고 나면 단 걸 시킬 수밖에 없더라."
        },
        {
          "speaker": "B",
          "en": "Exactly! I always tell myself I won’t, but then I see the dessert menu.",
          "ko": "그러니까! 항상 안 먹겠다고 다짐하는데, 디저트 메뉴를 보면…"
        },
        {
          "speaker": "A",
          "en": "Well, let’s just share one this time.",
          "ko": "그럼 이번엔 하나만 나눠 먹자."
        }
      ],
      "expressions": [
        {
          "phrase": "can’t help ~ing",
          "meaning": "~하지 않을 수 없다"
        },
        {
          "phrase": "cut down on",
          "meaning": "~을 줄이다"
        },
        {
          "phrase": "I know what you mean.",
          "meaning": "무슨 말인지 알아."
        },
        {
          "phrase": "tell myself ~",
          "meaning": "스스로 ~라고 다짐하다"
        }
      ],
      "marks": [
        "can’t help"
      ]
    },
    {
      "id": "day27",
      "day": 27,
      "key": "Not that I know of",
      "keyMeaning": "내가 알기로는 아니야",
      "title": "음성으로 ChatGPT 쓰기",
      "situation": "AI 툴에 대해 이야기하는 친구들",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "There’s a way to use ChatGPT using voice recognition, right?",
          "ko": "음성 인식으로 ChatGPT 쓰는 방법 있지?"
        },
        {
          "speaker": "B",
          "en": "Not that I know of, at least not for free.",
          "ko": "내가 알기로는 없어. 적어도 무료로는."
        },
        {
          "speaker": "A",
          "en": "Actually, there is a way using a third-party service.",
          "ko": "사실 외부 서비스를 쓰는 방법이 있어."
        },
        {
          "speaker": "B",
          "en": "Oh, really? Have you tried it?",
          "ko": "아, 정말? 써 봤어?"
        },
        {
          "speaker": "A",
          "en": "Yeah, but it’s usually in limited instances.",
          "ko": "응, 근데 보통 제한적인 경우에만 돼."
        },
        {
          "speaker": "B",
          "en": "Still, that’s better than nothing.",
          "ko": "그래도 없는 것보단 낫지."
        },
        {
          "speaker": "A",
          "en": "Plus, the function itself is really buggy. Sometimes, it just never understands what you’re saying.",
          "ko": "게다가 기능 자체에 버그가 많아. 가끔은 무슨 말을 해도 전혀 못 알아들어."
        }
      ],
      "expressions": [
        {
          "phrase": "Not that I know of.",
          "meaning": "내가 알기로는 아니야."
        },
        {
          "phrase": "at least",
          "meaning": "적어도"
        },
        {
          "phrase": "third-party service",
          "meaning": "외부(제3자) 서비스"
        },
        {
          "phrase": "better than nothing",
          "meaning": "없는 것보단 나은"
        },
        {
          "phrase": "buggy",
          "meaning": "버그가 많은"
        }
      ],
      "marks": [
        "Not that I know of"
      ]
    },
    {
      "id": "day28",
      "day": 28,
      "key": "have second thoughts",
      "keyMeaning": "다시 생각하게 되다, 망설여지다",
      "title": "새 프로젝트 합류 고민",
      "situation": "동료와 업무 고민 나누기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Are you still planning to join the new project?",
          "ko": "아직 새 프로젝트에 합류할 생각이야?"
        },
        {
          "speaker": "B",
          "en": "I’m not sure. I’m starting to have second thoughts about it.",
          "ko": "잘 모르겠어. 좀 망설여지기 시작했어."
        },
        {
          "speaker": "A",
          "en": "Really? I thought you were excited about it.",
          "ko": "정말? 기대하는 줄 알았는데."
        },
        {
          "speaker": "B",
          "en": "I was, but I’m worried it might be too much work on top of my current projects.",
          "ko": "그랬지. 근데 지금 하는 프로젝트에 더해지면 일이 너무 많을까 봐 걱정돼."
        },
        {
          "speaker": "A",
          "en": "That makes sense. Maybe you should talk to your manager before you decide.",
          "ko": "그럴 만하네. 결정하기 전에 매니저랑 얘기해 보는 게 좋겠다."
        }
      ],
      "expressions": [
        {
          "phrase": "have second thoughts (about ~)",
          "meaning": "(~을) 다시 생각하게 되다, 망설여지다"
        },
        {
          "phrase": "on top of ~",
          "meaning": "~에 더해"
        },
        {
          "phrase": "be excited about ~",
          "meaning": "~을 기대하다, ~에 들뜨다"
        }
      ],
      "marks": [
        "second thoughts"
      ]
    },
    {
      "id": "day29",
      "day": 29,
      "key": "just say the word",
      "keyMeaning": "말만 해 (언제든 도와줄게)",
      "title": "집 정리 도와줄게",
      "situation": "이사·정리를 돕겠다고 제안하기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "Hey, what are you doing tomorrow?",
          "ko": "내일 뭐 해?"
        },
        {
          "speaker": "B",
          "en": "Tomorrow? I’m actually planning to clean out some stuff I don’t need in my apartment. Maybe even some furniture.",
          "ko": "내일? 사실 집에 필요 없는 물건들 좀 정리하려고. 가구도 좀 버릴 수도 있고."
        },
        {
          "speaker": "A",
          "en": "Oh. If you need any help, I’m not doing anything tomorrow.",
          "ko": "아, 도움 필요하면 말해. 나 내일 아무것도 안 해."
        },
        {
          "speaker": "B",
          "en": "Well, my brother is coming over to help me. But if I decide to throw out some furniture, it would be nice to have an extra pair of hands.",
          "ko": "음, 동생이 도와주러 오기로 했어. 근데 가구를 버리기로 하면 일손이 하나 더 있으면 좋겠다."
        },
        {
          "speaker": "A",
          "en": "Just say the word.",
          "ko": "말만 해."
        },
        {
          "speaker": "B",
          "en": "Alright. I’ll let you know if I need you.",
          "ko": "알았어. 필요하면 연락할게."
        }
      ],
      "expressions": [
        {
          "phrase": "Just say the word.",
          "meaning": "말만 해. (언제든 도와줄게)"
        },
        {
          "phrase": "clean out",
          "meaning": "(필요 없는 것을) 정리하다, 비우다"
        },
        {
          "phrase": "throw out",
          "meaning": "버리다"
        },
        {
          "phrase": "an extra pair of hands",
          "meaning": "일손 하나 더"
        },
        {
          "phrase": "come over",
          "meaning": "(집에) 오다"
        }
      ],
      "marks": [
        "Just say the word"
      ]
    },
    {
      "id": "day30",
      "day": 30,
      "key": "just so you know",
      "keyMeaning": "참고로 말하자면, 알아 두라고",
      "title": "퇴사 결심",
      "situation": "회사를 그만두기로 한 소식 전하기",
      "date": "2026-10-09",
      "lines": [
        {
          "speaker": "A",
          "en": "I decided to quit my job.",
          "ko": "나 회사 그만두기로 했어."
        },
        {
          "speaker": "B",
          "en": "Really? Wow.",
          "ko": "정말? 와."
        },
        {
          "speaker": "A",
          "en": "Yeah. And just so you know, it’s not something I just suddenly decided. I’ve thought things through. I have a plan.",
          "ko": "응. 그리고 참고로 말하는데, 갑자기 정한 거 아니야. 충분히 생각했고, 계획도 있어."
        },
        {
          "speaker": "B",
          "en": "OK. So what’s your next move?",
          "ko": "그렇구나. 그럼 다음 계획은 뭐야?"
        },
        {
          "speaker": "A",
          "en": "I’m going to take a break for about a month. Then, I’m going to prepare for graduate school. I feel like a research job would be better for me.",
          "ko": "한 달 정도 쉬려고. 그다음엔 대학원 준비할 거야. 연구직이 나한테 더 맞을 것 같아."
        }
      ],
      "expressions": [
        {
          "phrase": "just so you know",
          "meaning": "참고로 말하자면, 알아 두라고"
        },
        {
          "phrase": "think things through",
          "meaning": "충분히 생각하다"
        },
        {
          "phrase": "What’s your next move?",
          "meaning": "다음 계획은 뭐야?"
        },
        {
          "phrase": "I feel like ~",
          "meaning": "~인 것 같아"
        }
      ],
      "marks": [
        "just so you know"
      ]
    }
  ],
};
