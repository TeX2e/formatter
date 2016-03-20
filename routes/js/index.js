
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var js2coffee = require('./js2coffee.js');
var js2js = require('./js2js.js');
var js2jsmin = require('./js2jsmin.js');

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

// GET /format/js
// POST /format/js
var unreadableText = sampleText
    .replace(/\n\s*/g, '') // replace white spaces
    .replace(/,\s/g, ',')
    .replace(/\s?\{\s?/g, '{')
    .replace(/\s?\}\s?/g, '}')
    .replace(/\s?\(\s?/g, '(')
    .replace(/\s?\)\s?/g, ')') + "\n";
router = routerHelper.addConverterAPI(router, {
    url: '/format/js',
    title: 'Pretty Print JavaScript',
    from: 'JavaScript',
    to: 'Pretty Print JavaScript',
    renderer: 'js/js2js',
    converter: js2js,
    sampleText: unreadableText
});

// GET /minify/js
// POST /minify/js
router = routerHelper.addConverterAPI(router, {
    url: '/minify/js',
    title: 'Minify JavaScript',
    from: 'JavaScript',
    to: 'Minified JavaScript',
    renderer: 'js/js2jsmin',
    converter: js2jsmin,
    sampleText: sampleText
});

module.exports = router;
