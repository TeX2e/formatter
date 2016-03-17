
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
    var json_obj = JSON.parse(jsonText);
    return CSON.createCSONString(json_obj)
}

module.exports = convertJSONtoCSON;
