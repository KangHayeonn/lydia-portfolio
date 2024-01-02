import { IProjects } from "@/types/project";

export const projects: Array<IProjects> = [
  {
    nav: {
      name: "포트폴리오",
      stack:
        "Next.js, TypeScript, Recoil, React-Query, MSW, SCSS, Vercel, Github-Actions",
      content:
        "프론트엔드 개발자로서 역량 소개를 위한 포트폴리오 프로젝트입니다. MSW를 이용한 백엔드 API 모킹과 스크롤 이벤트, 옵저버, 마우스 이벤트를 사용하여 인터랙티브한 페이지를 개발 하였습니다.",
      link: [
        {
          title: "배포 링크",
          href: "-",
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
        content: [],
      },
      {
        title: "후기 & 교훈",
        content: [],
      },
    ],
    info: [
      {
        title: "구현 기능",
        content:
          "스크롤 이동, 옵저버, MSW 사용한 백엔드 API mocking, 프로그레스바, 3d card",
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
        content: [],
      },
      {
        title: "후기 & 교훈",
        content: [],
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
        content: [],
      },
      {
        title: "후기 & 교훈",
        content: [],
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
