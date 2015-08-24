import Ember from 'ember';
import DropEmptyModelMixin from '../../../mixins/drop-empty-model';
import { module, test } from 'qunit';

module('Unit | Mixin | drop empty model');

// Replace this with your real tests.
test('it works', function(assert) {
  var DropEmptyModelObject = Ember.Object.extend(DropEmptyModelMixin);
  var subject = DropEmptyModelObject.create();
  assert.ok(subject);
});
