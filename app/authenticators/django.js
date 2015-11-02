import Base from 'ember-simple-auth/authenticators/base';


export default Base.extend({

  init() {
    var globalConfig                   = window.ENV['ember-simple-auth'] || {};
    this.serverTokenEndpoint              = globalConfig.serverTokenEndpoint || '/api-token-auth/';
  },
  restore(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate(options) {
  	var _this = this;


  	return new Ember.RSVP.Promise(function(resolve, reject) {
  	  var data = { username: options.identification, password: options.password };
  	 Ember.$.ajax({
  	      url:         _this.serverTokenEndpoint,
  	      type:        'POST',
  	      data:        data,
  	      dataType:    'json',
  	      timeout: 3000,
  	      contentType: 'application/x-www-form-urlencoded'
  	    }).then(function(response) {
  	    Ember.run(() => {
          //ON SUCCCESS (probably the token)
  	      resolve(response);

  	    });
  	  }, function(xhr, status, error) {
  	    Ember.run(function() {
          //ON FAILURE
  	      reject(xhr.responseJSON 
  	      	|| error);
  	    });
  	  });
    });
  },
  invalidate: function() {
    function success(resolve) {
      resolve();
    }
    return new Ember.RSVP.Promise(function(resolve, reject) {
      success(resolve);
    });
  },
});