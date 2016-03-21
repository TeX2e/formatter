
var UglifyJS = require("uglify-js");

// minify js
function convertJStoJSMin(jsText) {
  try {
    return UglifyJS.minify(jsText, { fromString: true }).code;
  } catch (e) {
    return e.toString();
  }
}

module.exports = convertJStoJSMin;
