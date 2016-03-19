
var express = require('express');
var router = express.Router();

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
router.get('/convert/sass2css', function (req, res) {
    res.render('sass/sass2css', {
        title: 'Sass to CSS',
        textFrom: sampleText,
        convertFrom: 'Sass',
        convertTo: 'CSS'
    });
});

// POST /convert/sass2css
// convert markdownText passed via post parameters, into html text.
router.post('/convert/sass2css', function (req, res) {
    var sassText = req.body.text;
    var cssText = sass2css(sassText);
    res.write(cssText);
    res.end();
});

module.exports = router;
