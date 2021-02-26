const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
	res.render('inicioSesion');
});
router.post('/',(req, res) =>{

	const campos = req.body;
	var error_message=false;
	if(campos.checkUs==undefined ^ campos.checkAdmin==undefined && campos.nombre!="" && campos.password!=""){
		if(campos.checkUs==undefined){
			req.getConnection((err,conn)=>{
				conn.query('SELECT * FROM admin WHERE nombre=? and pw=?', [campos.nombre, campos.password], (err,rows)=> {
					if(err){
						res.json(err);
					}else if(rows!=''){
						conn.query('update activo a set a.id_activo = ?, a.nombre = ?, a.pw = ? where a.id = 1;',[rows[0].id_admin, rows[0].nombre,rows[0].pw],(err2,ans)=>{
							if(err2){
								res.json(err);
							}
							res.redirect('inicioAdmin');
						});
					}else{
						error_message=true;
						res.render('inicioSesion',{'error_message':error_message});
					}
				});
			});
		}else if(campos.checkAdmin==undefined){
			req.getConnection((err,conn)=>{
				conn.query('SELECT * FROM usuario WHERE nombre=? and pw=?', [campos.nombre, campos.password], (err,rows)=> {
					if(err){
						res.json(err);
					}else if(rows!=''){
						conn.query('update activo a set a.id_activo = ?, a.nombre = ?, a.pw = ? where a.id = 1;',[rows[0].id_usuario, rows[0].nombre,rows[0].pw],(err2,ans)=>{
							if(err2){
								res.json(err);
							}
							res.redirect('inicioUsuario');
						});
					}else{
						error_message=true;
						res.render('inicioSesion',{'error_message':error_message});
					}
				});
			});
		}
	}else{
		error_message=true;
		res.render('inicioSesion',{'error_message':error_message});
	}
});
module.exports = router;
