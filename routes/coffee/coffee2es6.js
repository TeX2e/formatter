
var decaffeinate = require('decaffeinate');

// convert coffee to es6 js
function convertCoffeeToES6JS(coffeeText) {
  try {
    return decaffeinate.convert(coffeeText);
  } catch (e) {
    return e.toString()
      .replace(/\033\[.*?m/g, ''); // remove special charactor on terminal
  }
}

module.exports = convertCoffeeToES6JS;
