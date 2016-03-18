
var express = require('express');
var router = express.Router();

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
router.get('/convert/json2yaml', function (req, res) {
    res.render('json/json2yaml', { title: 'JSON to YAML', textFrom: sampleText });
});

// POST /convert/json2yaml
// convert jsonText passed via post parameters, into yaml.
router.post('/convert/json2yaml', function (req, res) {
    var jsonText = req.body.text;
    var yamlText = json2yaml(jsonText);
    res.write(yamlText);
    res.end();
});

// GET /convert/json2cson
router.get('/convert/json2cson', function (req, res) {
    res.render('json/json2cson', { title: 'JSON to CSON', textFrom: sampleText });
});

// POST /convert/json2cson
// convert jsonText passed via post parameters, into cson.
router.post('/convert/json2cson', function (req, res) {
    var jsonText = req.body.text;
    var csonText = json2cson(jsonText);
    res.write(csonText);
    res.end();
});

// GET /format/json
router.get('/format/json', function (req, res) {
    var unreadableText = sampleText.replace(/\s+/g, '') + "\n";
    res.render('json/json2json', { title: 'JSON formatter', textFrom: unreadableText });
});

// POST /format/json
// format jsonText passed via post parameters, into pretty nice json text.
router.post('/format/json', function (req, res) {
    var jsonText = req.body.text;
    var prettyJsonText = json2json(jsonText);
    res.write(prettyJsonText);
    res.end();
});

module.exports = router;
