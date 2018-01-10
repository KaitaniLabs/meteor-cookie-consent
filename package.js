Package.describe({
  name: 'allerion:meteor-cookie-consent',
  version: '0.0.3',
  summary: 'Fork of selaias:cookie-consent package.',
  git: 'https://github.com/KaitaniLabs/meteor-cookie-consent.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use('ecmascript');
  api.use('templating@1.3.2', 'client');
  api.addFiles([
    'client/cookie_consent.html',
    'client/cookie_consent.js',
    'client/cookie_consent.css',
    'meteor-cookie-consent.js',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('allerion:meteor-cookie-consent');
  api.mainModule('meteor-cookie-consent-tests.js');
});
