var Http = require('http');
var server = Http.createServer(function(request,response){
	console.log('Someone got in');
	console.log(request.url);
	//console.log(JSON.stringify(request));

	if(request.method == 'get'){
		response.writeHead(200,"Content-Type:text/html");
		response.write("<style> h1{ color:blue }</style>");
		response.write("<h1>hallo ico<h1>");
	}else{
		response.write("No es get");
	}
	response.end();
});
server.listen(3000,function(){
	console.log('escuchando conexion en puerto 3000');
});
