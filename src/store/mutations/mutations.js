import {
  STE_VIEWS_ARTICLES,
  STE_VIEWS_COLUMN,
  STE_VIEWS_READ,
  CHANGE_SYSTEM_LOADING,
} from './mutation-types.js';

export default {
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
