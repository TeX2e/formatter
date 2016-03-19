
var sass = require('node-sass');

// convert a sass text to a css text
// return css string
function convertSassToCSS(sassText) {
    try {
        var result = sass.renderSync({
            data: sassText,
            indentedSyntax: true // Sass mode
        });
        return result.css.toString();
    } catch (e) {
        return e.toString();
    }
}

module.exports = convertSassToCSS;
