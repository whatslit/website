import ENV from 'whatslit/config/environment';

export default {
  name:       'auth',
  initialize: function(container, application){
    window.ENV = ENV;
  }
};