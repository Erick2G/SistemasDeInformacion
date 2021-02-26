const express = require('express');
const path = require('path');

const mysql = require('mysql');
const myConn = require('express-myconnection');
const app = express();

const inicioSesion = require('./routes/inicioSesionR');
const inicio = require('./routes/inicioR');
const registro = require('./routes/registroR');
const inicioUsuario = require('./routes/inicioUsuarioR');
const inicioAdmin = require('./routes/inicioAdminR');
const allPedidos = require('./routes/allPedidosR');
const pedidosUsuario = require('./routes/pedidosUsuarioR');
const comprarUsuario = require('./routes/comprarUsuarioR');

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(myConn(mysql,{
	host: 'localhost',
	user: 'root',
	password: 'password',
	port: 3306,
	database: 'fyv'
},'single'));

app.use(express.urlencoded({estended:false}));


app.use('/',inicio);
app.use('/inicioSesion',inicioSesion);
app.use('/inicioUsuario',inicioUsuario);
app.use('/inicioAdmin',inicioAdmin);
app.use('/registro',registro);
app.use('/allPedidos',allPedidos);
app.use('/pedidosUsuario',pedidosUsuario);
app.use('/comprarUsuario',comprarUsuario);

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(__dirname +'/styles'));

app.listen(app.get('port'),()=>{
	console.log('----');
});
