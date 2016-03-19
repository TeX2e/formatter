
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var xml2xml = require('./xml2xml.js');
var xml2xmlmin = require('./xml2xmlmin.js');

var sampleText = `
<?xml version="1.0"?>
<catalog>
   <book id="bk101">
      <author>Gambardella, Matthew</author>
      <title>XML Developer's Guide</title>
      <genre>Computer</genre>
      <price>44.95</price>
      <publish_date>2000-10-01</publish_date>
   </book>
   <book id="bk102">
      <author>Ralls, Kim</author>
      <title>Midnight Rain</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2000-12-16</publish_date>
   </book>
</catalog>
`;

// GET /format/xml
// POST /format/xml
var unreadableText = sampleText.replace(/\n\s*/g, '') + "\n";
router = routerHelper.addConverterAPI(router, {
    url: '/format/xml',
    title: 'Pretty Print XML',
    from: 'XML',
    to: 'Pretty Print XML',
    renderer: 'xml/xml2xml',
    converter: xml2xml,
    sampleText: unreadableText
});

// GET /minify/xml
// POST /minify/xml
router = routerHelper.addConverterAPI(router, {
    url: '/minify/xml',
    title: 'Minify XML',
    from: 'XML',
    to: 'Minified XML',
    renderer: 'xml/xml2xmlmin',
    converter: xml2xmlmin,
    sampleText: sampleText
});

module.exports = router;
