import Ember from 'ember';

const DEFAULT_PAGE  = 1;
const DEFAULT_LIMIT = 10;

export default Ember.Mixin.create({

  page:  DEFAULT_PAGE,
  limit: DEFAULT_LIMIT,

  actions: {

    setPage(page) {

      if (!this.get('isPaginationRouteMixinConnected')) {
        console.warn('>> It seems like pagination-route-mixin is not connected to the current route');
        return;
      }

      this.set('page', page);
    },

  },

});
