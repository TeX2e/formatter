
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
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
// POST /format/css
router = routerHelper.addConverterAPI(router, {
    url: '/format/css',
    title: 'Pretty Print CSS',
    from: 'CSS',
    to: 'Pretty Print CSS',
    renderer: 'css/css2css',
    converter: css2css,
    sampleText: sampleText,
    deps: {
        "pretty-data2": "^0.40.1"
    }
});

// GET /minify/css
// POST /minify/css
router = routerHelper.addConverterAPI(router, {
    url: '/minify/css',
    title: 'Minify CSS',
    from: 'CSS',
    to: 'Minified CSS',
    renderer: 'css/css2css',
    converter: css2css,
    sampleText: sampleText,
    deps: {
        "pretty-data2": "^0.40.1"
    }
});

module.exports = router;
