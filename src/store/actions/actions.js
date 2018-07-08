import api from '../../api';
import {
  SET_SYSTEM_LOADING_TRUE,
  SET_SYSTEM_LOADING_FALSE,
  STE_VIEWS_ARTICLES,
  CHANGE_SYSTEM_ASIDE,
  STE_VIEWS_COLUMN,
  STE_VIEWS_READ,
  SET_SYSTEM_ASIDE_DISPLAY,
  SET_SYSTEM_ASIDE_SHOW,
  CHANGE_SYSTEM_LOGIN
} from '../mutations/mutation-types';

export default {
  // get views data to state
  changeAside(context) {
    context.commit(CHANGE_SYSTEM_ASIDE);
  },
  displayAside(context) {
    context.commit(SET_SYSTEM_ASIDE_DISPLAY);
  },
  showAside(context) {
    context.commit(SET_SYSTEM_ASIDE_SHOW);
  },
  changeLogin(context) {
    context.commit(CHANGE_SYSTEM_LOGIN);

  },
  async fetchArticles(context) {
    context.commit(SET_SYSTEM_LOADING_TRUE);
    context.commit(STE_VIEWS_ARTICLES, await api.articles(2, 0));
    context.commit(SET_SYSTEM_LOADING_FALSE);
  },
  async fetchColumn(context, cv) {
    context.commit(SET_SYSTEM_LOADING_TRUE);
    context.commit(STE_VIEWS_COLUMN, await api.column(cv));
    context.commit(SET_SYSTEM_LOADING_FALSE);
  },
  async fetchRead(context, params) {
    context.commit(SET_SYSTEM_LOADING_TRUE);
    context.commit(STE_VIEWS_READ, await api.read(params));
    context.commit(SET_SYSTEM_LOADING_FALSE);
  },

}
