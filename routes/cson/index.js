
var express = require('express');
var router = express.Router();

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
router.get('/convert/cson2json', function (req, res) {
    res.render('cson/cson2json', { title: 'CSON formatter', textFrom: sampleText });
});

// POST /convert/cson2json
router.post('/convert/cson2json', function (req, res) {
    var csonText = req.body.text;
    var jsonText = cson2json(csonText);
    res.write(jsonText);
    res.end();
});

// // GET /convert/cson2yaml
// router.get('/convert/cson2yaml', function (req, res) {
//     //
// });
//
// // POST /convert/cson2yaml
// router.post('/convert/cson2yaml', function (req, res) {
//     //
// });
//
// // GET /convert/cson2xml
// router.get('/convert/cson2xml', function (req, res) {
//     //
// });
//
// // POST /convert/cson2xml
// router.post('/convert/cson2xml', function (req, res) {
//     //
// });

module.exports = router;
