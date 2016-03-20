
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var coffee2js = require('./coffee2js.js');

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

`;

// GET /convert/coffee2js
// POST /convert/coffee2js
router = routerHelper.addConverterAPI(router, {
    url: '/convert/coffee2js',
    from: 'CoffeeScript',
    to: 'JavaScript',
    renderer: 'coffee/coffee2js',
    converter: coffee2js,
    sampleText: sampleText
});

module.exports = router;
