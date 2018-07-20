import {
  STE_VIEWS_ARTICLES,
  SET_SYSTEM_LOADING_TRUE,
  SET_SYSTEM_LOADING_FALSE,
  CHANGE_SYSTEM_ASIDE,
  SET_SYSTEM_ASIDE_DISPLAY,
  SET_SYSTEM_ASIDE_SHOW,
  CHANGE_SYSTEM_LOGIN
} from './mutation-types.js';

export default {
  //change aside
  [CHANGE_SYSTEM_ASIDE](state){
    state.system.aside = !state.system.aside;
  },
  [SET_SYSTEM_ASIDE_DISPLAY](state){
    state.system.aside = false;
  },
  [SET_SYSTEM_ASIDE_SHOW](state){
    state.system.aside = true;
  },
  [CHANGE_SYSTEM_LOGIN](state){
    state.system.login = true; 
  },
  // change loading 数据
  [SET_SYSTEM_LOADING_TRUE](state) {
    state.system.loading = true;
  },
  [SET_SYSTEM_LOADING_FALSE](state){
    state.system.loading = false;

  },
  // 往state添加 views.article 数据
  [STE_VIEWS_ARTICLES](state, payload) {
    // 剩余数量
    state.system.remain.articles = payload.data.remain;
    for (let i of payload.data.date) {
      state.articles.push(i);
    }
  },


}
