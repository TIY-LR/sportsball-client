import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {path: '/'}, function() {
    this.route('invites', function() {
      this.route('create');
    });
  });

  this.route('login');
});

export default Router;
