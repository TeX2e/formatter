
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var cson2json = require('./cson2json.js');

var sampleText = `
str: "foobar"
num: 123
bool: true
array: [
  "spam"
  "ham"
]
dict:
  prop: "foo"
  prop2: 123
`;

// GET /convert/cson2json
// POST /convert/cson2json
router = routerHelper.addConverterAPI(router, {
    url: '/convert/cson2json',
    from: 'CSON',
    to: 'JSON',
    renderer: 'cson/cson2json',
    converter: cson2json,
    sampleText: sampleText
});

module.exports = router;
