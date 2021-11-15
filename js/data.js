const qnaList = [
  
  {
    q: '이번 휴가에 가는 미국 여행을 위해 영어 회화 공부를 시작하기로 했다. 가장 먼저 하는 일은?',
    a: [
      { answer: '서점에 가서 영어 회화 책을 산다.', outgoing: 1 },
      { answer: '실습이 중요하지! 영어학원에 등록한다.', outgoing: 5 },
      { answer: '공부는 재밌게! 미드, 영드 정주행을 시작한다.', outgoing: 3 }
    ]
  },
  {
    q: '미국으로 홀로 여행을 왔다. 게스트하우스에서 파티가 있다고 하는데...',
    a: [
      { answer: '외국인 친구를 사귈 수 있는 절호의 기회! 당장 참여한다.', outgoing: 5 },
      { answer: '파티가 시작된 후 분위기를 보면서 고민해본다.', outgoing: 3 },
      { answer: '파티는 관심 없다. 혼자 노는 것이 편하다.', outgoing: 1 }
    ]
  },
  {
    q: '휴가 후 첫 출근날. 잠이 안 와서 새벽에 잤더니 너무 졸리다. 어제 일찍 잘걸 그랬네ㅜㅜ <br/><br/> "I ____ have gone to bed early yesterday." <br/><br/> 빈칸에 들어갈 단어는? ',
    a: [
      { answer: 'must', score: 0 },
      { answer: 'should', score: 5 },
      { answer: 'could', score: 0 }
    ]
  },
 {
    q: '다음 중 가장 갖고 싶은 영어 능력은?',
    a: [
      { answer: '유학파세요...? 원어민 뺨치는 발음', outgoing: 5 },
      { answer: '어떤 표현도 알아듣는 뻥 뚫린 귀', outgoing: 3 },
      { answer: '어떠한 실수도 용납 않는 철저한 문법 실력', outgoing: 1 }
    ]
  },
  {
    q: '캐나다에서 온 새로운 매니저 Emma씨를 출근길에 만났다. <br/><br/> "요새 일교차가 정말 커요."<br/><br/>를 영어로 말해야한다면?',
    a: [
      { answer: '이정도는 식은죽먹기지~ 머리에서 바로 떠오른다.', score: 5 },
      { answer: '완벽한 문장은 아니지만 의미는 전달할 수 있다', score: 3 },
      { answer: '음...^^; 미소를 지으며 도망간다.', score: 0 }
    ]
  },
  {
    q: 'Emma씨가 회의에 갔는데 전화가 왔다. 앗 그런데 영어로 대화를 건다.',
    a: [
      { answer: '"She has just stepped out." 당황하지 않고 Emma가 부재중임을 밝힌다.', score: 5 },
      { answer: '"Wait... She is not here." 당황했지만 할 말은 할 수 있다.', score: 3 },
      { answer: '뚜-- 실수로 전화가 끊어진 척 한다.', score: 0 }
    ]
  },
  {
    q: '퇴근 길에 Emma씨를 만났다. 그녀가 <br/><br/>"I can\'t wait for Saturday."<br/><br/>라고 한다. 무슨 말일까?',
    a: [
      { answer: '토요일을 기다릴 수가 없어요.', score: 0 },
      { answer: '토요일이 너무 기다려져요.', score: 5 },
      { answer: '전혀 모르겠다 ㅜㅜ', score: 0 }
    ]
  },
]

const infoList = [
  {
    level: '초급반',
    outgoing: 'high',
    img: '이지잉글리시.png',
    name: "김태연의 '이지 잉글리시'",
    desc: '최고의 대화문에서 뽑은 상황대화편'
  },
  {
    level: '초급반',
    outgoing: 'low',
    img: '밤10시.png',
    name: "지나쌤의 '밤 10시, 나를 돌보는 시간'",
    desc: '매일 밤, 엄마를 위한 한장의 기적'
  },
  {
    level: '중급반',
    outgoing: 'high',
    img: '5분영어회화.png',
    name: "지나쌤의 '5분 영어회화'",
    desc: '하루 한문장씩, 오늘 배워 내일 쓰는 '
  },
  {
    level: '중급반',
    outgoing: 'middle',
    img: '60세컨즈.jfif',
    name: "소피반의 '60세컨즈 잉글리쉬'",
    desc: '유튜브 구독자 26만 소피반과 함께 부담없이 쉽게 배우는!'
  },
  {
    level: '중급반',
    outgoing: 'low',
    img: '리얼영어회화.png',
    name: "제나쌤의 '리얼 영어회화'",
    desc: '50개의 상황으로 떠나는 방구석 어학연수'
  },
  {
    level: '고급반',
    outgoing: 'low',
    img: '스피킹코치.jpg',
    name: "월터의 '낫 Not 뻔한 영어",
    desc: '100개의 상황 어나더 레벨의 영어표현'
  },
  {
    level: '고급반',
    outgoing: 'high',
    img: '기죽지않는.png',
    name: "소피반의 '미국에서 기죽지 않는 쓸만한 영어'",
    desc: '25만 구독자가 선택한 인싸회화'
  }
]
