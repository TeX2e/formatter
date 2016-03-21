
var pd = require('pretty-data2').pd;

// pretty print css
function convertCSStoCSS(cssText) {
  try {
    return pd.css(cssText);
  } catch (e) {
    return e.toString();
  }
}

module.exports = convertCSStoCSS;
