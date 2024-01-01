import { ISkillSet, ISkills } from "@/types/skill";

export const RADIUS = 54;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const frontendSkills: Array<ISkillSet> = [
  {
    stack: "frontend",
    name: "React",
    value: 80,
    className: "bg-react",
    content: "재사용이 가능한 컴포넌트 단위로 개발하고 CSR을 경험해 봤어요.",
  },
  {
    stack: "frontend",
    name: "Nextjs",
    value: 70,
    className: "bg-next",
    content: "SEO를 위해 SSR과 SSG를 경험해 봤어요.",
  },
  {
    stack: "frontend",
    name: "TypeScript",
    value: 70,
    className: "bg-typescript",
    content:
      "인터페이스를 이용한 엄격한 타입 체크로 서비스의 안정성을 높였어요.",
  },
  {
    stack: "frontend",
    name: "Redux",
    value: 60,
    className: "bg-redux",
    content: "Redux, Redux Toolkit을 사용하여 전역으로 상태관리를 해봤어요.",
  },
  {
    stack: "frontend",
    name: "Recoil",
    value: 70,
    className: "bg-recoil",
    content: "Recoil을 사용하여 전역으로 상태관리를 해봤어요.",
  },
  {
    stack: "frontend",
    name: "React-query",
    value: 50,
    className: "bg-query",
    content:
      "api 비동기 처리와 에러 핸들링을 경험하고 무한 스크롤을 구현해 봤어요.",
  },
  {
    stack: "frontend",
    name: "Emotion",
    value: 60,
    className: "bg-emotion",
    content: "Emotion을 사용해 스타일을 적용해 봤어요.",
  },
  {
    stack: "frontend",
    name: "Vue",
    value: 80,
    className: "bg-vue",
    content:
      "vuex로 전역 상태 관리를 하고 navigation guard, interceptor, 코드 스플리팅 경험해 봤어요.",
  },
];

export const backendSkills: Array<ISkillSet> = [
  {
    stack: "backend",
    name: "Java",
    value: 70,
    className: "bg-java",
    content: "JWT를 이용해 기능 개발을 하고 api 서버 구축 경험을 해봤어요.",
  },
  {
    stack: "backend",
    name: "MySQL",
    value: 50,
    className: "bg-mysql",
    content: "MySQL DB를 경험하고 인덱싱을 사용해 성능 개선을 해봤어요.",
  },
];

export const etcSkills: Array<ISkillSet> = [
  {
    stack: "etc",
    name: "Github",
    value: 95,
    className: "bg-github",
    content:
      "Git Flow 전략을 통해 branch를 관리하고 코드 리뷰를 통해 협업을 진행해 봤어요. \n Github issue, project, pr을 자유자재로 사용 가능해요.",
  },
  {
    stack: "etc",
    name: "Github Actions",
    value: 80,
    className: "bg-github-actions",
    content: "aws, vercel과 연동하여 자동 배포를 경험해 봤어요.",
  },
  {
    stack: "etc",
    name: "Vercel",
    value: 60,
    className: "bg-vercel",
    content: "Vercel을 사용하여 Next.js 배포를 해봤어요.",
  },
  {
    stack: "etc",
    name: "AWS",
    value: 40,
    className: "bg-aws",
    content: "AWS로 EC2, S3 배포를 해봤어요.",
  },
];

export const skills: Array<ISkills> = [
  {
    type: "frontend",
    list: frontendSkills,
    bgType: "bg-frontend",
  },
  {
    type: "backend",
    list: backendSkills,
    bgType: "bg-backend",
  },
  {
    type: "etc",
    list: etcSkills,
    bgType: "bg-etc",
  },
];
