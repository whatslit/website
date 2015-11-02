import Ember from 'ember';

export default Ember.Controller.extend({
	/*
	 * THe ember session.
	 */
	session: Ember.inject.service('session'),

	/* Initializes the api user endpoint */
  	init() {
	    this.apiUserEndpoint = window.ENV.APP.ENDPOINTS.user;
    },

    /* The actions for the controller */
	actions:{
		/*
		 * Registers a user by making a POST request to the API.
		 */
		register(){
			var _this = this;
			var data = this.getProperties(
				"username", "email", "password");
			data.events = [];

			//Send request.
			Ember.$.ajax({
	  	    	url:         _this.apiUserEndpoint,
	  	    	type:        'POST',
	  	    	data:        data,
	  	    	dataType:    'json',
	  	    	timeout: 3000,
	  	    	contentType: 'application/x-www-form-urlencoded'
	  	    }).then(
	  	    	( resp, textStatus, jqXHR ) => {
					_this.get('session').authenticate('authenticator:django', {
						identification: data.username,
						password: data.password
					});
	  	    	},
	  	    	( jqXHR, textStatus, errorThrown ) => {
	  	    		var reason = jqXHR.responseJSON || errorThrown;

	  	    		//SET ERROR TEXTS!
	  	    		if(reason == "timeout")
			      		this.set('errorMessages', ["Connection to server timed out! ABORT."]);
			      	else{ //In the case that a legitmate error has been received.
		      			this.set('usernameError', null);
		      			this.set('emailError', null);
						this.set('passwordError', null);
						this.set('errorMessages', null);

			      		if(reason.username)
			      			this.set('usernameError', reason.username[0]);

			      		if(reason.email)
			      			this.set('emailError', reason.email[0]);

			      		if(reason.password)
			      			this.set('passwordError', reason.password[0]);
			
			      		if(reason.non_field_errors)
			      			this.set('errorMessages', reason.non_field_errors);
      				}

	  	    	}
	  	    );
		}
	}
});
