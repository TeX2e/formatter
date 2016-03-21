
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var less2css = require('./less2css.js');

var sampleText = `
@color: #4D926F;

#header {
  color: @color;
}
h2 {
  color: desaturate(@color, 10%);
}
#footer {
  color: @color + #003300;
}

p {
  font-size: 12px;
  a {
    text-decoration: none;
    &:hover {
      border-width: 1px;
    }
  }
}
`;

// GET /convert/less2css
// POST /convert/less2css
router = routerHelper.addConverterAPI(router, {
  url: '/convert/less2css',
  from: 'Less',
  to: 'CSS',
  renderer: 'less/less2css',
  converter: less2css,
  sampleText: sampleText,
  deps: {
    "less": "^2.6.1"
  }
});

module.exports = router;
