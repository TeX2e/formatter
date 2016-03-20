
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var sass2css = require('./sass2css.js');

var sampleText = `
$primary-color: #333

=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius:    $radius
  -ms-border-radius:     $radius
  border-radius:         $radius


main
  padding: 6px 12px

  a
    color: $primary-color
    &:hover
      text-decoration: none

.box
  +border-radius(10px)
`;

// GET /convert/sass2css
// POST /convert/sass2css
router = routerHelper.addConverterAPI(router, {
    url: '/convert/sass2css',
    from: 'Sass',
    to: 'CSS',
    renderer: 'sass/sass2css',
    converter: sass2css,
    sampleText: sampleText,
    deps: {
        "node-sass": "^3.4.2"
    }
});

module.exports = router;
