import Ember from 'ember';
import Session from 'simple-auth/session';

export default Session.extend({
  store: null,

  rawUser: Ember.computed.alias('content.secure.userName'),
  rawRoles: Ember.computed('content.secure.roles', function() {
    var roles = this.get('content.secure.roles');

    if (roles) {
      return roles.split(',');
    }
  }),

  currentUser: function() {
    var user = this.get('content.secure.userName');
    var store = this.container.lookup('store:main');
    var data = {email: this.get('rawUser'), roles: this.get('rawRoles'), };

    if (!Ember.isEmpty(user)) {
      store.pushPayload('user', data);

      return store.find('user', user.id);
    }
  }.property('content.secure.user')
});
