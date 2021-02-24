var Http = require('http');
var server = Http.createServer(function(request,response){
	console.log('Someone got in');
	fs.readFile();

	response.end();
});
server.listen(3000,function(){
	console.log('escuchando conexion en puerto 3000');
});
