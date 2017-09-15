const http = require ('http');

const server = http.createServer();

server.on('request', (req, res) =>{
var x = "still going..."
  res.write("Hello Node, " + x);

  setTimeout(()=>{
    res.write(x = x + "...and going...");
  }, 1000);
  res.end();
});

server.listen(8080);
