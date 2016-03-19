
var html2markdown = require('html2markdown');

// convert html to markdown
function convertHTMLtoMarkdown(htmlText) {
    try {
        return html2markdown(htmlText);
    } catch (e) {
        return e.toString();
    }
}

module.exports = convertHTMLtoMarkdown;
