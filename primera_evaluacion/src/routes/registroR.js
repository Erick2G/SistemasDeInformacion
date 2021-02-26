const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
	res.render('registro');
});

router.post('/',(req, res) =>{
	var usuario = 'fail';
	const campos = req.body;
	var error_message=false;
	if(campos.checkUs==undefined ^ campos.checkAdmin==undefined && campos.nombre!="" && campos.password!=""){
		if(campos.checkUs==undefined){
			req.getConnection((err,conn)=>{
				var values = [[campos.nombre,campos.password]];
				conn.query('INSERT INTO admin (nombre,pw) VALUES ?', [values], (err,rows)=> {
					if(err){
						res.json(err);
					}else{
					//	console.log('respuesta',rows);
					}
				});
			});
		}else if(campos.checkAdmin==undefined){
			req.getConnection((err,conn)=>{
				var values = [[campos.nombre,campos.password]];
				conn.query('INSERT INTO usuario (nombre,pw) VALUES ?', [values], (err,rows)=> {
					if(err){
						res.json(err);
					}else{
						//console.log('respuesta',rows);
					}
				});
			});
		}
		res.redirect('/');
	}else{
		error_message=true;
		res.render('registro',{'error_message':error_message});
	}

});

module.exports = router;
