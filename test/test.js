
var assert = require('assert');
var request = require('supertest');
var app = require('../app');
var helper = require('./helper');
var dedent = helper.dedent;

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

    it.skip('should convert cson to json', (done) => {
        //
    });

    it.skip('should pretty print css', (done) => {
        //
    });

    it.skip('should minify css', (done) => {
        //
    });

    it.skip('should pretty print html', (done) => {
        //
    });

    it.skip('should convert html to markdown', (done) => {
        //
    });

    it.skip('should convert js to coffee', (done) => {
        //
    });

    it.skip('should pretty print js', (done) => {
        //
    });

    it.skip('should minify js', (done) => {
        //
    });

    it.skip('should convert json to cson', (done) => {
        //
    });

    it.skip('should convert json to yaml', (done) => {
        //
    });

    it.skip('should pretty print json', (done) => {
        //
    });

    it.skip('should minify json', (done) => {
        //
    });

    it.skip('should convert less to css', (done) => {
        //
    });

    it.skip('should convert markdown to html', (done) => {
        //
    });

    it.skip('should convert sass to css', (done) => {
        //
    });

    it.skip('should convert scss to css', (done) => {
        //
    });

    it.skip('should convert typescript to js', (done) => {
        //
    });

    it.skip('should pretty print xml', (done) => {
        //
    });

    it.skip('should minify xml', (done) => {
        //
    });

    it.skip('should convert yaml to json', (done) => {
        //
    });
});
