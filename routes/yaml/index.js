
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var yaml2json = require('./yaml2json.js');

var sampleText = `
str: foobar
num: 123
bool: true
array:
  - spam
  - ham
dict:
  prop: foo
  prop2: 123
`;

// GET /convert/yaml2json
// POST /convert/yaml2json
router = routerHelper.addConverterAPI(router, {
    url: '/convert/yaml2json',
    from: 'YAML',
    to: 'JSON',
    renderer: 'yaml/yaml2json',
    converter: yaml2json,
    sampleText: sampleText
});

module.exports = router;
