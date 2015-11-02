import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  /* Actions for the login form */
  actions: {
  	/* Authenticates the user */
    authenticate() {
      var data = this.getProperties('username', 'password');

      this.get('session').authenticate('authenticator:django', {
			identification: data.username,
			password: data.password
		}).then(() => { //ON SUCCESS
      		//Clear error messages.
  			this.set('loginError', null);
			this.set('passwordError', null);
			this.set('errorMessages', null);

      	}).catch((reason) => { //ON ERROR

	      	if(reason == "timeout")
	      		this.set('errorMessages', ["Connection to server timed out! ABORT."]);
	      	else{ //In the case that a legitmate error has been received.
      			this.set('loginError', null);
				this.set('passwordError', null);
				this.set('errorMessages', null);

	      		if(reason.username)
	      			this.set('loginError', reason.username[0]);

	      		if(reason.password)
	      			this.set('passwordError', reason.password[0]);
	
	      		if(reason.non_field_errors)
	      			this.set('errorMessages', reason.non_field_errors);
	      		
	      	}
	      });
    }
  }
});

