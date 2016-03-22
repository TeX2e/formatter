
// string.scan
String.prototype.scan = function(regex) {
  if (!regex.global) throw "regex must have 'global' flag set";
  var r = []
  this.replace(regex, function() {
    r.push(Array.prototype.slice.call(arguments, 1, -2));
  });
  return r;
}

// array.flatten
Array.prototype.flatten = function() {
  return Array.prototype.concat.apply([], this);
};

// array.max
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

// array.min
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


// strip indentation
module.exports.dedent = function (string) {
  var margin = string
    .scan(/^( +)/gm)
    .flatten()
    .map(line => line.length)
    .min();
  
  var result = string
    .replace(new RegExp(`^ {${margin}}`, 'gm'), '')
    .replace(/^\n/, '');

  return result;
}
