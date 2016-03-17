
var express = require('express');
var router = express.Router();

var json2yaml = require('./json2yaml.js');

// GET /convert/json2yaml
router.get('/convert/json2yaml', function (req, res) {
    res.render('json/json2yaml', { title: 'JSON formatter' });
});

// POST /convert/json2yaml
// convert jsonText if jsonText is passed via post parameters.
router.post('/convert/json2yaml', function (req, res) {
    var jsonText = req.body.text;
    var yamlText = json2yaml(jsonText);
    res.write(yamlText);
    res.end();
});

// GET /convert/json2cson
// POST /convert/json2cson

// GET /convert/json2xml
// POST /convert/json2xml

// GET /format/json-pretty-print
// POST /format/json-pretty-print

module.exports = router;



/*
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
// convert jsonText if jsonText is passed via post parameters.
// convert yamlText if yamlText is passed via post parameters.
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
*/
