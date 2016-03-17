
var jsonlint = require("jsonlint");
var CSON = require('cson');

// convert a json text to a cson text
// return cson string
function convertJSONtoCSON(jsonText) {
    try {
        jsonlint.parse(jsonText);
    } catch (e) {
        return e.toString();
    }
    var jsonObj = JSON.parse(jsonText);
    return CSON.createCSONString(jsonObj)
}

module.exports = convertJSONtoCSON;
