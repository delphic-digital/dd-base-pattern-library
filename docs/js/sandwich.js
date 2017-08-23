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
function Fieldset() {
    var tests = document.getElementsByClassName("js-test");
    console.log('tests hi lo', tests);
}
console.log("hello, I'm in the fieldset organism! whooloo");
return Fieldset;
}));
