var http =require ('http'),
express = require ('express'),
fs = require ('fs'),
xmlParse = require ('xslt-processor').xmlParse,
xsltProcess = require ('xslt-processor').xsltProcess;

var router = express ();
var server = http.createServer (router);

router.get ('/', function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    var xml = fs.readFileSync('PaddysCafe.xml', 'utf8');
    var xsl = fs.readFileSync('PaddysCafe.xsl', 'utf8');
    console.log(xml);

    var doc = xmlParse(xml);
    var stylesheet = xmlParse(xsl);

    var result = xsltProcess(doc, stylesheet);

    
    res.end (result.toString());

    

});

server.listen(process.env.PORT|| 3000, process.env.IP, function () {
    var addr = server.address();
    console.log("Server is listening at", addr.address + ":" + addr.port)

});