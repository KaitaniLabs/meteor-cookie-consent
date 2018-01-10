// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-cookie-consent.js.
import { name as packageName } from "meteor/allerion:meteor-cookie-consent";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-cookie-consent - example', function (test) {
  test.equal(packageName, "meteor-cookie-consent");
});
