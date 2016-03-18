
var html2markdown = require('html2markdown');

// convert a html text to a markdown text
// return markdown string
function convertHTMLtoMarkdown(htmlText) {
    try {
        return html2markdown(htmlText);
    } catch (e) {
        return e.toString();
    }
}

module.exports = convertHTMLtoMarkdown;
