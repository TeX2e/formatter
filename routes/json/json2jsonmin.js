
var pd = require('pretty-data2').pd;

// minify json
function convertJSONtoJSONMin(jsonText) {
    try {
        return pd.jsonmin(jsonText);
    } catch (e) {
        return e.toString();
    }
}

module.exports = convertJSONtoJSONMin;
