
var express = require('express');
var router = express.Router();

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
router.get('/convert/yaml2json', function (req, res) {
    res.render('yaml/yaml2json', { title: 'YAML formatter', textFrom: sampleText });
});

// POST /convert/yaml2json
// convert yamlText if text is passed via post parameters.
router.post('/convert/yaml2json', function (req, res) {
    var yamlText = req.body.text;
    var jsonText = yaml2json(yamlText);
    res.write(jsonText);
    res.end();
});

module.exports = router;
