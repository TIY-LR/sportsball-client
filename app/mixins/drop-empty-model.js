import Ember from 'ember';

export default Ember.Mixin.create({
  dropEmptyModel: Ember.on('deactivate', function() {
    var model = Ember.get(this, 'controller.model');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  })
});
