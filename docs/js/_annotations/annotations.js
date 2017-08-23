;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Annotations = factory();
  }
}(this, function() {
{
  "comments" : [
    {
      "el": "#annotation-css-selector",
      "title" : "Annotation title",
      "comment": "Annotation description"
    }
  ]
}

return Annotations;
}));
