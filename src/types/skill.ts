export interface IProgressCircle {
  name?: string;
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
