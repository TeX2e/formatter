
var YAML = require('yamljs');
var jsonlint = require("jsonlint");

// convert a json text to a yaml text
// return yaml string
function convertJSONtoYAML(jsonText) {
    try {
        jsonlint.parse(jsonText);
    } catch (e) {
        return e.toString();
    }
    var json_obj = JSON.parse(jsonText);
    console.log(json_obj);
    return YAML.stringify(json_obj, 100, 2);
}

module.exports = convertJSONtoYAML;
