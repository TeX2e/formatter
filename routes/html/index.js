
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
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
// POST /convert/html2markdown
router = routerHelper.addConverterAPI(router, {
    url: '/convert/html2markdown',
    from: 'HTML',
    to: 'Markdown',
    renderer: 'html/html2markdown',
    converter: html2markdown,
    sampleText: sampleText
});

// GET /format/html
// POST /format/html
var unreadableText = sampleText.replace(/\n\s*/g, '') + "\n";
router = routerHelper.addConverterAPI(router, {
    url: '/format/html',
    title: 'Pretty Print HTML',
    from: 'HTML',
    to: 'Pretty Print HTML',
    renderer: 'html/html2html',
    converter: html2html,
    sampleText: unreadableText
});

module.exports = router;
