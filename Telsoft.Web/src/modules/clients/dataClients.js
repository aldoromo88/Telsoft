import store from '@/store';
// import axios from 'axios';


// const Mutations = {
//   ClientAdded: 'ClientAdded',
//   ClientEdited: 'ClientEdited',
//   ClientsFeeded: 'FeedClients',
//   ClientLoaded: 'ClientLoaded',
//
// };

const state = {
  Clients: [],
  CurrentClient: null,
  ClientAddedResult: null,
};

const getters = {
  Clients: s => s.Clients,
  CurrentClient: s => s.CurrentClient,
  ClientAddedResult: s => s.ClientAddedResult,
};

const actions = {
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

store.registerModule('arcLogger', {
  state,
  getters,
  actions,
  mutations,
});
