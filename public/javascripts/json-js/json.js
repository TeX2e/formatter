
$(document).ready(function () {
    // CodeMirror option
    var option = {
        lineNumbers: true,
        indentUnit: 2,
        autoCloseBrackets: true
    };

    // Create textarea as editor

    var jsonOption = option;
    //jsonOption.mode = 'json';
    var jsonEditor = CodeMirror.fromTextArea(document.getElementById('editor_json'), jsonOption);

    var yamlOption = option;
    yamlOption.mode = 'yaml';
    var yamlEditor = CodeMirror.fromTextArea(document.getElementById('editor_yaml'), yamlOption);
});
