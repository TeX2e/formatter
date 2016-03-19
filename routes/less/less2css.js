
var less = require('less');

// convert a less text to a css text
// return css string
function convertSassToCSS(lessText) {
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

module.exports = convertSassToCSS;
