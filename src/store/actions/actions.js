import api from '../../api';
import {
  STE_VIEWS_ARTICLES,
  CHANGE_SYSTEM_LOADING,
  STE_VIEWS_COLUMN,
  STE_VIEWS_READ
} from '../mutations/mutation-types';

export default {
  // get views data to state
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
  }

}
