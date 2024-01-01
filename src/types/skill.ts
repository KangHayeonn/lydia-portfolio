export interface IProgressCircle {
  name?: string;
  type: string;
  value: number;
  open?: boolean;
}

export interface ISkillSet {
  stack: string;
  name: string;
  value: number;
  className: string;
  content: string;
}

export interface ISkills {
  type: string;
  list: Array<ISkillSet>;
  bgType: string;
}

export interface IOpenSkillSet {
  frontend: boolean;
  backend: boolean;
  etc: boolean;
}

export interface ISkillDetail {
  skillSet: string;
  name: string;
  content: string;
}
