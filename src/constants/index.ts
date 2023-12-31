import { FaAddressCard, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiTistory } from "react-icons/si";
import { IHeaderMenu } from "@/types/header";
import { IProfile } from "@/types/profile";

export const headerMenu: Array<IHeaderMenu> = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "about",
    url: "#about",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "timeline",
    url: "#timeline",
  },
  {
    title: "project",
    url: "#project",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

export const introWords: Array<string> = [
  "안녕하세요",
  "고객의 관점에서 고민하고",
  "현재에 안주하지 않고",
  "더 나은 방식을 연구하는",
  "강하연 입니다.",
];

export const profile: Array<IProfile> = [
  {
    icon: FaAddressCard,
    type: "NAME",
    content: "강하연",
  },
  {
    icon: MdEmail,
    type: "EMAIL",
    content: "-",
  },
  {
    icon: FaGithub,
    type: "GITHUB",
    content: "-",
  },
  {
    icon: SiTistory,
    type: "BLOG",
    content: "-",
  },
];
