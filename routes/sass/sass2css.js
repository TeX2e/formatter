
var sass = require('node-sass');

// convert sass to css
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
