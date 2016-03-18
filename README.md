
formatter
=========

__This Project is Still Under Construction!__


API
-----

### Getting Routes

    GET /features


JSON, YAML, CSON
----------------

### JSON

    POST /convert/json2yaml
    POST /convert/json2cson
    POST /format/json

### YAML

    POST /convert/yaml2json

### CSON

    POST /convert/cson2json


Markdown, HTML & HTML previewer
-------------------------------

### Markdown

    POST /convert/markdown2html
    POST /view/markdown

### HTML

    POST /convert/html2markdown
    POST /format/html


CSS, Sass, Scss, Less
---------------------

### CSS

    POST /convert/css2sass
    POST /convert/css2scss
    POST /convert/css2less
    POST /format/css

### Sass

    POST /convert/sass2css

### Scss

    POST /convert/scss2css

### Less

    POST /convert/less2css


JavaScript, CoffeeScript, TypeScript
------------------------------------

I have still no ideas whether to implement converter or not.

### JavaScript

    POST /convert/js2coffee
    POST /format/js-pretty-print

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
