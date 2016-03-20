
var express = require('express');
var router = express.Router();

var routerHelper = require('../helper.js');
var type2js = require('./type2js.js');

var sampleText = `
class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");

document.body.innerHTML = greeter.greet();
`;

// GET /convert/type2js
// POST /convert/type2js
router = routerHelper.addConverterAPI(router, {
    url: '/convert/type2js',
    from: 'TypeScript',
    to: 'JavaScript',
    renderer: 'typescript/type2js',
    converter: type2js,
    sampleText: sampleText,
    deps: {
        "typescript": "^1.8.9"
    }
});

module.exports = router;
