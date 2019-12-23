import Vue from "vue";
import Vuex from "vuex";
import dataService from "./modules/dataService.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    dataService
  }
});
