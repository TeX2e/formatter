
var pd = require('pretty-data2').pd;

// pretty print xml
function convertXMLtoXML(xmlText) {
  try {
    return pd.xml(xmlText);
  } catch (e) {
    return e.toString();
  }
}

module.exports = convertXMLtoXML;
