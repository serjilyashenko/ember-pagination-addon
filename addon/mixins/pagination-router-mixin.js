import Ember from 'ember';

export default Ember.Mixin.create({

  queryParams: {
    page:  {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },

  setupController(controller, model) {
    this._super(controller, model);

    // pagination-controller-mixin will check correct pagination mixin using by this flag
    controller.set('isPaginationRouteMixinConnected', true);

    const hasLimit = !!controller.get('limit');
    const hasPage  = !!controller.get('page');

    if (!hasLimit || !hasPage) {
      console.warn('>> There is no limit or page property at the controller. It seems like pagination-controller-mixin is not connected');
    }
  },

});
