'use strict';

//assining value of function to global module.exports
module.exports = function greet(name) {
  if(!name) throw new Error('expected name'); //if nothing passed in, throws will be caught
  //Error is a constructor
  return `Hello ${name}`; //string interpolation
};
