
// --- requires ---

var express = require('express');
var router = express.Router();
// use to convert json to yaml, and yaml to json
var YAML = require('yamljs');
var jsonlint = require("jsonlint");

// --- codes ---

var sample_json_text = `
{
	"foo": 123,
	"bar": [
		"spam",
		"ham",
		"egg"
	],
	"baz": true
}
`;

function render(res, jsonText, yamlText) {
    res.render('features/json', {
        title: 'JSON formatter',
        json_text: jsonText,
        yaml_text: yamlText,
    });
}

// GET /json
// render with sample_json_text.
router.get('/', function (req, res, next) {
    res.render('features/json', {
        title: 'JSON formatter',
        json_text: sample_json_text
    });
});

// POST /json
// convert json_text if json_text is passed via post parameters.
// convert yaml_text if yaml_text is passed via post parameters.
// render with converted text.
router.post('/', function (req, res) {
    var jsonText = req.body.json_text;
    var yamlText = req.body.yaml_text;

    if (jsonText) {
        yamlText = convertJSONtoYAML(jsonText);
    } else if (yamlText) {
        jsonText = convertYAMLtoJSON(yamlText);
    }
    render(res, jsonText, yamlText);
});

// convert a json text to a yaml text
// return yaml string
function convertJSONtoYAML(jsonText) {
    try {
        jsonlint.parse(jsonText);
    } catch (e) {
        return e.toString();
    }
    var json_obj = JSON.parse(jsonText);
    return YAML.stringify(json_obj, null, "\t");
}

// convert a yaml text to a json text
// return json string
function convertYAMLtoJSON(yamlText) {
    var jsonObj;
    try {
        jsonObj = YAML.parse(yamlText);
    } catch (e) {
        jsonObj = e.toString();
    }
    return JSON.stringify(jsonObj, null, "\t");
}

module.exports = router;
