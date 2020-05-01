"use script";
const http = require("http");
const quotes = require('./quotes.js');



http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"});
    const count = Math.floor(Math.random() * Math.floor(4));
    
    res.write(`${quotes.inspirations[count]}`);

    res.end();
})
.listen(3000);