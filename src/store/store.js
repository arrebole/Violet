import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from "./getters";
import actions from "./actions";
import mutations from './mutations';
// modules
import ex from './modules/ex';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    EX: ex
  }
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./state', "./getters", "./actions", './mutations', './modules/ex'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newState = require('./state').default;
    const newMutations = require('./mutations').default;
    const newModuleEX = require('./modules/ex').default;
    const newGetters = require("./getters").default;
    const newActions = require("./actions").default;
    // swap in the new actions and mutations
    store.hotUpdate({
      state: newState,
      getters: newGetters,
      actions: newActions,
      mutations: newMutations,
      modules: {
        EX: newModuleEX
      }
    })
  })
}
