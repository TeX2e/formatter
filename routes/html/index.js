
var express = require('express');
var router = express.Router();

var html2html = require('./html2html.js');

var sampleText = `
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <main></main>
  </body>
</html>

`;

// GET /convert/html2markdown
// POST /convert/html2markdown
// convert htmlText passed via post parameters, into markdown text.

// GET /format/html
router.get('/format/html', function (req, res) {
    var unreadableText = sampleText.replace(/\n\s*/g, '') + "\n";
    res.render('html/html2html', { title: 'HTML formatter', textFrom: unreadableText });
});

// POST /format/html
// convert a html text into pretty print html
router.post('/format/html', function (req, res) {
    var markdownText = req.body.text;
    var htmlText = html2html(markdownText);
    res.write(htmlText);
    res.end();
});

module.exports = router;
