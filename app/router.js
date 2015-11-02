import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/');
  this.route('login');
  this.route('about');
  this.route('signup');
  this.route('landing',  {path: '/fire'});
  this.route('profile');
});

export default Router;
