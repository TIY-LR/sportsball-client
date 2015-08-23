import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function(identification, password) {
      this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', {
        identification,
        password
      }).then(() => {
        this.transitionTo('dashboard');
      });
    }
  }
});
