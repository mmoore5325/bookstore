const http = require ('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end(fs.readFileSync(__dirname + "/../client/index.html"));
});

server.listen(8080);


//to know node you need to know the following:

// event emitters

// streams
// Use streams, not readfile.  not fs.readfile, fs.createstream

// clusters
