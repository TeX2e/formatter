
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var scss2css = require('./scss2css.js');

var sampleText = `
$primary-color: #333;

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

main {
  padding: 6px 12px;

  a {
    color: $primary-color;
    &:hover {
      text-decoration: none;
    }
  }
}

.box {
  @include border-radius(10px);
}
`;

// GET /convert/scss2css
// POST /convert/scss2css
router = routerHelper.addConverterAPI(router, {
    url: '/convert/scss2css',
    from: 'SCSS',
    to: 'CSS',
    renderer: 'scss/scss2css',
    converter: scss2css,
    sampleText: sampleText,
    deps: {
        "node-sass": "^3.4.2"
    }
});

module.exports = router;
