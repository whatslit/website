import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['red', 'green', 'blue'];
  }
});

