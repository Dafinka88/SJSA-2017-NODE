// var fs = require("fs");
var http = require("http");

// fs.writeFile("poraka.txt", "Nodejs e najdobar jazik na svet!", function(err) {
//    if(err) {
//        return console.log(err);
//    }

//    console.log("The file was saved!");
// });




// fs.appendFile("poraka.txt", "nova linija", (err) =>{
// 	if(err)throw err;
// 	console.log('the "data to apend" was appended to file!');
// });



// fs.readFile("users.json", "utf8", (err,data) => {
// 	// console.log(data);
// 	var jsonData = JSON.parse(data);
// 	// console.log(jsonData);

// 	jsonData.forEach((user, i) => {
// 		console.log("Name:" + user.name + '\t' + "lastname:" + '\t' + "Email:" + user.email + '\t' + "Password:" + user.password);
// 	});

// });




http.createServer(function(request, response){
// 		// console.log(request);
// 		response.writeHead(200, "OK");
// 		response.end("Hello World");
// }).listen(3000);

	if(request.url === "/hello") {
		response.writeHead(200, "OK");
		response.end("Hello World");
	}else {
		response.writeHead(404, "Not Found");
		response.end(" Page Not Found");
	}
	
}).listen(3000);
