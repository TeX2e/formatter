
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var json2yaml = require('./json2yaml.js');
var json2cson = require('./json2cson.js');
var json2json = require('./json2json.js');

var sampleText = `
{
  "str": "foobar",
  "num": 123,
  "bool": true,
  "array": [
      "spam",
      "ham"
  ],
  "dict": {
    "prop": "foo",
    "prop2": 123
  }
}
`;

// GET /convert/json2yaml
// POST /convert/json2yaml
router = routerHelper.addConverterAPI(router, {
    url: '/convert/json2yaml',
    from: 'JSON',
    to: 'YAML',
    renderer: 'json/json2yaml',
    converter: json2yaml,
    sampleText: sampleText
});

// GET /convert/json2cson
// POST /convert/json2cson
router = routerHelper.addConverterAPI(router, {
    url: '/convert/json2cson',
    from: 'JSON',
    to: 'CSON',
    renderer: 'json/json2cson',
    converter: json2cson,
    sampleText: sampleText
});

// GET /format/json
// POST /format/json
var unreadableText = sampleText.replace(/\s+/g, '') + "\n";
router = routerHelper.addConverterAPI(router, {
    url: '/format/json',
    from: 'JSON',
    to: 'Pretty Print JSON',
    renderer: 'json/json2json',
    converter: json2json,
    sampleText: unreadableText
});

module.exports = router;
