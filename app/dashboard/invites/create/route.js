import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('invite');
  },

  actions: {
    submit(invite) {
      invite.save().then(() => {
        this.transitionTo('dashboard.invites');
      });
    }
  }
});
