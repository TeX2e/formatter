
function createCodeMirror(idName, _option) {
    _option = _option || {};

    // CodeMirror option
    var option = {
        lineNumbers: true,
        tabSize: 2,
        autoCloseBrackets: true
    };
    option = $.extend({}, option, _option);

    // Create textarea as editor
    var editor = CodeMirror.fromTextArea(document.getElementById(idName), option);

    // Map the Tab key to insert spaces instead of a tab character.
    editor.setOption("extraKeys", {
        Tab: function(cm) {
            var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
            cm.replaceSelection(spaces);
        }
    });

    return editor;
}

$(document).ready(function () {
    var editorFrom = createCodeMirror('editorFrom', window.editorFromOption);
    var editorTo   = createCodeMirror('editorTo',   window.editorToOption);

    $('#convertFrom button').click(function () {
        var currentPath = window.location.pathname;
        var text = editorFrom.getValue();

        $.post({
            url: currentPath,
            data: {
                text: text
            }
        })
        .done(function (res) {
            editorTo.setValue(res);
        })
    });
});
