const notificationWishlistModule = {
  namespaced: true,
  state() {
    return {
      wishlistNotification: false,
    };
  },
  getters: {
    getWishlistNotification(state) {
      return state.wishlistNotification;
    },
  },
  mutations: {
    SHOW_WISHLIST_NOTIFICATION(state) {
      state.wishlistNotification = true;
      setTimeout(() => {
        state.wishlistNotification = false;
      }, 2000);
    },
    HIDE_WISHLIST_NOTIFICATION(state) {
      state.wishlistNotification = false;
    },
  },
  actions: {
    showWishlistNotification(context) {
      context.commit('SHOW_WISHLIST_NOTIFICATION');
    },
    hideWishlistNotification(context) {
      context.commit('HIDE_WISHLIST_NOTIFICATION');
    },
  },
};

export default notificationWishlistModule;
