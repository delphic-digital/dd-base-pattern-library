;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Fieldset = factory();
  }
}(this, function() {
'use strict';
function Fieldset() {}
return Fieldset;
}));
