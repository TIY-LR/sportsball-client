import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    sessionRequiresAuthentication: function(err) {
      Materialize.toast('You must me logged in to see this.', 1000);

      this._super(err);
    },

    sessionAuthenticationFailed: function(err) {
      Materialize.toast(err.error_description, 1000);

      this._super(err);
    }
  }
});
