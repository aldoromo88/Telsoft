import axios from 'axios';
import store from '@/store';


export const Mutations = {
  ClientAdded: 'ClientAdded',
  ClientEdited: 'ClientEdited',
  ClientsFeeded: 'FeedClients',
  ClientLoaded: 'ClientLoaded',
};

export const ActionsNames = {
  Search: 'Clients-Search',
};

const state = {
  SearchResult: null,
  CurrentClient: null,
  ClientAddedResult: null,
};

export const getters = {
  SearchResult: s => s.SearchResult,
  CurrentClient: s => s.CurrentClient,
  ClientAddedResult: s => s.ClientAddedResult,
};

const actions = {
  [ActionsNames.Search]({ commit }, searchParams) {
    axios.post('api/clients/search', searchParams)
      .then((res) => {
        commit(Mutations.ClientsFeeded, res);
      });
  },
  // Add({ commit }, client) {
  //   // axios.get('/api/hello')
  //   //   .then((res) => {
  //   //     this.msg = res.data.message;
  //   //   })
  //   // .catch(ex => console.log(ex));
  //
  //   commit(Mutations.ClientAdded, client);
  // },
  // Edit({ commit }, client) {
  //   commit(Mutations.ClientEdited, client);
  // },
  // FeedClients({ commit }, filter, page, size) {
  //   commit(Mutations.ClientsFeeded);
  // },
};

const mutations = {
  [Mutations.ClientsFeeded](s, payload) {
    s.SearchResult = payload;
  },
  // [NOTIFICATION_ADDED](state, notification) {
  //   state.Notifications.push(notification);
  // },
  // [NOTIFICATION_DISMISSED](state, rawNotification) {
  //   const i = state.Notifications.map(n => n.Raw).indexOf(rawNotification);
  //   if (i == -1) {
  //     return;
  //   }
  //
  //   clearTimeout(state.Notifications[i].TimeOut);
  //
  //   state.Notifications.splice(i, 1);
  // },
};

store.registerModule('clients', {
  state,
  getters,
  actions,
  mutations,
});

export default store;
