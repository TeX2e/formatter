
var pd = require('pretty-data2').pd;

// minify xml
function convertXMLtoXMLMin(xmlText) {
    try {
        return pd.xmlmin(xmlText);
    } catch (e) {
        return e.toString();
    }
}

module.exports = convertXMLtoXMLMin;
