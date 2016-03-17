
var YAML = require('yamljs');

// convert a yaml text to a json text
// return json string
function convertYAMLtoJSON(yamlText) {
    var jsonObj;
    try {
        jsonObj = YAML.parse(yamlText);
    } catch (e) {
        return e.toString();
    }
    return JSON.stringify(jsonObj, null, "\t");
}

module.exports = convertYAMLtoJSON;
