import { instance } from "./base.api";

const endPoint = "/character";

export const characters = {
  getAll: function ({ page = 1 }) {
    return instance.get(endPoint, { params: { page } });
  },
  getById: function (id) {
    return instance.get(`${endPoint}/${id.id}`);
  },
};
