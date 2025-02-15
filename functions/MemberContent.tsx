const MemberContent: {[key: string]: any} = {
  min: {
    name: "이민",
    position: "Co-Founder/CEO",
    description:
      "밸런스히어로(Series D), 에어스메디컬(Series B)와 같은 폭발적으로 성장하는 스타트업에서의 리딩 경험이 풍부하며 기후 문제를 비즈니스로 해결하는 것에 관심이 많습니다.",
    pic: "/images/members/min.jpg",
    pic_square: "/images/members/min_square.jpg",
  },
  jonghoh: {
    name: "이종호",
    position: "Co-Founder/CTO",
    description:
      "서울대학교 어드밴스드 에너지 시스템 연구실에서 LCA 연구 및 Machine Learning 석·박사 통합과정 중이며 모든 탄소를 과학적으로 분석해내고 줄여나가고 싶습니다.",
    pic: "/images/members/jonghoh.jpg",
    pic_square: "/images/members/jonghoh_square.jpg",
  },
  prof: {
    name: "송한호",
    position: "Co-Founder/Advisor",
    description:
      "서울대학교 기계공학과 교수이며 자동차 전문가로서 LCA 연구를 10년 넘게 수행해왔습니다.\n탄소중립연구원을 통해 모든 탄소의 데이터화를 꿈꾸고 있습니다.",
    pic: "/images/members/prof.jpg",
    pic_square: "/images/members/prof_square.jpg",
  },
  hyeonseo: {
    name: "유현서",
    position: "Research Scientist",
    description:
      "서울대학교 화학생물공학부 및 글로벌환경경영 학사 과정 중입니다. 배출량 산정 및 LCA 분석을 진행하며, 지속가능한 순환경제를 위해 고민하며 도전하고 있습니다.",
    pic: "/images/members/hyeonseo.jpg",
    pic_square: "/images/members/hyeonseo_square.jpg",
  },
  yoondeok: {
    name: "김윤덕",
    position: "Software Developer",
    description:
      "고객들에게 최고의 경험과 가치를 전달하는 소프트웨어를 만들기 위해 연구하는 소프트웨어 개발자입니다.",
    pic: "/images/members/yoondeok.jpg",
    pic_square: "/images/members/yoondeok_square.jpg",
  },
  kyunghoh: {
    name: "안경호",
    position: "Software Developer",
    description:
      "웹, 모바일, 서버 등 다양한 IT 개발 경험을 바탕으로 기후 변화와 탄소 중립 해결을 위한 클라우드 SaaS를 만들어가는 개발자입니다.",
    pic: "/images/members/kyunghoh.jpg",
    pic_square: "/images/members/kyunghoh_square.jpg",
  },
  jeongyun: {
    name: "최정윤",
    position: "Software Developer",
    description:
      "모두가 편리하게 탄소 관리를 할 수 있는 소프트웨어를 만들기 위해, 꾸준히 성장하는 프론트엔드 개발자 입니다.",
    pic: "/images/members/jeongyun.jpg",
    pic_square: "/images/members/jeongyun_square.jpg",
  },
  jihyung: {
    name: "이지형",
    position: "Software Developer",
    description:
      "녹색 미래를 꿈꾸며 모두가 손쉽게 탄소 중립을 실천할 수 있도록 돕는 프론트엔드 개발자입니다.",
    pic: "/images/members/jihyung.jpg",
    pic_square: "/images/members/jihyung_square.jpg",
  },
  hyelim: {
    name: "박혜림",
    position: "UX/UI Designer",
    description:
      "UX 관점에서 탄소 중립을 위한 서비스를 기획하고, 이용자에게 편리한 UI를 제공하고자 하는 목표를 가진 UX/UI 디자이너 입니다.",
    pic: "/images/members/hyelim.jpg",
    pic_square: "/images/members/hyelim_square.jpg",
  },
};

export default MemberContent;

export type MemberType = {
  name: string;
  position: string;
  description: string;
  pic: string;
  pic_square: string;
};
