const sponsorAdModalModule = {
  namespaced: true,
  state() {
    return {
      sponsorModal: false,
      wishlistFeedback: false,
    };
  },
  getters: {
    getSponsorModal(state) {
      return state.sponsorModal;
    },
    getWishlistFeedback(state) {
      return state.wishlistFeedback;
    },
  },
  mutations: {
    SHOW_SPONSOR_MODAL(state) {
      state.sponsorModal = true;
    },
    HIDE_SPONSOR_MODAL(state) {
      state.sponsorModal = false;
    },
    SHOW_WISHLIST_FEEDBACK(state) {
      state.wishlistFeedback = true;
      state.sponsorModal = false;
      setTimeout(() => {
        state.wishlistFeedback = false;
      }, 2000);
    },
    HIDE_WISHLIST_FEEDBACK(state) {
      state.wishlistFeedback = false;
    },
  },
  actions: {
    showSponsorModal(context) {
      context.commit('SHOW_SPONSOR_MODAL');
    },
    hideSponsorModal(context) {
      context.commit('HIDE_SPONSOR_MODAL');
    },
    showWishlistFeedback(context) {
      context.commit('SHOW_WISHLIST_FEEDBACK');
    },
    hideWishlistFeedback(context) {
      context.commit('HIDE_WISHLIST_FEEDBACK');
    },
  },
};

export default sponsorAdModalModule;
