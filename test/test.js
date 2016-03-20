
var assert = require('assert');
var request = require('supertest');
var app = require('../app');

// strip indentation
function dedent(string) {
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


describe('/', () => {
    it('should show welcome page', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200, done);
    });

    it('should convert coffee to js', (done) => {
        request(app)
            .post('/convert/coffee2js')
            .send({ text: `square = (x) -> x * x` })
            .expect(200)
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(dedent(`
                var square;

                square = function(x) {
                  return x * x;
                };
                `))
            .end(done);
    });

    it('should convert coffee to es6', (done) => {
        request(app)
            .post('/convert/coffee2es6')
            .send({ text: dedent(`
                race = (winner, runners...) ->
                  print winner, runners
                `) })
            .expect(200)
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(dedent(`
                var race = function(winner, ...runners) {
                  return print(winner, runners);
                };
                `))
            .end(done)
    });

    it('should convert cson to json', (done) => {
        //
    });

    it('should pretty print css', () => {
        //
    });
});
