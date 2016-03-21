
// strip indentation
module.exports.dedent = function (string) {
    var lines = string
        .trimLeft()   // dedent eats leading whitespace too
        .split("\n");

    // detect mindent (minimum indent)
    var mindent = null;
    lines.forEach(line => {
        var m = line.match(/^ +/);
        if (m) {
            var indent = m[0].length;
            if (!mindent) {
                // this is the first indented line
                mindent = indent;
            } else {
                mindent = Math.min(mindent, indent);
            }
        }
    });

    // strip indentation
    if (mindent !== null) {
        return lines
            .map(line => line[0] === " " ? line.slice(mindent) : line)
            .join("\n");
    } else {
        return lines.join("\n");
    }
}
