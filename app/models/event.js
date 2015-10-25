import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('user'),
  name: DS.attr('string'),
  event_type: DS.attr('string'),
  was_remove: DS.attr('boolean', { defaultValue: false}),
  time_posted: DS.attr('date'),
  description: DS.attr('description'),
  //comments: DS.
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  score: DS.attr('number'),
});
