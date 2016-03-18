
var express = require('express');
var router = express.Router();

var html2html = require('./html2html.js');
var html2markdown = require('./html2markdown.js');

var sampleText = `
<html>
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <h2>Section</h2>
    itemize
    <ul>
      <li>item1</li>
      <li>item2</li>
    </ul>
    enumerate
    <ol>
      <li>item1</li>
      <li>item2</li>
    </ol>
    code
    <pre><code>alert('hello!');</code></pre>
  </body>
</html>
`;

// GET /convert/html2markdown
router.get('/convert/html2markdown', function (req, res) {
    res.render('html/html2markdown', { title: 'HTML to Markdown', textFrom: sampleText });
});

// POST /convert/html2markdown
// convert a html text passed via post parameters, into markdown text.
router.post('/convert/html2markdown', function (req, res) {
    var htmlText = req.body.text;
    var markdownText = html2markdown(htmlText);
    res.write(markdownText);
    res.end();
});

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
