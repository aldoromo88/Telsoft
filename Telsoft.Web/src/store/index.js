import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const Mutations = {
  ServerRequestStarted: 'ServerRequestStarted',
  ServerResponseSucess: 'ServerResponseSucess',
  ServerResponseFailure: 'ServerResponseFailure',
};

export const ActionsNames = {
  Start: 'Start',
  ResponseSuccess: 'ResponseSuccess',
  ResponsFailure: 'ResponsFailure',
};

const store = new Vuex.Store({
  actions: {
    [ActionsNames.Start]({ commit }, url) {
      commit(Mutations.ServerRequestStarted, url);
    },
    [ActionsNames.ResponseSuccess]({ commit }, url) {
      commit(Mutations.ServerResponseSucess, url);
    },
    [ActionsNames.ResponsFailure]({ commit }, payload) {
      commit(Mutations.ServerResponseFailure, payload);
    },
  },
  state: {
    RequestsInProccess: new Map(),
    LastError: null,
    // Title:'',
  },
  getters: {
    IsLoading: state => state.RequestsInProccess.size > 0,
    LastError: state => state.LastError,
    // Title: state=>state.Title
  },
  mutations: {
    [Mutations.ServerRequestStarted](state, url) {
      state.RequestsInProccess.set(url, true);
    },
    [Mutations.ServerResponseSucess](state, url) {
      state.RequestsInProccess.delete(url);
      state.LastError = null;
    },
    [Mutations.ServerResponseFailure](state, payload) {
      state.RequestsInProccess.delete(payload.config.url);
      state.LastError = payload.message;
    },
    //   'TITLE_CHANGED'(state, title){
    //     state.Title = title;
    //   }
  },
  // modules: {
  //   session
  // },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
});


// Add a request interceptor
axios.interceptors.request.use((config) => {
  store.dispatch(ActionsNames.Start, config.url);
  return config;
}, (error) => {
  store.dispatch(ActionsNames.ResponsFailure, error);
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
  store.dispatch(ActionsNames.ResponseSuccess, response.config.url);
  return response.data;
}, (error) => {
  store.dispatch(ActionsNames.ResponsFailure, error);
  return Promise.reject(error);
});

export default store;
