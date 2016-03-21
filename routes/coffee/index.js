
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var coffee2js = require('./coffee2js.js');
var coffee2es6 = require('./coffee2es6.js');

var sampleText = `
# Functions:
square = (x) -> x * x

# Objects:
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

# Splats:
race = (winner, runners...) ->
  print winner, runners

# Array comprehensions:
cubes = (math.cube num for num in list)

# Class:
class Animal
  constructor: (@name) ->

  move: (meters) ->
  alert @name + " moved #{meters}m."
`;

// GET /convert/coffee2js
// POST /convert/coffee2js
router = routerHelper.addConverterAPI(router, {
  url: '/convert/coffee2js',
  from: 'CoffeeScript',
  to: 'JavaScript',
  renderer: 'coffee/coffee2js',
  converter: coffee2js,
  sampleText: sampleText,
  deps: {
    "coffee-script": "^1.10.0"
  }
});

// GET /convert/coffee2es6
// POST /convert/coffee2es6
router = routerHelper.addConverterAPI(router, {
  url: '/convert/coffee2es6',
  from: 'CoffeeScript',
  to: 'ES6 JavaScript',
  renderer: 'coffee/coffee2es6',
  converter: coffee2es6,
  sampleText: sampleText,
  deps: {
    "decaffeinate": "^1.44.13"
  }
});

module.exports = router;
