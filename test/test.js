
var assert = require('assert');
var request = require('supertest');
var app = require('../app');
var helper = require('./helper');
var dedent = helper.dedent;

describe('api', () => {
  describe('GET /', () => {
    it('should show welcome page', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done);
    });
  });

  describe('POST /convert/coffee2js', () => {
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
  });

  describe('POST /convert/coffee2es6', () => {
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
        .end(done);
    });
  });

  describe('POST /convert/cson2json', () => {
    it('should convert cson to json', (done) => {
      request(app)
        .post('/convert/cson2json')
        .send({ text: dedent(`
          dict:
            prop: "foo"
            prop2: 123
          `) })
        .expect(200)
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(dedent(`
          {
            "dict": {
              "prop": "foo",
              "prop2": 123
            }
          }
          `))
        .end(done);
    });
  });

  describe('POST /format/css', () => {
    it('should pretty print css', (done) => {
      request(app)
        .post('/format/css')
        .send({ text: `.headbg{margin:0 8px;}` })
        .expect(200)
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(dedent(`
          .headbg{
            margin:0 8px;
          }
          `))
        .end(done);
    });
  });

  describe('POST /minify/css', () => {
    it.skip('should minify css', (done) => {
      //
    });
  });

  describe('POST /format/html', () => {
    it.skip('should pretty print html', (done) => {
      //
    });
  });

  describe('POST /convert/html2markdown', () => {
    it.skip('should convert html to markdown', (done) => {
      //
    });
  });

  describe('POST /convert/js2coffee', () => {
    it.skip('should convert js to coffee', (done) => {
      //
    });
  });

  describe('POST /format/js', () => {
    it.skip('should pretty print js', (done) => {
      //
    });
  });

  describe('POST /minify/js', () => {
    it.skip('should minify js', (done) => {
      //
    });
  });

  describe('POST /convert/json2cson', () => {
    it.skip('should convert json to cson', (done) => {
      //
    });
  });

  describe('POST /convert/json2yaml', () => {
    it.skip('should convert json to yaml', (done) => {
      //
    });
  });

  describe('POST /format/json', () => {
    it.skip('should pretty print json', (done) => {
      //
    });
  });

  describe('POST /minify/json', () => {
    it.skip('should minify json', (done) => {
      //
    });
  });

  describe('POST /convert/less2css', () => {
    it.skip('should convert less to css', (done) => {
      //
    });
  });

  describe('POST /convert/markdown2html', () => {
    it.skip('should convert markdown to html', (done) => {
      //
    });
  });

  describe('POST /convert/sass2css', () => {
    it.skip('should convert sass to css', (done) => {
      //
    });
  });

  describe('POST /convert/scss2css', () => {
    it.skip('should convert scss to css', (done) => {
      //
    });
  });

  describe('POST /convert/type2js', () => {
    it.skip('should convert typescript to js', (done) => {
      //
    });
  });

  describe('POST /format/xml', () => {
    it.skip('should pretty print xml', (done) => {
      //
    });
  });

  describe('POST /minify/xml', () => {
    it.skip('should minify xml', (done) => {
      //
    });
  });

  describe('POST /convert/yaml2json', () => {
    it.skip('should convert yaml to json', (done) => {
      //
    });
  });
});
