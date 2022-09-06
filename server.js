let http = require("http");
server = http.createServer(function (request, response) {
  response.write("This works");
  response.end();
});

server.listen(80, "0.0.0.0");
console.log("Server Running");
