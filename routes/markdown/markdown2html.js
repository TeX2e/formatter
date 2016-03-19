
var marked = require('marked');

// convert markdown to html
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

    try {
        return marked(markdownText);
    } catch (e) {
        return e.toString();
    }
}

module.exports = convertMarkdownToHTML;
