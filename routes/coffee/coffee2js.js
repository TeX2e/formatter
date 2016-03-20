
var coffee = require('coffee-script');

// convert coffee to js
function convertCoffeeToJS(coffeeText) {
    try {
        return coffee.compile(coffeeText);
    } catch (e) {
        return e.toString()
            .replace(/\033\[.*?m/g, ''); // remove special charactor on terminal
    }
}

module.exports = convertCoffeeToJS;
