// app/authorizers/custom.js
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    jqXHR.setRequestHeader('Cookie', '1234lkj1sdfguihsidfugh');
  }
});