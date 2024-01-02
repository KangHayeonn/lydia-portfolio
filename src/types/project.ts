export interface IProjectLink {
  title: string;
  href: string;
}

export interface IProjectNav {
  name: string;
  stack: string;
  content: string;
  link: Array<IProjectLink>;
  type: string;
  period: number;
  create: string;
}

export interface IProjectIntro {
  title: string;
  content: Array<string>;
}

export interface IProjectInfo {
  title: string;
  content: string;
}

export interface IProjects {
  nav: IProjectNav;
  intro: Array<IProjectIntro>;
  info: Array<IProjectInfo>;
  mainImage: string;
  image: Array<string>;
}

export interface IProjectDetail {
  data: IProjects;
}

export interface IProjectCard {
  handleDetail: (idx?: number) => void;
}
