// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCountries: [],
  },
  mutations: {
    setSelectedCountries(state, countries) {
      state.selectedCountries = countries;
    },
  },
  actions: {
    updateSelectedCountries({ commit }, countries) {
      commit('setSelectedCountries', countries);
    },
  },
  modules: {},
});
