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
    level: '고급반',
    outgoing: 'high',
    img: '이지잉글리시.png',
    name: "김태연의 <br/>'이지 잉글리시'",
    url: "http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024799",
    desc: `60개국이 넘는 국가들을 직접 발로 뛰고 여행하며 영어를 쓰는 많은 여행자들과 
      다양한 상황에서 나누는 대화와 에피소드들을 모으고 정리하여 
      수많은 상황과 일상생활 속에서 꼭 필요한 내용들을 대화문에 담아 완성된 책입니다. 
      뿐만 아니라, 영화, 미드, 시트콤 등을 수없이 보고 메모하고 대화문을 만들어냈습니다.`
  },
  {
    level: '초급반',
    outgoing: 'low',
    img: '밤10시.png',
    url : "http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024811",
    name: "지나쌤의 <br/>'밤 10시, 나를 돌보는 시간'",
    desc: `밤 10시, 바쁜 일상과 육아에 지쳐 하루 일과를 마무리하고 쉬고 싶은 시간이기도 
          나의 부족함과 목마름을 채울 수 있는 시간이기도 하다. 
          밤 10시, 나를 돌보는 시간》은 이 시간을 이용한 100일간의 영어 공부를 제안합니다.`
  },
  {
    level: '중급반',
    outgoing: 'high',
    img: '5분영어회화.png',
    name: "지나쌤의 <br/>'5분 영어회화'",
    url : "http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024812",
    desc: `‘네이티브가 매일 쓰는 영어 표현’부터 ‘직역하면 안 되는 영어’, ‘콩글리시 바로잡기’까지 
        네이티브가 밥 먹듯이 매일 쓰는 영어회화 표현을 딱 5분만 투자해서 외워 봅시다. 
        지나쌤의 친절한 설명으로 이해도 쏙쏙되어요.`
  },
  {
    level: '초급반',
    outgoing: 'high',
    img: '60세컨즈.jfif',
    name: "소피반의 <br/>'60세컨즈 잉글리쉬'",
    url: "http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024813",
    desc: `저자 소피반이 ‘한국인들에게 간단하지만 꼭 필요한 표현으로는 무엇이 있을까?’라는 고민을 통해 만든 콘텐츠를 기반으로
한국인이 실생활에서 가장 많이 하는 말 100개를 엄선하여 영어로 서슴없이 말할 수 있도록 학습하는 도서입니다. `
  },
  {
    level: '중급반',
    outgoing: 'low',
    img: '리얼영어회화.png',
    name: "제나쌤의 <br/>'리얼 영어회화'",
    url : "http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024814",
    desc: `생활 밀착형 50개의 상황으로 떠나는 방구석 어학 연수로 
        어디에 가든, 누굴 만나든 통하는 ‘진짜’ 영어 대화가 가능해집니다.
        당장 외국에 나가지 않더라도 어디서 누굴 만나도 바로 쓸 수 있는 생활 초 밀착형 표현들을 익혀 
        누굴 만나도 자신 있게 대화가 통하는 ‘영어 인싸’가 될 수 있습니다!`
  },
  {
    level: '중급반',
    outgoing: 'middle',
    img: '스피킹코치.jpg',
    name: "월터의 <br/>'낫 Not 뻔한 영어",
    url: "http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024816",
    desc: `우리가 실생활에서 뻔하게 마주하는 상황 속 누구나 다 아는 표현 말고 어나더 레벨의 영어 회화 표현을 담은 책입니다. 
          Native의 입과 생각을 빌려 매일 똑같이 쓰는 지루한 표현에서 탈피해 봅시다.`
  },
  {
    level: '고급반',
    outgoing: 'high',
    img: '기죽지않는.png',
    name: "소피반의 <br/>'미국에서 기죽지 않는 쓸만한 영어'",
    url: "http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024817",
    desc: `20만 명에 가까운 구독자를 보유한 영어 교육 유튜브 채널 Sophie Ban에서 현재 인기리에 연재 중인 ‘쓸만한 영어’를 그대로 수록한 도서로서,
 수많은 구독자들이 정말 ‘배울 만한 가치가 있는 영어 학습 콘텐츠’로서 선택한 검증된 내용의 영어 학습서입니다. 
 저자가 미국에서 직접 온몸으로 부딪히며 익힌 제대로 써먹을 수 있는 영어, 즉 ‘미국에서 정말 통할 수 있는 제대로 된 100% 현실 영어’를 배울 수 있습니다.`
  }
]
