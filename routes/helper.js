
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
module.exports.addConverterAPI = function (_router, args) {
    var router      = _router;               // express.Router (refer to express)
    var url         = args.url;              // string (url)  e.g. "/convert/json2cson"
    var convertFrom = args.from;             // string (language name)  e.g. "JSON"
    var convertTo   = args.to;               // string (language name)  e.g. "CSON"
    var renderer    = args.renderer;         // string (renderer path in views)  e.g. "json/json2cson"
    var converter   = args.converter;        // function (converts A to B and returns B)
    var sampleText  = args.sampleText || ''; // string (set a sample text by default)

    // GET /convert/aaa2bbb
    var title = `Convert ${convertFrom} to ${convertTo}`;
    router.get(url, function (req, res) {
        res.render(renderer, {
            title: title,
            convertFrom: convertFrom,
            convertTo: convertTo,
            textFrom: sampleText
        });
    });

    // POST /convert/aaa2bbb
    router.post(url, function (req, res) {
        res.end(converter(req.body.text));
    });

    return router;
}
