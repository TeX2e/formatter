
var express = require('express');
var router = express.Router();

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
router.get('/convert/markdown2html', function (req, res) {
    res.render('markdown/markdown2html', {
        title: 'Markdown to HTML',
        textFrom: sampleText,
        convertFrom: 'Markdown',
        convertTo: 'HTML'
    });
});

// POST /convert/markdown2html
// convert markdownText passed via post parameters, into html text.
router.post('/convert/markdown2html', function (req, res) {
    var markdownText = req.body.text;
    var htmlText = markdown2html(markdownText);
    res.write(htmlText);
    res.end();
});

// GET /view/markdown
// markdown previewer
router.get('/view/markdown', function (req, res) {
    res.render('markdown/viewer', {
        title: 'Markdown Viewer',
        textFrom: sampleText,
        viewFrom: 'Markdown',
        viewTo: 'Preview'
    });
});

// POST /view/markdown
// same to be: POST /convert/markdown2html
router.post('/view/markdown', function (req, res) {
    var markdownText = req.body.text;
    var htmlText = markdown2html(markdownText);
    res.write(htmlText);
    res.end();
});

module.exports = router;
