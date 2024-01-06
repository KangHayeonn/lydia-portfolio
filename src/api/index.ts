import axios from "axios";

const createInstance = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};

export const instance = createInstance();
