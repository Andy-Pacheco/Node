//Libreria de HTTP -> crear un servidor en local
const http = require("http");

function serverConfig(request, response) {
    response.writeHead(200, {"Content-Type" : "text-plain"});
    response.write("Mi primer servidor");
    response.end();
};

let server = http.createServer(serverConfig);
server.listen(8080);

//http://localhost:8080
//127.0.0.1:8080
