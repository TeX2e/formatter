
var YAML = require('yamljs');

// convert yaml to json
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
