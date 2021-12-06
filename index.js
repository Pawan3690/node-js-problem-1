
const http = require('http');
// const fs = require("fs");
const url = require('url');

// var adr = 'http://localhost:8080/age?year=1998&month=11&date=23&name=John';

// var q = url.parse(adr, true).query;



 http.createServer( (req, res) => {
    if (req.url == "/age?year=1998&month=11&date=23&name=John") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(" Hello Mr.John " );

        res.end("<p> You are currently 22 year old</p>");
        
    }
    //  else {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // var txt = q.year + " " + q.month + " " + q.day;
    // app.get()
    // res.write("The date and time are currently:" + "txt" );
    res.end()
// };
  }).listen(8080)






