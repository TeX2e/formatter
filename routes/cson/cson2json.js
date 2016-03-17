
// var jsonlint = require("jsonlint");
var CSON = require('cson');

// convert a json text to a cson text
// return cson string
function convertCSONtoJSON(csonText) {
    var jsonObj = CSON.parse(csonText);

    if (jsonObj instanceof Error) {
        return result.stack;
    }
    return JSON.stringify(jsonObj, null, "\t");
}

module.exports = convertCSONtoJSON;
