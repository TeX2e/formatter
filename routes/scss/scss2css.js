
var scss = require('node-sass');

// convert scss to css
function convertSCSStoCSS(sassText) {
  try {
    var result = scss.renderSync({
      data: sassText,
      indentedSyntax: false // SCSS mode
    });
    return result.css.toString();
  } catch (e) {
    return e.toString();
  }
}

module.exports = convertSCSStoCSS;
