
var express = require('express');
var router = express.Router();

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
router.get('/convert/scss2css', function (req, res) {
    res.render('scss/scss2css', {
        title: 'SCSS to CSS',
        textFrom: sampleText,
        convertFrom: 'SCSS',
        convertTo: 'CSS'
    });
});

// POST /convert/scss2css
// convert markdownText passed via post parameters, into html text.
router.post('/convert/scss2css', function (req, res) {
    var sassText = req.body.text;
    var cssText = scss2css(sassText);
    res.write(cssText);
    res.end();
});

module.exports = router;
