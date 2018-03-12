var http = require("http");

http.createServer(function(request, response){

	if(request.url === "/hello") {
		response.writeHead(200, "OK");
		response.end("Hello World");
	}else {
		response.writeHead(404, "Not Found");
		response.end(" Page Not Found");
	}
	
}).listen(3000);