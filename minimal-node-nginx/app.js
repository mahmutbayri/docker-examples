let http = require('http');

let server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("Hello World");
    response.end();
});

server.listen(3000);

console.log("Server is running on 3000");
