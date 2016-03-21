
var pd = require('pretty-data2').pd;

// minify css
function convertCSStoCSSMin(cssText) {
  try {
    return pd.cssmin(cssText)  // minify css
      .replace(/\s\{/g, '{') // remove white space before '{'
      .replace(/:\s/g, ':')  // remove white space after ':'
      .replace(/,\s/g, ','); // remove white space after ','
  } catch (e) {
    return e.toString();
  }
}

module.exports = convertCSStoCSSMin;
