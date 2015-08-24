import DS from 'ember-data';
import config from 'sportsball-client/config/environment';

export default DS.RESTAdapter.extend({
  host: config.hostName
});
