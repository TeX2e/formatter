
var pretty = require('pretty');

// pretty print html
function convertHTMLtoHTML(htmlText) {
  try {
    return pretty(htmlText);
  } catch (e) {
    return e.toString();
  }
}

module.exports = convertHTMLtoHTML;
