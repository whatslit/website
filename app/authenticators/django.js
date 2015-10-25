import Base from 'ember-simple-auth/authenticators/base';


export default Base.extend({
  restore(data) {

  },
  authenticate(options) {
	return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: "POST",
        url: 'http://192.168.1.7:5000/api-auth-token',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({
          username: options.identification,
          password: options.password
        })
      }).then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr, status, error) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },
  invalidate(data) {

  }
});