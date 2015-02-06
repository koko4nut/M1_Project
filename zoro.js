/**
 * Created by kevin on 06/02/2015.
 */
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    console.log("hello ma poule");
    res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>');
});

server.listen(8080);