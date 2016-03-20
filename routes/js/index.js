
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var js2coffee = require('./js2coffee.js');

var sampleText = `

function listen (el, event, handler) {
  if (el.addEventListener) {
    return el.addEventListener(event, handler);
  } else {
    return el.attachEvent("on" + event, function() {
      return handler.call(el);
    });
  }
}
`;

// GET /convert/js2coffee
// POST /convert/js2coffee
router = routerHelper.addConverterAPI(router, {
    url: '/convert/js2coffee',
    from: 'JavaScript',
    to: 'CoffeeScript',
    renderer: 'js/js2coffee',
    converter: js2coffee,
    sampleText: sampleText
});

module.exports = router;
