
var express = require('express');
var router = express.Router();

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
router.get('/convert/less2css', function (req, res) {
    res.render('less/less2css', { title: 'Less to CSS', textFrom: sampleText });
});

// POST /convert/less2css
// convert markdownText passed via post parameters, into html text.
router.post('/convert/less2css', function (req, res) {
    var lessText = req.body.text;
    var cssText = less2css(lessText);
    res.write(cssText);
    res.end();
});

module.exports = router;
