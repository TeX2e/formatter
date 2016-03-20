
var js2coffee = require('js2coffee');

// convert js to coffee
function convertCoffeeToJS(coffeeText) {
    try {
        return js2coffee.build(coffeeText).code;
    } catch (e) {
        return e.toString();
    }
}

module.exports = convertCoffeeToJS;
