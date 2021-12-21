import { createStore } from 'vuex';
import sponsorAdModalModule from './utils/sponsorAdModalModule';
import notificationWishlistModule from './utils/notificationWishlistModule';

export default createStore({
  state: {
    loginModal: false,
  },
  getters: {
    getLoginModal(state) {
      return state.loginModal;
    },
  },
  mutations: {
    SHOW_LOGIN_MODAL(state) {
      state.loginModal = true;
    },
    HIDE_LOGIN_MODAL(state) {
      state.loginModal = false;
    },
  },
  actions: {
    showLoginModal(context) {
      context.commit('SHOW_LOGIN_MODAL');
    },
    hideLoginModal(context) {
      context.commit('HIDE_LOGIN_MODAL');
    },
  },
  modules: { sponsorAdModalModule, notificationWishlistModule },
});
