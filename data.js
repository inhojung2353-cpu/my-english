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

  /* ---------- 스크립트 (영화) ----------
     영화별 파트 학습 노트. 대본 원문은 저작권 때문에 여기 넣지 않고,
     각자 기기에 붙여 넣으면 marker(파트 시작 줄의 앞부분)를 기준으로 파트가 나뉘어요. */
  scripts: [
    {
      "id": "intern",
      "title": "인턴",
      "original": "The Intern",
      "year": 2015,
      "source": "영화",
      "date": "2026-10-09",
      "summary": "70세 시니어 인턴 벤과 30대 창업자 줄스가 세대를 넘어 친구가 되는 이야기. 일상 대화와 회사 영어가 많아 쉐도잉하기 좋아요.",
      "parts": [
        {
          "part": 1,
          "time": "약 0:00 – 0:07",
          "title": "은퇴한 70세 벤의 일상",
          "marker": null,
          "summary": "아내를 잃고 은퇴한 70세 벤은 여행, 요가, 중국어 수업까지 해 봤지만 마음 한구석이 비어 있어요. 어느 날 장을 보고 나오다 온라인 패션 회사 About The Fit의 시니어 인턴 모집 공고를 발견하고, 이웃 패티의 저녁 초대는 다음으로 미뤄요.",
          "scenes": [
            "벤의 내레이션: 은퇴 후 남아도는 시간과 바쁘게 지내려는 노력",
            "매일 아침 7시 15분, 스타벅스로 출근하듯 나가는 루틴",
            "마트 앞에서 시니어 인턴 공고 발견 — 지원 조건과 영상 자기소개서",
            "이웃 패티의 저녁 초대를 정중히 미룸"
          ],
          "expressions": [
            {
              "phrase": "have time on one’s hands",
              "meaning": "시간이 남아돌다",
              "scene": "은퇴하고 아내도 떠난 벤이 자기 상황을 설명하며",
              "example": "Since I retired, I’ve had a lot of time on my hands.",
              "exampleKo": "은퇴한 뒤로 시간이 많이 남아요."
            },
            {
              "phrase": "play hooky",
              "meaning": "(학교·일을) 땡땡이치다",
              "scene": "은퇴 초반엔 꼭 땡땡이치는 기분이었다며",
              "example": "I played hooky from work and went to the beach.",
              "exampleKo": "회사 땡땡이치고 바다에 갔어."
            },
            {
              "phrase": "hit someone like a ton of bricks",
              "meaning": "(감정·사실이) 크게 덮쳐 오다",
              "scene": "여행에서 돌아올 때마다 \"갈 곳이 없다\"는 느낌이 밀려왔다며",
              "example": "The news hit me like a ton of bricks.",
              "exampleKo": "그 소식은 큰 충격으로 다가왔어."
            },
            {
              "phrase": "come rain or shine",
              "meaning": "비가 오든 해가 뜨든, 무슨 일이 있어도",
              "scene": "매일 아침 카페에 가는 습관을 말하며",
              "example": "I go jogging every morning, come rain or shine.",
              "exampleKo": "나는 무슨 일이 있어도 매일 아침 조깅해."
            },
            {
              "phrase": "You name it.",
              "meaning": "(생각나는 건) 뭐든지 다",
              "scene": "골프, 책, 요가… 안 해 본 게 없다며",
              "example": "Pizza, pasta, sushi — you name it, he’s tried it.",
              "exampleKo": "피자, 파스타, 초밥… 뭐든 그는 다 먹어 봤어."
            },
            {
              "phrase": "love ~ to pieces",
              "meaning": "~을 너무너무 사랑하다",
              "scene": "샌디에이고에 사는 아들 가족에 대해",
              "example": "I love my grandkids to pieces.",
              "exampleKo": "손주들을 너무너무 사랑해."
            },
            {
              "phrase": "Don’t get me wrong.",
              "meaning": "오해하지 마",
              "scene": "불행한 사람은 아니라고 말하기 전에",
              "example": "Don’t get me wrong, I like my job. I’m just tired.",
              "exampleKo": "오해하지 마, 일은 좋아. 그냥 피곤할 뿐이야."
            },
            {
              "phrase": "Quite the contrary.",
              "meaning": "오히려 정반대야",
              "scene": "불행하지 않다, 오히려 그 반대라며",
              "example": "“Are you bored?” “Quite the contrary. I’m having fun.”",
              "exampleKo": "\"지루해?\" \"오히려 반대야. 재밌어.\""
            },
            {
              "phrase": "out of the corner of one’s eye",
              "meaning": "곁눈으로, 언뜻",
              "scene": "공고 전단지가 언뜻 눈에 들어온 순간",
              "example": "I saw something move out of the corner of my eye.",
              "exampleKo": "곁눈으로 뭔가 움직이는 게 보였어."
            },
            {
              "phrase": "take a rain check",
              "meaning": "다음 기회로 미루다",
              "scene": "패티의 저녁 초대를 정중히 미루며",
              "example": "Can I take a rain check on dinner? I’m swamped today.",
              "exampleKo": "저녁은 다음에 해도 될까? 오늘 너무 바빠."
            }
          ],
          "grammar": [
            {
              "point": "no matter where ~",
              "explain": "어디로 ~하든 (no matter + 의문사)",
              "example": "No matter where I go, I always bring a book.",
              "exampleKo": "어디를 가든 나는 항상 책을 가져가."
            },
            {
              "point": "과거완료 had p.p.",
              "explain": "과거의 어느 시점보다 더 먼저 일어난 일 — 모아 \"두었던\" 마일리지를 썼다",
              "example": "I finally used the money I’d saved for years.",
              "exampleKo": "몇 년간 모아 둔 돈을 드디어 썼어."
            }
          ]
        },
        {
          "part": 2,
          "time": "약 0:07 – 0:13",
          "title": "지원 영상, 그리고 줄스의 회사",
          "marker": "So here I am,",
          "summary": "벤은 손자에게 물어 가며 지원 영상을 찍어요. 한편 About The Fit의 창업자 줄스는 직접 고객 상담 전화를 받고, 자전거로 사무실을 누비며 홈페이지 회의까지 정신없이 처리해요.",
          "scenes": [
            "벤의 지원 영상: 일하고 싶은 이유, 충성심과 위기 대처 능력",
            "줄스가 직접 고객의 들러리 드레스 배송 사고를 해결",
            "비서 베키가 쏟아내는 줄스의 일정",
            "홈페이지 시안 회의 — 한눈에 읽혀야 한다"
          ],
          "expressions": [
            {
              "phrase": "figure out",
              "meaning": "알아내다, 이해하다",
              "scene": "기술적인 건 익히는 데 시간이 좀 걸릴 거라며",
              "example": "It took me a while to figure out the new software.",
              "exampleKo": "새 소프트웨어를 익히는 데 시간이 좀 걸렸어."
            },
            {
              "phrase": "I’ll get there.",
              "meaning": "(시간은 걸려도) 결국 해낼 거야",
              "scene": "USB가 뭔지도 몰랐지만 배우겠다며",
              "example": "My English isn’t perfect yet, but I’ll get there.",
              "exampleKo": "아직 영어가 완벽하진 않지만 결국 해낼 거야."
            },
            {
              "phrase": "company man",
              "meaning": "회사에 충실한 사람",
              "scene": "평생 한 회사에 충성해 왔다며",
              "example": "My dad was a company man. He worked there for 35 years.",
              "exampleKo": "아빠는 회사밖에 모르는 분이었어. 35년을 거기서 일하셨지."
            },
            {
              "phrase": "good in a crisis",
              "meaning": "위기에 강한",
              "scene": "자신의 장점을 소개하며",
              "example": "We need someone who’s calm and good in a crisis.",
              "exampleKo": "침착하고 위기에 강한 사람이 필요해요."
            },
            {
              "phrase": "hip",
              "meaning": "최신 유행에 밝은, 힙한",
              "scene": "브루클린에 살기엔 자신이 덜 힙한 것 같다며 농담",
              "example": "This neighborhood has become really hip lately.",
              "exampleKo": "이 동네 요즘 정말 힙해졌어."
            },
            {
              "phrase": "track (a package)",
              "meaning": "(배송을) 조회하다",
              "scene": "줄스가 고객 상담 전화에서",
              "example": "Let me track your order for you.",
              "exampleKo": "주문 배송 조회해 드릴게요."
            },
            {
              "phrase": "check ~ off one’s list",
              "meaning": "(할 일) 목록에서 지우다, 해결하다",
              "scene": "드레스 문제를 해결해 주며 고객에게",
              "example": "Finally, I can check that off my list!",
              "exampleKo": "드디어 그거 할 일 목록에서 지울 수 있다!"
            },
            {
              "phrase": "sign off on ~",
              "meaning": "~을 최종 승인하다",
              "scene": "모두가 줄스의 홈페이지 승인을 기다리며",
              "example": "The manager needs to sign off on the budget.",
              "exampleKo": "매니저가 예산을 최종 승인해야 해요."
            },
            {
              "phrase": "in a glance / at a glance",
              "meaning": "한눈에",
              "scene": "홈페이지는 한눈에 읽혀야 한다며",
              "example": "The dashboard shows everything at a glance.",
              "exampleKo": "대시보드에서 모든 걸 한눈에 볼 수 있어."
            }
          ],
          "grammar": [
            {
              "point": "the 비교급 ~, the 비교급 …",
              "explain": "~할수록 더 …하다 — 벤의 지원 영상",
              "example": "The more I practice, the more confident I feel.",
              "exampleKo": "연습할수록 더 자신감이 생겨."
            },
            {
              "point": "have + 목적어 + p.p.",
              "explain": "(남을 시켜) ~되게 하다 — 업체에 연락해 오늘 고쳐 놓겠다",
              "example": "I’ll have this fixed by tomorrow.",
              "exampleKo": "내일까지 이거 고쳐 놓도록 할게요."
            }
          ]
        },
        {
          "part": 3,
          "time": "약 0:13 – 0:19",
          "title": "면접 합격, 그리고 줄스의 당황",
          "marker": "There's gonna be a couple",
          "summary": "벤은 젊은 면접관과 엉뚱하지만 유쾌한 면접을 보고 인턴으로 합격해요. 한편 줄스는 회사 임원 캐머런에게 시니어 인턴 프로그램 이야기를 듣고, 자신도 인턴 한 명을 맡아야 한다는 사실에 당황해요.",
          "scenes": [
            "채용팀과의 면접 — 학교와 경력 질문",
            "\"10년 후 당신의 모습은?\" — 70세에게 어색한 질문",
            "합격 통보",
            "캐머런: 시니어 인턴 한 명이 줄스와 직접 일할 것"
          ],
          "expressions": [
            {
              "phrase": "talent acquisition",
              "meaning": "인재 채용(팀)",
              "scene": "벤이 낯선 회사 용어에 갸웃하며",
              "example": "Talent acquisition will contact you after the interview.",
              "exampleKo": "면접 후에 인재 채용팀에서 연락드릴 거예요."
            },
            {
              "phrase": "Fire away.",
              "meaning": "(질문) 어서 해 보세요",
              "scene": "면접 질문을 시작하려 하자 벤이",
              "example": "“Can I ask you a few questions?” “Sure, fire away.”",
              "exampleKo": "\"몇 가지 질문해도 돼요?\" \"물론이죠, 어서 하세요.\""
            },
            {
              "phrase": "be in charge of ~",
              "meaning": "~을 담당하다, 책임지다",
              "scene": "전화번호부 인쇄를 총괄했다고 설명하며",
              "example": "I’m in charge of the marketing team.",
              "exampleKo": "저는 마케팅 팀을 맡고 있어요."
            },
            {
              "phrase": "overqualified",
              "meaning": "(일에 비해) 자격이 넘치는",
              "scene": "면접관이 벤의 경력을 보고",
              "example": "He’s overqualified for this entry-level job.",
              "exampleKo": "그는 이 신입 자리에 비해 경력이 넘쳐."
            },
            {
              "phrase": "You nailed it.",
              "meaning": "완벽하게 해냈어",
              "scene": "합격을 알리며",
              "example": "Great presentation! You nailed it.",
              "exampleKo": "발표 최고였어! 완벽했어."
            },
            {
              "phrase": "set ~ in motion",
              "meaning": "~을 시작하게 하다, 진행시키다",
              "scene": "캐머런이 이미 프로그램을 진행시켰다며",
              "example": "We’ve already set the plan in motion.",
              "exampleKo": "이미 계획을 진행시켰어요."
            },
            {
              "phrase": "set the tone",
              "meaning": "분위기를 정하다, 본보기가 되다",
              "scene": "대표인 줄스가 먼저 인턴을 맡아야 한다며",
              "example": "The first meeting sets the tone for the whole project.",
              "exampleKo": "첫 회의가 프로젝트 전체 분위기를 좌우해."
            },
            {
              "phrase": "as opposed to ~",
              "meaning": "~와 대조적으로, ~가 아니라",
              "scene": "경험 많은 인턴과 대학생 인턴을 비교하며",
              "example": "I prefer working in the morning, as opposed to at night.",
              "exampleKo": "나는 밤보다는 아침에 일하는 게 좋아."
            },
            {
              "phrase": "a ton of ~",
              "meaning": "엄청 많은 ~",
              "scene": "시니어 인턴에 대한 연구가 아주 많다며",
              "example": "I have a ton of work to do today.",
              "exampleKo": "오늘 할 일이 엄청 많아."
            }
          ],
          "grammar": [
            {
              "point": "Where do you see yourself in 10 years?",
              "explain": "면접 단골 질문. in + 기간 = (지금부터) ~ 후에",
              "example": "I see myself leading a team in five years.",
              "exampleKo": "5년 후엔 팀을 이끌고 있을 것 같아요."
            },
            {
              "point": "Would you prefer A or B?",
              "explain": "정중하게 선호를 묻기",
              "example": "Would you prefer coffee or tea?",
              "exampleKo": "커피와 차 중 어떤 걸로 드릴까요?"
            }
          ]
        },
        {
          "part": 4,
          "time": "약 0:19 – 0:27",
          "title": "첫 출근 — 줄스의 개인 인턴",
          "marker": "Back in action.",
          "summary": "오리엔테이션 첫날, 벤은 젊은 인턴 데이비스와 친해지고 창업자 줄스의 개인 인턴으로 배정돼요. 줄스는 솔직하게 \"시킬 일이 별로 없을 것\"이라며 다른 부서로 옮기길 권하지만, 벤은 남겠다고 해요.",
          "scenes": [
            "회사 소개: 칸막이 없는 한 층, 자전거 타는 CEO",
            "동기 인턴 데이비스와의 첫 만남",
            "비서 베키의 조언: 빨리 말하고, 꾸물대지 말고, 눈 깜빡일 것",
            "줄스와의 첫 미팅 — \"이메일로 연락할게요\""
          ],
          "expressions": [
            {
              "phrase": "(be) psyched",
              "meaning": "엄청 신난",
              "scene": "데이비스가 인턴에 붙어 들떠서",
              "example": "I’m so psyched for the concert tonight!",
              "exampleKo": "오늘 밤 콘서트 너무 기대돼!"
            },
            {
              "phrase": "I like how you roll.",
              "meaning": "네 방식(스타일) 마음에 든다",
              "scene": "매일 정장을 입겠다는 벤에게 데이비스가",
              "example": "You always come prepared. I like how you roll.",
              "exampleKo": "넌 항상 준비돼 있구나. 네 스타일 맘에 든다."
            },
            {
              "phrase": "Hang in there.",
              "meaning": "힘내, 버텨",
              "scene": "줄스의 인턴이 됐다는 벤에게 동료가",
              "example": "I know work is tough right now. Hang in there!",
              "exampleKo": "요즘 일 힘든 거 알아. 힘내!"
            },
            {
              "phrase": "dawdle",
              "meaning": "꾸물거리다",
              "scene": "베키가 줄스 앞에서 꾸물대지 말라며",
              "example": "Don’t dawdle — we’re going to miss the train!",
              "exampleKo": "꾸물대지 마, 기차 놓치겠어!"
            },
            {
              "phrase": "weird someone out",
              "meaning": "~을 기분 이상하게 만들다",
              "scene": "줄스는 눈 안 깜빡이는 사람을 싫어한다며",
              "example": "His long silence really weirded me out.",
              "exampleKo": "그가 오래 말이 없어서 정말 이상했어."
            },
            {
              "phrase": "be better off ~ing",
              "meaning": "~하는 게 더 낫다",
              "scene": "줄스가 벤에게 다른 부서가 나을 거라며",
              "example": "You’d be better off taking the subway.",
              "exampleKo": "지하철 타는 게 더 나을 거야."
            },
            {
              "phrase": "get along with ~",
              "meaning": "~와 잘 지내다",
              "scene": "누구와도 잘 지낼 수 있다는 벤",
              "example": "I get along with all my coworkers.",
              "exampleKo": "동료들 모두와 잘 지내요."
            },
            {
              "phrase": "be stuck with ~",
              "meaning": "(싫든 좋든) ~와 함께해야 하는 처지다",
              "scene": "전근을 안 하겠다는 벤에게 줄스가",
              "example": "Looks like you’re stuck with me for the weekend.",
              "exampleKo": "주말 동안 나랑 꼼짝없이 같이 있어야겠네."
            },
            {
              "phrase": "stand out",
              "meaning": "눈에 띄다",
              "scene": "정장을 입으면 적어도 눈에 띌 거라며",
              "example": "Her bright red coat really stood out.",
              "exampleKo": "그녀의 새빨간 코트가 정말 눈에 띄었어."
            }
          ],
          "grammar": [
            {
              "point": "make that happen",
              "explain": "그렇게 되도록 하다, 실현시키다 — 원하면 전근시켜 줄 수 있다",
              "example": "If you want a bigger desk, I can make that happen.",
              "exampleKo": "더 큰 책상을 원하면 마련해 줄 수 있어요."
            },
            {
              "point": "get used to + 명사/~ing",
              "explain": "~에 익숙해지다 — \"곧 저한테 익숙해질 거예요\"",
              "example": "You’ll get used to waking up early.",
              "exampleKo": "일찍 일어나는 데 익숙해질 거야."
            }
          ]
        },
        {
          "part": 5,
          "time": "약 0:27 – 0:35",
          "title": "사무실에 스며드는 벤",
          "marker": "Can't leave before",
          "summary": "이메일을 기다리며 할 일 없이 앉아 있던 벤은 동료들의 고민을 들어 주고, 아무도 손대지 않던 잡동사니 책상을 아침 일찍 치워 모두의 사랑을 받아요. 한편 줄스는 투자자들이 경험 많은 외부 CEO 영입을 원한다는 소식을 들어요.",
          "scenes": [
            "연애 고민 상담: 문자 말고 직접 만나서 사과하라",
            "캐머런: \"외부 CEO 후보를 만나 보자\"",
            "줄스의 반발: 경험이 부족해서? 하버드를 안 나와서?",
            "벤이 치운 잡동사니 책상, 사내 마사지사 피오나와의 만남"
          ],
          "expressions": [
            {
              "phrase": "on purpose",
              "meaning": "일부러",
              "scene": "동료가 일부러 그런 건 아니라며",
              "example": "Sorry, I didn’t do it on purpose.",
              "exampleKo": "미안, 일부러 그런 거 아니야."
            },
            {
              "phrase": "a big hit",
              "meaning": "인기 만점",
              "scene": "모두가 벤을 좋아한다며",
              "example": "The new menu was a big hit with customers.",
              "exampleKo": "새 메뉴가 손님들에게 대박이었어."
            },
            {
              "phrase": "drive someone crazy",
              "meaning": "~을 미치게 하다",
              "scene": "지저분한 책상을 보지 말라며",
              "example": "The noise upstairs is driving me crazy.",
              "exampleKo": "윗집 소음 때문에 미치겠어."
            },
            {
              "phrase": "I didn’t see that coming.",
              "meaning": "그건 예상 못 했어",
              "scene": "외부 CEO 이야기에 줄스가 당황하며",
              "example": "He quit? Wow, I didn’t see that coming.",
              "exampleKo": "그가 그만뒀어? 와, 예상 못 했다."
            },
            {
              "phrase": "by the book",
              "meaning": "규정대로, 정석대로",
              "scene": "내 방식이 정석이 아니라서냐며",
              "example": "She does everything by the book.",
              "exampleKo": "그녀는 모든 걸 원칙대로 해."
            },
            {
              "phrase": "keep up with ~",
              "meaning": "~을 따라가다 (Dialog Day 7)",
              "scene": "회사가 자기 성장 속도를 못 따라간다며",
              "example": "We can’t keep up with all the orders.",
              "exampleKo": "주문을 다 따라가지 못하고 있어요."
            },
            {
              "phrase": "play catch-up",
              "meaning": "(뒤처진 걸) 따라잡으려 애쓰다",
              "scene": "모두가 밀린 일을 쫓고 있다며",
              "example": "After my vacation, I’m playing catch-up with emails.",
              "exampleKo": "휴가 끝나고 밀린 이메일 따라잡는 중이야."
            },
            {
              "phrase": "take ~ off one’s plate",
              "meaning": "~의 일을 덜어 주다",
              "scene": "노련한 CEO가 줄스의 일을 덜어 줄 거라며",
              "example": "Let me take this task off your plate.",
              "exampleKo": "이 일은 내가 덜어 갈게."
            },
            {
              "phrase": "run ~ by someone",
              "meaning": "~에게 (의견을) 먼저 물어보다",
              "scene": "모든 아이디어를 새 CEO에게 보고해야 하냐며",
              "example": "Can I run an idea by you?",
              "exampleKo": "아이디어 하나 의견 좀 물어봐도 될까?"
            },
            {
              "phrase": "Baby steps.",
              "meaning": "천천히, 한 걸음씩",
              "scene": "일단 후보 명단부터 보자며",
              "example": "Don’t rush. Baby steps.",
              "exampleKo": "서두르지 마. 한 걸음씩."
            }
          ],
          "grammar": [
            {
              "point": "only so many / only so much",
              "explain": "한정된 만큼만 있다 — 하루 시간엔 한계가 있다",
              "example": "There’s only so much I can do by myself.",
              "exampleKo": "나 혼자 할 수 있는 건 한계가 있어."
            },
            {
              "point": "the 비교급, the 비교급 (복습)",
              "explain": "회사가 커질수록 더 복잡해진다",
              "example": "The bigger the team, the harder communication gets.",
              "exampleKo": "팀이 커질수록 소통은 어려워져."
            }
          ]
        },
        {
          "part": 6,
          "time": "약 0:35 – 0:44",
          "title": "운전대를 잡은 벤",
          "marker": "Wait, so you're saying",
          "summary": "줄스의 운전기사가 낮술을 마신 것을 눈치챈 벤은 조용히 그를 돌려보내고 직접 운전대를 잡아요. 줄스는 첫 CEO 후보를 만나지만 실망하고, 벤이 사 온 수프에 마음이 조금 열려요. 그날 밤 벤은 피오나에게 전화를 걸어요.",
          "scenes": [
            "데이비스의 집 구하기 고민",
            "운전기사를 조용히 설득해 돌려보냄",
            "차 안에서 줄스와 엄마의 통화 — 수면 연구 이야기",
            "첫 CEO 후보 면담 실패, 벤의 수프",
            "집에서 기다리는 남편 매트와 딸 페이지"
          ],
          "expressions": [
            {
              "phrase": "get evicted",
              "meaning": "(집에서) 쫓겨나다",
              "scene": "부모님이 2주 안에 나가라고 했다는 데이비스",
              "example": "If you don’t pay rent, you could get evicted.",
              "exampleKo": "월세 안 내면 쫓겨날 수도 있어."
            },
            {
              "phrase": "I’m in no rush.",
              "meaning": "난 급하지 않아",
              "scene": "데이비스가 자신은 급할 게 없다며",
              "example": "Take your time. I’m in no rush.",
              "exampleKo": "천천히 해. 난 급하지 않아."
            },
            {
              "phrase": "not feeling so hot",
              "meaning": "몸 상태가 별로다",
              "scene": "운전기사가 핑계를 대며",
              "example": "I’m not feeling so hot today. I think I’m catching a cold.",
              "exampleKo": "오늘 컨디션이 별로야. 감기 걸리려나 봐."
            },
            {
              "phrase": "cover for ~",
              "meaning": "~의 일을 대신 해 주다",
              "scene": "벤이 기사 대신 운전하겠다며",
              "example": "Can you cover for me while I’m at the dentist?",
              "exampleKo": "나 치과 간 동안 내 일 좀 대신해 줄래?"
            },
            {
              "phrase": "It goes without saying.",
              "meaning": "말할 필요도 없지",
              "scene": "차 안 대화는 비밀이라는 줄스에게 벤이",
              "example": "It goes without saying that safety comes first.",
              "exampleKo": "안전이 최우선인 건 말할 필요도 없지."
            },
            {
              "phrase": "Word travels fast.",
              "meaning": "소문 참 빠르네",
              "scene": "미팅이 금방 끝났다는 벤에게",
              "example": "Word travels fast in a small office.",
              "exampleKo": "작은 사무실에선 소문이 빨라."
            },
            {
              "phrase": "know-it-all",
              "meaning": "다 아는 척하는 사람",
              "scene": "줄스가 첫 CEO 후보를 평가하며",
              "example": "Nobody likes a know-it-all.",
              "exampleKo": "아는 척하는 사람은 아무도 안 좋아해."
            },
            {
              "phrase": "Be there or be square.",
              "meaning": "꼭 와 (안 오면 재미없는 사람이야)",
              "scene": "내일 아침에 보자며",
              "example": "Party at my place on Friday. Be there or be square!",
              "exampleKo": "금요일 우리 집 파티야. 꼭 와!"
            },
            {
              "phrase": "over the hump",
              "meaning": "고비를 넘긴 (주로 수요일)",
              "scene": "매트가 줄스를 맞으며",
              "example": "It’s Wednesday — we’re over the hump!",
              "exampleKo": "수요일이다, 고비 넘겼어!"
            }
          ],
          "grammar": [
            {
              "point": "happen to + 동사 (Dialog Day 15)",
              "explain": "마침 ~하다 — 마침 창밖을 봤는데",
              "example": "I happened to see him at the station.",
              "exampleKo": "역에서 마침 그를 봤어."
            },
            {
              "point": "be ~% more likely to …",
              "explain": "…할 가능성이 ~% 더 높다 — 통계 표현",
              "example": "People who exercise are more likely to sleep well.",
              "exampleKo": "운동하는 사람들은 잠을 잘 잘 가능성이 더 높아요."
            }
          ]
        },
        {
          "part": 7,
          "time": "약 0:44 – 0:52",
          "title": "줄스의 집, 그리고 학교 엄마들",
          "marker": "Hey, Ben. It's Becky.",
          "summary": "다음 날 아침 벤은 줄스를 데리러 갔다가 남편 매트, 딸 페이지와 인사해요. 줄스가 성공한 뒤 매트는 일을 그만두고 전업주부 아빠가 되었어요. 학교 앞 엄마들의 은근한 견제에 줄스는 지친 기색을 보여요.",
          "scenes": [
            "베키의 부탁: 7시 45분, 벨 누르고 물러설 것",
            "줄스의 집 — 매트, 페이지, 레고",
            "엄마들 사이 유일한 아빠, 매트",
            "학교 엄마들의 과카몰리 부탁과 줄스의 한숨",
            "창고 가는 길 — 길 안내 신경전"
          ],
          "expressions": [
            {
              "phrase": "Loud and clear.",
              "meaning": "잘 들려요, 확실히 알겠어요",
              "scene": "베키의 지시에 벤이",
              "example": "“Did you get my message?” “Loud and clear.”",
              "exampleKo": "\"내 메시지 받았어?\" \"확실히 알겠어.\""
            },
            {
              "phrase": "Watch your step.",
              "meaning": "발밑 조심하세요",
              "scene": "레고가 널린 집에 들어오며",
              "example": "Watch your step — the floor is wet.",
              "exampleKo": "발밑 조심하세요, 바닥이 젖었어요."
            },
            {
              "phrase": "be slammed",
              "meaning": "정신없이 바쁘다",
              "scene": "줄스가 다음 주가 꽉 찼다며",
              "example": "I’m slammed this week. Can we meet next week?",
              "exampleKo": "이번 주 너무 바빠. 다음 주에 볼까?"
            },
            {
              "phrase": "be fixated on ~",
              "meaning": "~에 꽂혀 있다",
              "scene": "포장지에 정신이 팔려 남편 말을 놓쳤다며",
              "example": "He’s fixated on finding the perfect apartment.",
              "exampleKo": "그는 완벽한 집을 찾는 데 꽂혀 있어."
            },
            {
              "phrase": "stay-at-home dad",
              "meaning": "전업주부 아빠",
              "scene": "\"주부 남편\"이란 말을 줄스가 바로잡으며",
              "example": "My brother is a stay-at-home dad.",
              "exampleKo": "우리 오빠는 전업주부 아빠야."
            },
            {
              "phrase": "take off",
              "meaning": "(사업이) 급성장하다 (Set 2 take off)",
              "scene": "회사가 잘되자 매트가 일을 그만뒀다며",
              "example": "Her YouTube channel really took off last year.",
              "exampleKo": "그녀의 유튜브 채널이 작년에 확 떴어."
            },
            {
              "phrase": "take the high road",
              "meaning": "(맞서지 않고) 품위 있게 대처하다",
              "scene": "학교 엄마들의 견제를 참으며",
              "example": "She could have yelled back, but she took the high road.",
              "exampleKo": "맞받아칠 수도 있었지만 그녀는 품위 있게 넘어갔어."
            },
            {
              "phrase": "make a right",
              "meaning": "우회전하다",
              "scene": "줄스가 길을 알려 주며",
              "example": "Make a right at the next light.",
              "exampleKo": "다음 신호에서 우회전하세요."
            }
          ],
          "grammar": [
            {
              "point": "수사 의문문",
              "explain": "답을 바라지 않는 질문 — \"아직도 워킹맘을 비판해?\"",
              "example": "Who doesn’t love pizza?",
              "exampleKo": "피자 싫어하는 사람이 어딨어?"
            },
            {
              "point": "Do you know yet if ~?",
              "explain": "~인지 이제 알아? (if = ~인지)",
              "example": "Do you know yet if you can come?",
              "exampleKo": "올 수 있는지 이제 알아?"
            }
          ]
        },
        {
          "part": 8,
          "time": "약 0:52 – 1:02",
          "title": "옛 사무실에서 보낸 늦은 밤",
          "marker": "Can I interest you",
          "summary": "벤은 피오나와의 저녁 약속을 미루고 줄스의 야근을 기다려요. 피자를 나눠 먹으며 벤은 이 건물이 자신이 40년 일한 전화번호부 공장이었다고 밝히고, 줄스는 벤의 페이스북 가입을 도와줘요. 차에서 잠든 줄스와 나누는 \"사요나라\" 인사.",
          "scenes": [
            "피오나의 발 마사지와 데이트 재약속",
            "배달 가는 루이스에게 옷차림 조언",
            "사무실 피자, 두 번째 CEO 후보 이야기",
            "벤의 옛 사무실 이야기, 페이스북 프로필 만들기",
            "차에서 잠든 줄스"
          ],
          "expressions": [
            {
              "phrase": "Can I interest you in ~?",
              "meaning": "~은 어떠세요? (권유)",
              "scene": "피오나가 벤에게 마사지를 권하며",
              "example": "Can I interest you in some dessert?",
              "exampleKo": "디저트 좀 드시겠어요?"
            },
            {
              "phrase": "reschedule",
              "meaning": "일정을 다시 잡다",
              "scene": "미룬 저녁 약속을 다시 잡으며",
              "example": "Can we reschedule the meeting for Friday?",
              "exampleKo": "회의 금요일로 다시 잡을 수 있을까요?"
            },
            {
              "phrase": "on all cylinders",
              "meaning": "전력을 다해, 풀가동으로",
              "scene": "줄스는 쉬지 않고 일한다며",
              "example": "The team is working on all cylinders before the launch.",
              "exampleKo": "출시 전에 팀이 전력을 다하고 있어."
            },
            {
              "phrase": "freaked out",
              "meaning": "겁먹은, 패닉 상태의",
              "scene": "유명인 집에 배달 간다는 루이스",
              "example": "I was so freaked out before the exam.",
              "exampleKo": "시험 전에 너무 겁났어."
            },
            {
              "phrase": "dress to impress",
              "meaning": "잘 보이게 차려입다",
              "scene": "벤이 루이스에게 셔츠를 입으라며",
              "example": "It’s a job interview, so dress to impress.",
              "exampleKo": "면접이니까 제대로 차려입어."
            },
            {
              "phrase": "force of habit",
              "meaning": "습관이라서",
              "scene": "굳이 안 해도 되는 행동을 습관처럼 하며",
              "example": "Sorry, force of habit — I always check my phone.",
              "exampleKo": "미안, 습관이라 계속 폰을 보게 돼."
            },
            {
              "phrase": "Better late than never.",
              "meaning": "늦더라도 안 하는 것보단 낫다",
              "scene": "늦게 페이스북을 시작한 벤에게",
              "example": "I started learning English at 40. Better late than never!",
              "exampleKo": "마흔에 영어를 시작했어. 늦어도 안 하는 것보단 낫지!"
            },
            {
              "phrase": "brown-nose",
              "meaning": "아첨하다",
              "scene": "아부하려는 게 아니라며 칭찬하는 벤",
              "example": "He’s always brown-nosing the boss.",
              "exampleKo": "그는 항상 상사한테 아부해."
            },
            {
              "phrase": "run across ~",
              "meaning": "~을 우연히 만나다",
              "scene": "줄스 같은 사람은 처음 봤다며",
              "example": "I ran across an old friend at the mall.",
              "exampleKo": "쇼핑몰에서 옛 친구를 우연히 만났어."
            },
            {
              "phrase": "at the end of the day",
              "meaning": "결국, 따지고 보면",
              "scene": "줄스가 창업 아이디어를 설명하며",
              "example": "At the end of the day, the customer decides.",
              "exampleKo": "결국엔 고객이 결정하는 거야."
            }
          ],
          "grammar": [
            {
              "point": "If I were you, I’d ~",
              "explain": "내가 너라면 ~할 거야 (가정법 과거, 조언) — 집 계약서를 본 벤",
              "example": "If I were you, I’d ask for a discount.",
              "exampleKo": "내가 너라면 할인을 요청할 거야."
            },
            {
              "point": "used to + 동사",
              "explain": "(예전에) ~하곤 했다 — 전화번호부를 만들던 공장",
              "example": "This building used to be a factory.",
              "exampleKo": "이 건물은 예전엔 공장이었어."
            }
          ]
        },
        {
          "part": 9,
          "time": "약 1:02 – 1:11",
          "title": "오해, 사과, 그리고 한 팀",
          "marker": "Good morning. I'm Doris.",
          "summary": "줄스가 무심코 한 말 때문에 벤이 다른 부서로 옮겨지자, 줄스는 직접 벤의 집을 찾아가 사과하고 자기 옆자리로 불러와요. 벤은 지친 비서 베키를 도와주고, 집에서 쫓겨난 데이비스를 자기 집에 재워 줘요.",
          "scenes": [
            "새 기사 도리스와의 아찔한 출근길",
            "줄스의 사과: \"당신이 있으면 마음이 차분해져요\"",
            "베키의 눈물과 벤의 도움",
            "구매 패턴 데이터 분석, 베키 칭찬하기",
            "데이비스를 집에 재워 줌 — 손수건 이야기"
          ],
          "expressions": [
            {
              "phrase": "overstep",
              "meaning": "선을 넘다, 주제넘게 굴다",
              "scene": "벤이 혹시 선을 넘었다면 사과한다며",
              "example": "I’m sorry if I overstepped.",
              "exampleKo": "제가 선을 넘었다면 죄송해요."
            },
            {
              "phrase": "I could use ~",
              "meaning": "~가 있으면 좋겠다, 필요하다",
              "scene": "줄스가 벤의 차분함이 필요하다며",
              "example": "I could use a cup of coffee right now.",
              "exampleKo": "지금 커피 한 잔 마시면 딱 좋겠다."
            },
            {
              "phrase": "jump the gun",
              "meaning": "성급하게 행동하다",
              "scene": "줄스가 섣불리 벤을 옮긴 걸 후회하며",
              "example": "Let’s not jump the gun. Wait for the results.",
              "exampleKo": "섣불리 굴지 말자. 결과를 기다려."
            },
            {
              "phrase": "give someone a lift",
              "meaning": "차로 태워 주다",
              "scene": "회사까지 태워 주겠다며",
              "example": "Can you give me a lift to the station?",
              "exampleKo": "역까지 좀 태워 줄 수 있어?"
            },
            {
              "phrase": "give someone a hand",
              "meaning": "도와주다",
              "scene": "베키가 벤의 도움을 받게 하며",
              "example": "Can you give me a hand with these boxes?",
              "exampleKo": "이 상자들 좀 같이 들어 줄래?"
            },
            {
              "phrase": "once in a while",
              "meaning": "가끔은",
              "scene": "베키에게 가끔은 제시간에 퇴근하라며",
              "example": "You should take a break once in a while.",
              "exampleKo": "가끔은 좀 쉬어야 해."
            },
            {
              "phrase": "a clean slate",
              "meaning": "백지상태, 새 출발",
              "scene": "밀린 일을 깨끗이 정리하자며",
              "example": "Let’s start with a clean slate.",
              "exampleKo": "새 마음으로 처음부터 시작하자."
            },
            {
              "phrase": "put someone up",
              "meaning": "~을 (집에) 재워 주다",
              "scene": "벤이 데이비스를 몇 주 재워 주겠다며",
              "example": "My friend put me up for a week in London.",
              "exampleKo": "런던에서 친구가 일주일 재워 줬어."
            },
            {
              "phrase": "I’m pooped.",
              "meaning": "완전 녹초야",
              "scene": "벤이 이제 자야겠다며",
              "example": "I’m pooped. I’m going to bed.",
              "exampleKo": "완전 지쳤어. 잘게."
            }
          ],
          "grammar": [
            {
              "point": "I happen to think ~",
              "explain": "(남들은 몰라도) 나는 ~라고 생각해 — 베키를 격려하는 벤",
              "example": "I happen to think you’re doing a great job.",
              "exampleKo": "난 네가 아주 잘하고 있다고 생각해."
            },
            {
              "point": "무생물 주어",
              "explain": "사람 대신 광고 채널이 주어인 데이터 보고 문장",
              "example": "This channel brings us the most customers.",
              "exampleKo": "이 채널이 고객을 가장 많이 데려와요."
            }
          ]
        },
        {
          "part": 10,
          "time": "약 1:11 – 1:22",
          "title": "엄마 집 침입 작전",
          "marker": "more berries",
          "summary": "줄스가 엄마에게 실수로 험담 메일을 보내자, 벤과 인턴 3인방은 영화 \"오션스 일레븐\"처럼 줄스 엄마의 집에 몰래 들어가 메일을 지워요. 성공 후 바에서 술에 취한 줄스는 요즘 남자들에 대한 일장 연설을 늘어놓아요.",
          "scenes": [
            "아침 식탁: 거물 CEO 후보 타운센드, 샌프란시스코 출장 계획",
            "홈페이지 줌 기능 고장, 창고 빈대 사건",
            "잘못 보낸 이메일 — 침입 작전 개시",
            "가짜인 줄 알았던 진짜 경보기",
            "축하 술자리와 줄스의 연설"
          ],
          "expressions": [
            {
              "phrase": "on the fence",
              "meaning": "(결정을 못 하고) 망설이는",
              "scene": "타운센드 영입에 대해 줄스가",
              "example": "I’m still on the fence about moving.",
              "exampleKo": "이사할지 아직 고민 중이야."
            },
            {
              "phrase": "flip out",
              "meaning": "흥분하다, 난리 나다",
              "scene": "모두가 타운센드 소식에 들떴다며",
              "example": "My mom flipped out when she saw my grades.",
              "exampleKo": "엄마가 내 성적 보고 난리 났어."
            },
            {
              "phrase": "for the record",
              "meaning": "참고로 말해 두자면 (Day 30 just so you know와 비슷)",
              "scene": "페이지가 자기는 한 번도 아리엘을 못 해 봤다며",
              "example": "For the record, I never agreed to this plan.",
              "exampleKo": "참고로 말하는데, 난 이 계획에 동의한 적 없어."
            },
            {
              "phrase": "Lay it on me.",
              "meaning": "(나쁜 소식이라도) 말해 봐",
              "scene": "창고 담당자에게 줄스가",
              "example": "“I have bad news.” “Okay, lay it on me.”",
              "exampleKo": "\"안 좋은 소식이 있어.\" \"그래, 말해 봐.\""
            },
            {
              "phrase": "count on ~",
              "meaning": "~을 믿다, 의지하다",
              "scene": "줄스가 직원들의 도움을 믿는다며",
              "example": "You can always count on me.",
              "exampleKo": "언제든 나한테 의지해도 돼."
            },
            {
              "phrase": "a piece of cake",
              "meaning": "식은 죽 먹기",
              "scene": "침입 작전 전 벤이",
              "example": "Don’t worry, the test will be a piece of cake.",
              "exampleKo": "걱정 마, 시험은 식은 죽 먹기일 거야."
            },
            {
              "phrase": "win-win",
              "meaning": "모두에게 좋은",
              "scene": "컴퓨터를 가져가면 새 걸 사 주면 된다며",
              "example": "It’s a win-win for both companies.",
              "exampleKo": "두 회사 모두에게 이득이야."
            },
            {
              "phrase": "Pull it together.",
              "meaning": "정신 차려",
              "scene": "패닉에 빠진 데이비스에게",
              "example": "Pull it together! We need to finish this.",
              "exampleKo": "정신 차려! 이거 끝내야 해."
            },
            {
              "phrase": "above and beyond",
              "meaning": "기대(의무) 이상으로",
              "scene": "줄스가 고마움을 표현하며",
              "example": "She always goes above and beyond for her customers.",
              "exampleKo": "그녀는 항상 고객을 위해 기대 이상으로 노력해."
            },
            {
              "phrase": "be in someone’s debt",
              "meaning": "~에게 신세를 지다",
              "scene": "줄스가 영원히 신세 졌다며",
              "example": "Thanks for helping me move. I’m in your debt.",
              "exampleKo": "이사 도와줘서 고마워. 신세 졌어."
            }
          ],
          "grammar": [
            {
              "point": "부정어 도치: Little do/does/did + 주어 + 동사",
              "explain": "~을 전혀 모른다 — 내비게이션은 자기가 공범인 줄 모른다",
              "example": "Little did I know that he was the boss.",
              "exampleKo": "그가 사장인 줄은 전혀 몰랐어."
            },
            {
              "point": "go from A to B",
              "explain": "A에서 B로 바뀌다 — \"girls\"에서 \"women\"으로",
              "example": "Prices went from $10 to $15.",
              "exampleKo": "가격이 10달러에서 15달러로 올랐어."
            }
          ]
        },
        {
          "part": 11,
          "time": "약 1:22 – 1:32",
          "title": "장례식 데이트와 불길한 목격",
          "marker": "Really so nice of you",
          "summary": "벤은 피오나와의 첫 데이트를 지인의 장례식(시바)에서 보내며 서로의 인생을 10초 만에 소개해요. 다음 날 아픈 매트 대신 페이지를 생일 파티에 데려다준 벤은 매트의 비밀을 알게 되고, 줄스 앞에서 어색하게 행동해요.",
          "scenes": [
            "시바(유대식 조문)에 함께 간 첫 데이트",
            "\"10초 자기소개\": 홀아비, 인턴, 짝사랑",
            "아픈 매트 대신 페이지를 파티에 데려다줌",
            "엄마들의 뒷말 — 유리 천장을 깨는 줄스",
            "매트의 비밀을 알게 된 벤의 어색함"
          ],
          "expressions": [
            {
              "phrase": "I’m so sorry for your loss.",
              "meaning": "삼가 조의를 표합니다",
              "scene": "피오나가 유족에게",
              "example": "I’m so sorry for your loss. Let me know if you need anything.",
              "exampleKo": "삼가 조의를 표해요. 필요한 거 있으면 말해 주세요."
            },
            {
              "phrase": "icebreaker",
              "meaning": "어색함을 깨는 것",
              "scene": "장례식 데이트를 농담 삼아",
              "example": "Let’s start with an icebreaker game.",
              "exampleKo": "어색함을 풀 게임부터 하죠."
            },
            {
              "phrase": "have a ball",
              "meaning": "아주 즐거운 시간을 보내다",
              "scene": "벤이 인턴 생활이 즐겁다며",
              "example": "We had a ball at the party.",
              "exampleKo": "파티에서 정말 신나게 놀았어."
            },
            {
              "phrase": "have a crush on ~",
              "meaning": "~에게 반하다",
              "scene": "회사에서 만난 사람에게 반했다며",
              "example": "I had a crush on my English teacher.",
              "exampleKo": "영어 선생님을 좋아했었어."
            },
            {
              "phrase": "on the way",
              "meaning": "(아기가) 곧 태어날",
              "scene": "피오나가 손주가 곧 태어난다며",
              "example": "They have two kids and another one on the way.",
              "exampleKo": "그들은 아이 둘에 하나가 곧 태어나."
            },
            {
              "phrase": "I look better than I feel.",
              "meaning": "보기보다 몸이 더 안 좋아",
              "scene": "아픈 매트가",
              "example": "I know I look fine, but I look better than I feel.",
              "exampleKo": "멀쩡해 보여도 사실 상태가 더 안 좋아."
            },
            {
              "phrase": "hit the road",
              "meaning": "출발하다, 떠나다",
              "scene": "아픈 페이지를 데리고 파티를 떠나며",
              "example": "It’s getting late. Let’s hit the road.",
              "exampleKo": "늦었다. 이제 출발하자."
            },
            {
              "phrase": "glass ceiling",
              "meaning": "(승진을 막는) 유리 천장",
              "scene": "엄마들이 줄스를 비꼬듯 칭찬하며",
              "example": "She broke the glass ceiling in the tech industry.",
              "exampleKo": "그녀는 테크 업계의 유리 천장을 깼어."
            },
            {
              "phrase": "have a lot on one’s shoulders",
              "meaning": "짊어진 짐이 많다",
              "scene": "매트가 줄스의 부담을 걱정하며",
              "example": "As a new manager, she has a lot on her shoulders.",
              "exampleKo": "새 매니저라 그녀는 짊어진 게 많아."
            },
            {
              "phrase": "do right by ~",
              "meaning": "~에게 도리를 다하다",
              "scene": "줄스가 모두에게 잘하려 한다며",
              "example": "I want to do right by my team.",
              "exampleKo": "우리 팀에게 도리를 다하고 싶어."
            }
          ],
          "grammar": [
            {
              "point": "I spy with my little eye ~",
              "explain": "영어권 아이들의 스무고개 놀이 — \"내 눈에 ~한 게 보여요\"",
              "example": "I spy with my little eye something red!",
              "exampleKo": "내 눈에 빨간 게 보여요!"
            },
            {
              "point": "Am I wrong that I ~?",
              "explain": "내가 ~하는 게 잘못이야? — 조심스럽게 의견을 구하기",
              "example": "Am I wrong to think this is unfair?",
              "exampleKo": "이게 불공평하다고 생각하는 게 잘못이야?"
            }
          ]
        },
        {
          "part": 12,
          "time": "약 1:32 – 1:45",
          "title": "샌프란시스코의 밤",
          "marker": "We got the day off.",
          "summary": "CEO 후보 타운센드를 만나러 간 샌프란시스코. 호텔 화재경보로 잠이 깬 줄스는 벤에게 남편의 외도를 알고 있다고 털어놓아요. 혼자 묻힐까 봐 두렵다는 줄스에게 벤은 아내 몰리 옆자리를 내주겠다며 위로해요.",
          "scenes": [
            "기내 대화: 마음에 들면 하고, 아니면 말고",
            "호텔 화재경보 — \"불길한 징조야\"",
            "벤의 아내 몰리 이야기: 42년의 결혼",
            "줄스의 고백: 매트의 외도",
            "\"나랑 몰리 옆에 묻혀도 돼요\""
          ],
          "expressions": [
            {
              "phrase": "take the rap (for ~)",
              "meaning": "(~의) 책임을 뒤집어쓰다",
              "scene": "외도를 자기 탓으로 돌리려는 줄스에게 벤이",
              "example": "Don’t take the rap for his mistake.",
              "exampleKo": "그의 실수를 네가 뒤집어쓰지 마."
            },
            {
              "phrase": "act out",
              "meaning": "(불만을) 나쁜 행동으로 표출하다",
              "scene": "남편이 자존심이 상해 엇나간 거라며",
              "example": "Kids sometimes act out when they feel ignored.",
              "exampleKo": "아이들은 무시당한다고 느끼면 엇나가기도 해."
            },
            {
              "phrase": "a lapse in judgment",
              "meaning": "일시적인 판단 착오",
              "scene": "줄스가 그냥 실수였으면 하며",
              "example": "It was a lapse in judgment. It won’t happen again.",
              "exampleKo": "판단 착오였어요. 다시는 안 그럴게요."
            },
            {
              "phrase": "give up on ~",
              "meaning": "~을 포기하다",
              "scene": "남편을 포기하고 싶지 않다며",
              "example": "Don’t give up on your dream.",
              "exampleKo": "꿈을 포기하지 마."
            },
            {
              "phrase": "a rising star",
              "meaning": "떠오르는 스타, 유망주",
              "scene": "매트가 원래 잘나가던 사람이었다며",
              "example": "She’s a rising star in the company.",
              "exampleKo": "그녀는 회사의 떠오르는 인재야."
            },
            {
              "phrase": "bow out",
              "meaning": "물러나다",
              "scene": "매트가 줄스를 위해 물러났다며",
              "example": "He decided to bow out of the race.",
              "exampleKo": "그는 경쟁에서 물러나기로 했어."
            },
            {
              "phrase": "get back on track",
              "meaning": "정상 궤도로 돌아오다",
              "scene": "새 CEO가 오면 삶이 제자리를 찾을 거라며",
              "example": "After the holidays, I need to get back on track.",
              "exampleKo": "연휴 끝났으니 다시 페이스를 찾아야 해."
            },
            {
              "phrase": "Such is life.",
              "meaning": "인생이 다 그렇지",
              "scene": "줄스가 체념하듯",
              "example": "It rained on our picnic day. Oh well, such is life.",
              "exampleKo": "소풍날 비가 왔어. 뭐, 인생이 그렇지."
            },
            {
              "phrase": "keep someone up",
              "meaning": "~을 잠 못 들게 하다",
              "scene": "혼자 묻힐까 봐 밤에 잠이 안 온다며",
              "example": "Worries about work keep me up at night.",
              "exampleKo": "일 걱정 때문에 밤에 잠이 안 와."
            }
          ],
          "grammar": [
            {
              "point": "I wish + 과거형",
              "explain": "(현재 사실과 반대로) ~라면 좋을 텐데 — 표정이 그렇게 다 드러나지 않으면 좋을 텐데",
              "example": "I wish I had more time.",
              "exampleKo": "시간이 더 있으면 좋을 텐데."
            },
            {
              "point": "as = ~하면서, ~할 때",
              "explain": "기내 방송 \"착륙을 시작하면서\" (Set 2 as)",
              "example": "Please fasten your seat belts as we start our descent.",
              "exampleKo": "착륙을 시작하오니 안전벨트를 매 주세요."
            }
          ]
        },
        {
          "part": 13,
          "time": "약 1:45 – 2:01",
          "title": "줄스의 선택",
          "marker": "Airport, please.",
          "summary": "타운센드에게 CEO 자리를 주기로 한 줄스는 다음 날 아침 벤을 찾아가요. 벤은 \"이 회사엔 당신이 필요하다\"고 진심을 전하고, 남편 매트도 잘못을 뉘우치며 줄스가 회사를 계속 이끌기를 바라요. 줄스는 결정을 바꾸고, 공원에서 태극권을 하는 벤을 찾아가요.",
          "scenes": [
            "타운센드와 악수로 결정",
            "매트: \"예전으로 돌아갈 수 있을 거야\"",
            "벤의 집에서 만난 피오나, 벤의 진심 어린 조언",
            "레이첼의 웨딩 사진, 매트의 사과",
            "공원 태극권 — \"좋은 소식이 있어요\""
          ],
          "expressions": [
            {
              "phrase": "sleep on it",
              "meaning": "하룻밤 자며 생각해 보다",
              "scene": "타운센드가 서두르지 말라며",
              "example": "You don’t have to decide now. Sleep on it.",
              "exampleKo": "지금 결정 안 해도 돼. 하룻밤 생각해 봐."
            },
            {
              "phrase": "shake hands on it",
              "meaning": "악수로 합의하다",
              "scene": "그 자리에서 고용을 결정하며",
              "example": "We shook hands on the deal.",
              "exampleKo": "우리는 악수로 거래를 확정했어."
            },
            {
              "phrase": "tiebreaker",
              "meaning": "(의견이 갈릴 때) 최종 결정권자",
              "scene": "의견이 다르면 CEO가 결정한다며",
              "example": "If we vote 2 to 2, the boss is the tiebreaker.",
              "exampleKo": "2대2로 갈리면 사장님이 최종 결정해요."
            },
            {
              "phrase": "call the shots",
              "meaning": "결정권을 쥐다",
              "scene": "다른 사람이 결정을 내려 주면 좋겠다는 줄스",
              "example": "In this house, my wife calls the shots.",
              "exampleKo": "우리 집에선 아내가 결정권자야."
            },
            {
              "phrase": "put the genie back in the bottle",
              "meaning": "(이미 벌어진 일을) 되돌리다",
              "scene": "예전으로 돌아갈 수 있을 거라며",
              "example": "Once the news is out, you can’t put the genie back in the bottle.",
              "exampleKo": "소식이 퍼지면 되돌릴 수 없어."
            },
            {
              "phrase": "add up",
              "meaning": "앞뒤가 맞다, 말이 되다",
              "scene": "회사를 포기하는 건 이치에 맞지 않다며",
              "example": "His story doesn’t add up.",
              "exampleKo": "그의 이야기는 앞뒤가 안 맞아."
            },
            {
              "phrase": "along the way",
              "meaning": "그 과정에서, 도중에",
              "scene": "매트가 어느 순간 길을 잃었다며",
              "example": "I made a lot of mistakes along the way.",
              "exampleKo": "그 과정에서 실수를 많이 했어."
            },
            {
              "phrase": "change one’s mind",
              "meaning": "마음을 바꾸다",
              "scene": "줄스가 결정을 바꾸며",
              "example": "I was going to quit, but I changed my mind.",
              "exampleKo": "그만두려 했는데 마음을 바꿨어."
            },
            {
              "phrase": "make it",
              "meaning": "해내다, 잘 헤쳐 나가다",
              "scene": "\"우린 잘 해낼 거야\"라며",
              "example": "Don’t worry. We’re going to make it.",
              "exampleKo": "걱정 마. 우린 해낼 거야."
            }
          ],
          "grammar": [
            {
              "point": "if you don’t mind me saying",
              "explain": "이런 말 해도 될지 모르겠지만 — 조심스럽게 의견을 말할 때",
              "example": "If you don’t mind me saying, you look tired.",
              "exampleKo": "이런 말 해도 될지 모르겠지만, 피곤해 보여요."
            },
            {
              "point": "It’s moments like this when ~",
              "explain": "~한 건 바로 이런 순간이다 (강조 구문)",
              "example": "It’s moments like this when you need a friend.",
              "exampleKo": "친구가 필요한 건 바로 이런 순간이야."
            }
          ]
        }
      ]
    }
  ],

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
