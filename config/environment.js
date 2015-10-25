/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'whatslit',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
     contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      'font-src': "'self' data: use.typekit.net",
      'connect-src': "'self' 192.168.1.7 api.whatslit.io  192.168.1.7:5000 localhost:5000", //Questionable?
      'img-src': "'self' www.facebook.com ",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    },
  };

  if (environment === 'landev') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
      ENV.APP.API_HOST = 'http://192.168.1.7:5000';
      ENV['ember-simple-auth'] = {
        authorizer: 'authorizer:django',
        serverTokenEndpoint: 'http://192.168.1.7:5000/api-token-auth/',
        crossOriginWhitelist: ['http://192.168.1.7:5000']
      };
  }

  if(environment === 'development'){
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
      ENV.APP.API_HOST = 'http://localhost:5000';
      ENV['ember-simple-auth'] = {
        authorizer: 'authorizer:django',
        serverTokenEndpoint: 'http://localhost:5000/api-token-auth/',
        crossOriginWhitelist: ['http://localhost:5000']
      };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }


  if (environment === 'production') {
    ENV.APP.API_HOST = 'http://api.whatslit.io';
    ENV['ember-simple-auth'] = {
      authorizer: 'authorizer:django',
      serverTokenEndpoint: 'http://api.whatslit.io/api-token-auth/',
      crossOriginWhitelist: ['http://api.whatslit.io']
    };
  }

  return ENV;
};
