
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
    POST /convert/json2xml
    POST /format/json-pretty-print

### YAML

    POST /convert/yaml2json
    POST /convert/yaml2cson
    POST /convert/yaml2xml

### CSON

    POST /convert/cson2json
    POST /convert/cson2yaml
    POST /convert/cson2xml

<!--
### XML

    POST /convert/xml2json
    POST /convert/xml2yaml
    POST /convert/xml2cson
-->


Markdown, HTML & HTML previewer
-------------------------------

### Markdown

    POST /convert/markdown2html
    POST /format/markdown-preview

### HTML

    POST /convert/html2markdown
    POST /format/html-pretty-print
    POST /format/html-preview

Note: html `<script>` tags will be removed in previewer


CSS, Sass, Scss, Less
---------------------

### CSS

    POST /convert/css2sass
    POST /convert/css2scss
    POST /convert/css2less

### Sass

    POST /convert/sass2css
    POST /convert/sass2scss
    POST /convert/sass2less

### Scss

    POST /convert/scss2css
    POST /convert/scss2sass
    POST /convert/scss2less

### Less

    POST /convert/less2css
    POST /convert/less2sass
    POST /convert/less2scss


JavaScript, CoffeeScript, TypeScript
------------------------------------

I have no ideas whether to implement converter or not.

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
