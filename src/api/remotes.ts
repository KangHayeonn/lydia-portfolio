import { instance } from "@/api/index";

const prefix = "/api";

const Api = {
  v1GetIntro() {
    try {
      const url = `${prefix}/intro`;
      return instance.get(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  v1GetProfile() {
    try {
      const url = `${prefix}/profile`;
      return instance.get(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  v1GetSkills() {
    try {
      const url = `${prefix}/skills`;
      return instance.get(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  v1GetFrontendSkill() {
    try {
      const url = `${prefix}/skill-front`;
      return instance.get(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  v1GetBackendSkill() {
    try {
      const url = `${prefix}/skill-back`;
      return instance.get(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  v1GetEtcSkill() {
    try {
      const url = `${prefix}/skill-etc`;
      return instance.get(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  v1GetTimeLine() {
    try {
      const url = `${prefix}/timeline`;
      return instance.get(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  v1GetProject() {
    try {
      const url = `${prefix}/project`;
      return instance.get(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Api;
