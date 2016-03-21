
var less = require('less');

// convert less to css
function convertLessToCSS(lessText) {
  try {
    var cssText;
    less.render(lessText, function (e, result) {
      cssText = result.css;
    });
    return cssText;
  } catch (e) {
    return e.toString();
  }
}

module.exports = convertLessToCSS;
