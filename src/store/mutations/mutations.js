import {
  STE_VIEWS_ARTICLES,
  STE_VIEWS_COLUMN,
  STE_VIEWS_READ,
  CHANGE_SYSTEM_LOADING,
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
  [CHANGE_SYSTEM_LOADING](state) {
    state.system.loading = !state.system.loading;
  },
  // 往state添加 views.article 数据
  [STE_VIEWS_ARTICLES](state, payload) {
    state.articles.status = payload.data.status;
    for (let i = 0; i < payload.data.major.length; i++) {
      state.articles.major.push(payload.data.major[i])
    }
  },
  [STE_VIEWS_COLUMN](state, payload) {
    state.column.info = payload.data.info;
    state.column.major = payload.data.major;
  },
  [STE_VIEWS_READ](state,payload){
    state.read.info =payload.data.info;
    state.read.major = payload.data.major;
  }


}
