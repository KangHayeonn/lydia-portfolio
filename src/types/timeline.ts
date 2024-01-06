import { IconType } from "react-icons/lib";

export interface ITimelineData {
  date: string;
  icon: IconType;
  title: string;
  detail: string;
}

export interface ITimelineItems {
  data: ITimelineData;
  time: number;
  lastCheck: boolean;
}
