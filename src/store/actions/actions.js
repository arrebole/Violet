import api from '../../api';
import {
  STE_VIEWS_ARTICLES,
  CHANGE_SYSTEM_LOADING,
  CHANGE_SYSTEM_ASIDE,
  STE_VIEWS_COLUMN,
  STE_VIEWS_READ,
  SET_SYSTEM_ASIDE_DISPLAY,
  SET_SYSTEM_ASIDE_SHOW
} from '../mutations/mutation-types';

export default {
  // get views data to state
  changeAside(context){
    context.commit(CHANGE_SYSTEM_ASIDE);
  },
  displayAside(context){
    context.commit(SET_SYSTEM_ASIDE_DISPLAY);
  },
  showAside(context){
    context.commit(SET_SYSTEM_ASIDE_SHOW);
  },
  async fetchArticles(context) {
    context.commit(CHANGE_SYSTEM_LOADING);
    context.commit(STE_VIEWS_ARTICLES, await api.articles(2, 0));
    context.commit(CHANGE_SYSTEM_LOADING);
  },
  async fetchColumn(context, cv) {
    context.commit(CHANGE_SYSTEM_LOADING);
    context.commit(STE_VIEWS_COLUMN, await api.column(cv));
    context.commit(CHANGE_SYSTEM_LOADING);
  },
  async fetchRead(context, params) {
    context.commit(CHANGE_SYSTEM_LOADING);
    context.commit(STE_VIEWS_READ, await api.read(params));
    context.commit(CHANGE_SYSTEM_LOADING);
  },

}
