/////
// if you want Backbone, require 'Backbone' (this file). It will give you
// back a Backbone with all of our instructure specific patches to it.

define([

  // Get the unpatched Backbone
  'use!vendor/backbone',

  // Apply all of our patches
  'compiled/backbone-ext/Backbone.syncWithMultipart',
  'compiled/backbone-ext/Model',
  'compiled/backbone-ext/View',
  'compiled/backbone-ext/Collection/defaultUrl'

], function (Backbone) {

  // grab backbone from the global namespace,
  // make it not global, and return itself
  return Backbone.noConflict();
});
