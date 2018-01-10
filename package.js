Package.describe({
  name: 'allerion:meteor-cookie-consent',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use('ecmascript');
  api.mainModule('meteor-cookie-consent.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('allerion:meteor-cookie-consent');
  api.mainModule('meteor-cookie-consent-tests.js');
});
