
var express = require('express');
var router = express.Router();

var css2css = require('./css2css.js');
var css2cssmin = require('./css2cssmin.js');

var sampleText = `
.headbg {
    margin:0 8px;
}

a:link,
a:focus {
    color: #00c;
}

a:active {
    color: red;
}

`;

// GET /format/css
router.get('/format/css', function (req, res) {
    var unreadableText = sampleText.replace(/\n\s*/g, '') + "\n";
    res.render('css/css2css', {
        title: 'Pretty Print CSS',
        textFrom: unreadableText,
        convertFrom: 'CSS',
        convertTo: 'Pretty Print CSS'
    });
});

// POST /format/css
router.post('/format/css', function (req, res) {
    var cssText = req.body.text;
    var cssminText = css2css(cssText);
    res.write(cssminText);
    res.end();
});

// GET /minify/css
router.get('/minify/css', function (req, res) {
    res.render('css/css2cssmin', {
        title: 'Minify CSS',
        textFrom: sampleText,
        convertFrom: 'CSS',
        convertTo: 'Minified CSS'
    });
});

// POST /minify/css
router.post('/minify/css', function (req, res) {
    var cssText = req.body.text;
    var cssminText = css2cssmin(cssText);
    res.write(cssminText);
    res.end();
});

module.exports = router;
