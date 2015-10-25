import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');

      var options = {identification, password};



      this.get('session').authenticate('authenticator:django',options)
	      .catch((reason) => {
	      	if(reason == "timeout")
	      		this.set('errorMessage', "Timeout.");
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



	      	console.log(reason);
	      });
    }
  }
});

