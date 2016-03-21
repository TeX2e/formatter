
var typescript = require("typescript");

// convert typescript to js
function convertTypeScriptToJS(typescriptText) {
  try {
    return typescript.transpile(typescriptText);
  } catch (e) {
    return e.toString();
  }
}

module.exports = convertTypeScriptToJS;
