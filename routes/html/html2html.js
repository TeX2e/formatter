
var pretty = require('pretty');

// convert a html text to a html text to pretty print
// return html string
function convertHTMLtoHTML(htmlText) {
    return pretty(htmlText);
}

module.exports = convertHTMLtoHTML;
