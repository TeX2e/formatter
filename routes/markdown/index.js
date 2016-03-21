
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var markdown2html = require('./markdown2html.js');

var sampleText = `

Title
======

Section
--------

### Subsection

itemize

- item1
- item2

enumerate

1. item1
2. item2

`;

// GET /convert/markdown2html
// POST /convert/markdown2html
router = routerHelper.addConverterAPI(router, {
  url: '/convert/markdown2html',
  from: 'Markdown',
  to: 'HTML',
  renderer: 'markdown/markdown2html',
  converter: markdown2html,
  sampleText: sampleText,
  deps: {
    "marked": "^0.3.5"
  }
});

// GET /view/markdown
// POST /view/markdown
router = routerHelper.addConverterAPI(router, {
  url: '/view/markdown',
  title: 'Markdown Previewer',
  from: 'Markdown',
  to: 'Preview',
  renderer: 'markdown/viewer',
  converter: markdown2html,
  sampleText: sampleText,
  deps: {
    "marked": "^0.3.5"
  }
});

module.exports = router;
