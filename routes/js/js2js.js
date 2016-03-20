
var prettyJs = require('pretty-js');

// pretty print js
function convertJStoJS(jsText) {
    try {
        return prettyJs(jsText);
    } catch (e) {
        return e.toString();
    }
}

module.exports = convertJStoJS;
