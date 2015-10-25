// app/authorizers/custom.js
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
   authorize(jqXHR, requestOptions) {
    var secureData = this.get('session.data');
    var accessToken = secureData.token;
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
      jqXHR.setRequestHeader('Authorization', 'Token ' + accessToken.authenticated.token);
    }
  }
});