
formatter
=========

__This Project is Still Under Construction!__


API
-----

### Getting Routes

    GET /features

### JSON

    POST /convert/json2yaml
    POST /convert/json2cson
    POST /format/json
    POST /minify/json

### YAML

    POST /convert/yaml2json

### CSON

    POST /convert/cson2json

### XML

    POST /format/xml
    POST /minify/xml

### Markdown

    POST /convert/markdown2html
    POST /view/markdown

### HTML

    POST /convert/html2markdown
    POST /format/html

### CSS

    POST /format/css
    POST /minify/css

### Sass

    POST /convert/sass2css

### SCSS

    POST /convert/scss2css

### Less

    POST /convert/less2css

### JavaScript

    POST /convert/js2coffee
    POST /format/js
    POST /minify/js

### CoffeeScript

    POST /convert/coffee2js

### TypeScript

    POST /convert/type2js


Deployment
----------

install dependencies:

    $ npm install

run the app:

    $ npm start
