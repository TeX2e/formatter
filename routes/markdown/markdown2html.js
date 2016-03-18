
var marked = require('marked');

// convert a markdown text to a html text
// return html string
function convertMarkdownToHTML(markdownText) {
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    });
    var htmlText = marked(markdownText);
    return htmlText;
}

module.exports = convertMarkdownToHTML;
