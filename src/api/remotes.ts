import { instance } from "@/api/index";

const prefix = "/api";

const Api = {
  v1GetIntro() {
    try {
      const url = `${prefix}/posts`;
      return instance.get(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Api;
