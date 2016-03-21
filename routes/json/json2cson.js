
var jsonlint = require("jsonlint");
var CSON = require('cson');

// convert json to cson
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
