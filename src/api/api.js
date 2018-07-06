// 引入功能模块
import axios from "axios";

//axios.defaults.baseURL = 'http://localhost:3000';

const api = {
  /**
   * get article list, limit is get number, offset is index of start;
   * @param { number } limit
   * @param { number } offset
   */
  articles(limit, offset) {
    return axios.get("/v1/views/articles", {
      params: {
        limit,
        offset,
      }
    })
  },
  column(cv) {
    return axios.get("/v1/views/articles/" + cv);
  },
  read({
    cvId,
    page
  }) {
    return axios.get(`/v1/views/articles/cv${cvId}/page${page}`);
  }

}

export default api;
