# Delphic Digital Base Pattern Library

_Not official (yet) - this is just an experiment for now._
This here is a styleguide that can serve as the base for future projects, hence the project-agnostic styles. Started from the [gulp version](https://github.com/pattern-lab/edition-node-gulp) of [Pattern Lab](http://patternlab.io/). I'd recommend reading their [docs](http://patternlab.io/docs/index.html) before adding anything to this, it'll make it all make more sense!

### Commands
Set up and run a local copy of the project:
```sh
$ npm install
$ npm start
```

### Components

 - Use BEM classes
 - Think about accessibility

### Utility libraries

Each component should aim to have the following:

 - [ ] Be accessible 
 - [ ] Be responsive
 - [ ] Be easy to implement
 - [ ] Be easy to modify (a lot, we know what the designers are like)
 - [ ] Have good browser support (back to ... ? ie8?)

These would be nice to haves:

 - [ ] Do things in a modern way (ie use es6, easy to create multiple instances, extendible)
 - [ ] Have no dependencies (ie not requiring a specific version of jQuery) 
 - [ ] Be lightweight
 - [ ] Have good documentation
 - [ ] Be tested
  
These are the utility libraries we should aim to have worked out:

 - [ ] Form validation (Parsley / jQuery validate / validatr)
 - [ ] Modal (micromodal, )
 - [ ] Slider (slick, owl, )
 - [ ] Accordion
 - [ ] Jawbone 


Go through and pick out, here's a good resource (note there are competitors included within this, we'll need to make a decision on which to use)
https://syntax.fm/show/009/dang-that-s-handy-javascript-utility-libraries

### Updating / modernizing components

 - Use PRs
 - Write up a small analysis (how is it better than the current, what are it's cons, have you worked up an example - eg in codepen)
 - Team lunch chat to kick off replacing it.