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

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Slider = factory();
  }
}(this, function() {
var Slider = {};

$( document ).ready(function() {
    console.log( "ready!" );
    $(".js-slider").slick({
        
        // normal options...
        infinite: false,
        
        // the magic
        responsive: [{
            
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
            
        }, {
            
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }
            
        }, {
            
            breakpoint: 300,
            settings: "unslick" // destroys slick
            
        }]
    });
});
return Slider;
}));
