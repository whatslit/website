import Base from 'ember-simple-auth/authenticators/base';


export default Base.extend({

  init() {
    var globalConfig                   = window.ENV['ember-simple-auth'] || {};
    this.serverTokenEndpoint           = globalConfig.serverTokenEndpoint || '/api-token-auth/';
  },
  restore(data) {

  },
  authenticate(options) {
  	console.log(options.password);
  	console.log(this.serverTokenEndpoint);
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
	    Ember.run(function() {
	      resolve(response);
	    });
	  }, function(xhr, status, error) {
	    Ember.run(function() {
	      reject(xhr.responseJSON 
	      	|| error);
	    });
	  });
    });
  },
  invalidate: function() {
    Ember.$.ajax({
      type: "POST",
      url: 'http://192.168.1.7:5000/logout/',
      contentType: 'application/json;charset=utf-8',
      dataType: 'json',
    });

    return Ember.RSVP.resolve();
  },
});