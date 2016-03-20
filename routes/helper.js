
// create converter API
//
// Usage:
//
//    var router = addConverterAPI(router, {
//        url: '/convert/json2cson',
//        from: 'JSON',
//        to: 'CSON',
//        renderer: 'json/json2cson',
//        converter: afunction
//    });
//
module.exports.addConverterAPI = function (router, args) {
    //                router;                // express.Router (refer to express)
    var url         = args.url;              // string (url)  e.g. "/convert/json2cson"
    var convertFrom = args.from;             // string (language name)  e.g. "JSON"
    var convertTo   = args.to;               // string (language name)  e.g. "CSON"
    var renderer    = args.renderer;         // string (renderer path in views)  e.g. "json/json2cson"
    var converter   = args.converter;        // function (converts A to B and returns B)
    var title       = args.title || `Convert ${convertFrom} to ${convertTo}`; // string (title)
    var sampleText  = args.sampleText || ''; // string (set a sample text by default)
    var npmDeps     = args.deps || [];       // hash (npm package dependencies) e.g. { pkgname: 'version', ... }

    // GET /convert/aaa2bbb
    router.get(url, function (req, res) {
        res.render(renderer, {
            title: title,
            convertFrom: convertFrom,
            convertTo: convertTo,
            textFrom: sampleText,
            npmDeps: npmDeps
        });
    });

    // POST /convert/aaa2bbb
    router.post(url, function (req, res) {
        res.set('Content-Type', 'text/plain; charset=utf-8');
        res.end(converter(req.body.text));
    });

    return router;
}
