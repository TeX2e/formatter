
var CSON = require('cson');

// convert cson to json
function convertCSONtoJSON(csonText) {
  var jsonObj = CSON.parse(csonText);

  if (jsonObj instanceof Error) {
    var error = jsonObj;
    return error.toString()
      .replace(/\033\[.*?m/g, ''); // remove special charactor on terminal
  }
  return JSON.stringify(jsonObj, null, "\t");
}

module.exports = convertCSONtoJSON;
