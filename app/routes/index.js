import Ember from 'ember';

const { service } = Ember.inject;


export default Ember.Route.extend({
	session: service('session'),


	beforeModel(transition){

		//Transition to the landing page if you're authenticated.
		if (!this.get('session').get('isAuthenticated')) {
		  console.log('Heading to landing page.');
	      transition.abort();
	      this.transitionTo('landing');
	    } else {
	      return this._super(...arguments);
	    }
	}

});