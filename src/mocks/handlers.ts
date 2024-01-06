import { http, HttpResponse } from "msw";
import { introWords, profile } from "@/constants";
import {
  frontendSkills,
  backendSkills,
  etcSkills,
  skills,
} from "@/constants/skills";
import { TimelineData } from "@/constants/timeline";
import { projects } from "@/constants/project";

const prefix = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

export const handlers = [
  // intro
  http.get(`${prefix}/intro`, () => {
    return HttpResponse.json(introWords, { status: 200 });
  }),
  // about
  http.get(`${prefix}/profile`, () => {
    return HttpResponse.json(profile, { status: 200 });
  }),
  // skill
  http.get(`${prefix}/skills`, () => {
    return HttpResponse.json(skills, { status: 200 });
  }),
  http.get(`${prefix}/skill-front`, () => {
    return HttpResponse.json(frontendSkills, { status: 200 });
  }),
  http.get(`${prefix}/skill-back`, () => {
    return HttpResponse.json(backendSkills, { status: 200 });
  }),
  http.get(`${prefix}/skill-etc`, () => {
    return HttpResponse.json(etcSkills, { status: 200 });
  }),
  // timeline
  http.get(`${prefix}/timeline`, () => {
    return HttpResponse.json(TimelineData, { status: 200 });
  }),
  // project
  http.get(`${prefix}/project`, () => {
    return HttpResponse.json(projects, { status: 200 });
  }),
];
