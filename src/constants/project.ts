import { IProjects } from "@/types/project";

export const projects: Array<IProjects> = [
  {
    nav: {
      name: "포트폴리오",
      stack:
        "Next.js, TypeScript, Recoil, React-Query, MSW, SCSS, Vercel, Github-Actions",
      content:
        "프론트엔드 개발자로서 역량 소개를 위한 포트폴리오 프로젝트입니다. MSW를 이용한 백엔드 API 모킹과 스크롤 이벤트, 옵저버, 마우스 이벤트를 사용하여 인터렉티브한 페이지를 개발 하였습니다.",
      link: [
        {
          title: "배포 링크",
          href: "https://www.lydia-portfolio.site",
        },
        {
          title: "리포지토리",
          href: "https://github.com/KangHayeonn/lydia-portfolio",
        },
      ],
      type: "Solo",
      period: 7,
      create: "2023.12",
    },
    intro: [
      {
        title: "프로젝트 소개",
        content: [
          "프론트엔드 개발자로서 역량을 소개하기 위한 포트폴리오 프로젝트입니다. 한눈에 정보 조회가 가능하도록 section 분리를 통해 효율적인 정보 전달을 목적으로 하였습니다. 커스텀 훅을 사용하여 클릭 이벤트를 통해 스크롤 이동이 가능하도록 개발하였습니다.",
          "MSW를 도입하여 백엔드 API 모킹을 하였습니다. 스크롤 이벤트, 옵저버 마우스 이벤트 등을 도입하여 인터렉티브한 페이지 구현에 초점을 맞췄습니다.",
        ],
      },
      {
        title: "이슈 & 해결방안",
        content: [
          "타이핑 기능을 구현하기 위해 setInterval 함수를 통해 비동기 처리를 하였습니다. 문장 단위로 텍스트를 입력해주고 삭제하는 과정을 반복하기 위해서 인덱스를 기준으로한 for문을 사용하였습니다. setInterval함수가 수행되기 전에 내부 반복문이 다 돌아서 타이핑 기능이 정상 동작하지 않았습니다.",
          "setInterval은 비동기 처리가 되기 때문에 setInterval 내부에서 반복문을 직접 호출하는 것이 아닌 substring함수와 카운트를 이용해 setInterval 내부에서 분기 처리로 해결하였습니다.",
        ],
      },
      {
        title: "후기 & 교훈",
        content: [
          "타이트한 일정 내에 개발을 진행하기 위해 개발하기에 앞서 디렉터리 구조 및 개발 기능 상세를 작성하였습니다. 정해진 기능에 md를 설정하여 일정이 딜레이 되지 않도록 계획하에 진행할 수 있었습니다.",
          "이전 Next.js 개발에서 개발에만 초점을 맞췄다면 이번 프로젝트를 통해 CSR, SSR, SSG의 이해도를 높일 수 있었습니다.",
        ],
      },
    ],
    info: [
      {
        title: "구현 기능",
        content:
          "스크롤 이동, 옵저버, MSW 사용한 백엔드 API mocking, 프로그레스바",
      },
      {
        title: "기술 스택",
        content:
          "Next.js, TypeScript, Recoil, React-Query, MSW, SCSS, Vercel, Github-Actions",
      },
    ],
    mainImage: "/project/portfolio.png",
    image: [
      "/project/portfolio.png",
      "/project/portfolio.png",
      "/project/portfolio.png",
      "/project/portfolio.png",
      "/project/portfolio.png",
    ],
  },
  {
    nav: {
      name: "투바투",
      stack:
        "Next.js, TypeScript, Socket, Recoil, React-Query, Styled-component, Vercel, Github-Actions",
      content:
        "실시간 거리 기반 모임을 추천해주고 사용자의 취향에 맞게 모임을 신청하고 정산할 수 있는 서비스입니다. Web Socket을 이용하고 필터링과 무한스크롤을 이용한 검색 기능을 개발하였습니다.",
      link: [
        {
          title: "배포 링크",
          href: "https://www.topato.site",
        },
        {
          title: "리포지토리",
          href: "https://github.com/KangHayeonn/together-party-tonight-client",
        },
      ],
      type: "Team",
      period: 60,
      create: "2023.05",
    },
    intro: [
      {
        title: "프로젝트 소개",
        content: [
          "실시간 거리 기반 모임을 추천해주고 다양한 옵션을 기준으로 사용자 취향에 맞게 모임을 신청하고 정산할 수 있는 사이트입니다. Kakao Map을 이용한 지도 연동과 빠른 정보 조회를 위한 무한 스크롤과 필터링을 구현하였습니다.",
          "Web Socket을 이용하여 실시간 댓글, 채팅, 알림 기능 구현하였습니다. Web Socket을 커스텀 훅으로 만들어 실시간 모임 신청, 수락/거절, 정산이 필요한 로직에 호출하여 개발하였습니다.",
        ],
      },
      {
        title: "이슈 & 해결방안",
        content: [
          "알림 기능은 페이지와 상관없이 항상 노출되어야 합니다. 하지만 브라우저 새로고침 시 socket 연결이 종료되어 실시간 이벤트를 받을 수 없는 문제가 발생하였습니다.",
          "모든 페이지에서 사용하는 공통 컴포넌트에서 socket 재연결 시도를 위한 커스텀 훅을 호출하여 소켓을 통한 실시간 알림 기능을 구현하였습니다.",
        ],
      },
      {
        title: "후기 & 교훈",
        content: [
          "Socket을 이용한 실시간 통신을 구현하기 위해 브라우저 동작원리에 대한 깊이 있는 공부를 할 수 있었습니다. Recoil을 이용하여 전역 상태 관리를 하고 React-Query를 사용하여 캐싱과 효율적인 API 데이터 관리를 경험할 수 있었습니다.",
          "아쉬웠던 점은 Next.js를 프로젝트에 적용하는 것이 처음이라 SSR, SSG 개념에 대한 깊이 있는 이해가 없이 사용했다는 것입니다. Next.js를 다시 사용하게 된다면 pre-rendering 및 SEO 부분에 대해서도 깊이 있게 고민하며 개발하고 싶습니다.",
        ],
      },
    ],
    info: [
      {
        title: "구현 기능",
        content:
          "Web Socket을 이용한 채팅, 댓글, 실시간 알림 기능 & Kakao Map API 연동을 통해 거리/주소 기반 추천 검색 기능 & CI/CD",
      },
      {
        title: "기술 스택",
        content:
          "Next.js, TypeScript, Socket, Recoil, React-Query, Styled-component, Vercel, Github-Actions",
      },
    ],
    mainImage: "/project/topato.png",
    image: [
      "/project/topato.png",
      "/project/topato.png",
      "/project/topato.png",
      "/project/topato.png",
      "/project/topato.png",
    ],
  },
  {
    nav: {
      name: "픽플",
      stack:
        "React, TypeScript, Redux, Redux-Thunk, Redux-Toolkit, Yarn-Berry, SCSS",
      content:
        "사용자에 맞춤 옵션을 설정하여 원하는 공간을 실시간 추천/예약 해주는 서비스입니다. 기능 개발 뿐 아니라 개발 환경 초기 세팅부터 Skeleton코드 작성과 공통 컴포넌트 모듈화를 진행하였습니다.",
      link: [
        {
          title: "배포 링크",
          href: "https://pickplace.site",
        },
        {
          title: "리포지토리",
          href: "https://github.com/KangHayeonn/pickplace-client",
        },
      ],
      type: "Team",
      period: 60,
      create: "2023.05",
    },
    intro: [
      {
        title: "프로젝트 소개",
        content: [
          "사용자에 맞춤 옵션을 설정하여 원하는 공간을 실시간 추천/예약 해주는 웹사이트입니다. NAVER Map을 이용한 지도 연동과 빠른 정보 조회를 위한 무한 스크롤과 필터링을 구현하였습니다.",
          "Context API를 이용하여 모달 관리를 중앙화하여 한곳에서 관리함으로써 불필요한 props 및 코드 작성을 줄일 수 있었습니다. yarn-berry를 사용하여 초기 개발 환경 세팅을 진행하고 zero-install 배포하였습니다.",
        ],
      },
      {
        title: "이슈 & 해결방안",
        content: [
          "하나의 스터디룸의 경우, 예약 시간대 별로 예약 불가능/가능 여부를 파악해야 하는데 모든 시간대의 예약 정보를 넣어주니 DB가 너무 무거워졌습니다. 예약 시간대를 분리해서 넣게 되면 매번 전체 탐색을 하는 것이 쿼리 성능 상 비효율적이었습니다.",
          "비트 마스킹을 이용해서 비트 연산으로 기준 날짜 별 시간대마다 룸 예약 가능 시간을 결정함으로써 공간 복잡도를 줄이고 시간 복잡도는 O(1)로 개선할 수 있었습니다.",
        ],
      },
      {
        title: "후기 & 교훈",
        content: [
          "Props Drilling > Redux > Redux-toolkit의 단계적인 경험을 통해 더 효율적인 전역 상태 관리에 대해 고민할 수 있었습니다. Skeleton 코드 작성과 공통 컴포넌트 모듈화를 통해 통일화된 코드 규격을 세우고 클린 코드를 작성할 수 있었습니다.",
          "아쉬웠던 점은 프로젝트 일정이 타이트하여 Jest를 이용한 테스트 주도 개발을 진행하지 못했다는 점입니다. 하지만, Github Issue를 이용하여 상세 기능을 작성함으로써 동작 테스트를 진행하며 개발하였습니다.",
        ],
      },
    ],
    info: [
      {
        title: "구현 기능",
        content:
          "yarn-berry를 사용하여 개발 환경 초기 세팅, Skeleton 코드 작성, 공통 컴포넌트 모듈화, 회원 인증 권한 기능, 예약/결제 기능, 공간 상세 검색 기능",
      },
      {
        title: "기술 스택",
        content:
          "React, TypeScript, Redux, Redux-Thunk, Redux-Toolkit, Yarn-Berry, SCSS",
      },
    ],
    mainImage: "/project/pickplace.png",
    image: [
      "/project/pickplace.png",
      "/project/pickplace.png",
      "/project/pickplace.png",
      "/project/pickplace.png",
      "/project/pickplace.png",
    ],
  },
];
