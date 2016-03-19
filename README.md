
formatter
==========

__This Project is Still Under Construction!__


API
==========


JSON
----------

##### POST /convert/json2yaml

convert JSON to YAML

parameters

- text : JSON text

##### POST /convert/json2cson

convert JSON to CSON

parameters

- text : JSON text

##### POST /format/json

pretty print JSON

parameters

- text : JSON text

##### POST /minify/json

minify JSON

parameters

- text : JSON text


YAML
----------

##### POST /convert/yaml2json

convert YAML to JSON

parameters

- text : YAML text


CSON
----------

##### POST /convert/cson2json

convert CSON to JSON

parameters

- text : CSON text

XML
----------

##### POST /format/xml

pretty print XML

parameters

- text : XML text

##### POST /minify/xml

minify XML

parameters

- text : XML text


Markdown
----------

##### POST /convert/markdown2html

convert Markdown to HTML

parameters

- text : Markdown text

##### POST /view/markdown

convert Markdown to HTML (same to be POST /convert/markdown2html)

parameters

- text : Markdown text


HTML
----------

##### POST /convert/html2markdown

convert HTML to Markdown

parameters

- text : HTML text

##### POST /format/html

pretty print HTML

parameters

- text : HTML text


CSS
----------

##### POST /format/css

pretty print CSS

parameters

- text : CSS text

##### POST /minify/css

minify CSS

parameters

- text : CSS text


Sass
----------

##### POST /convert/sass2css

convert Sass to CSS

parameters

- text : Sass text


SCSS
----------

##### POST /convert/scss2css

convert SCSS to CSS

parameters

- text : SCSS text


Less
----------

##### POST /convert/less2css

convert Less to CSS

parameters

- text : Less text


JavaScript
----------

##### POST /convert/js2coffee

convert JavaScript to CoffeeScript

##### POST /format/js

pretty print JavaScript

##### POST /minify/js

minify JavaScript


CoffeeScript
----------

##### POST /convert/coffee2js

convert CoffeeScript to JavaScript


TypeScript
----------

##### POST /convert/type2js

convert TypeScript to JavaScript


Deployment
----------

install dependencies:

    $ npm install

run the app:

    $ npm start
