const express = require('express');
const router = express.Router();
const url= require('url');
var usuario ={};
var producto = 'nada';

router.get('/',(req,res) => {
	req.getConnection((err,conn)=>{
				conn.query('SELECT * FROM activo', (err,rows)=> {
					if(err){
						res.json(err);
					}
					usuario={'id_activo':rows[0].id_activo};
				});
	});

	res.render('comprarUsuario');
});

router.get('/a/:id',(req, res)=>{
	const {id}=req.params;
	producto = id;
	req.getConnection((err,conn)=>{
				conn.query('SELECT * FROM producto WHERE nombre=?', [producto], (err,rows)=> {
					if(err){
						res.json(err);
					}
					producto = {'id_producto':rows[0].id_producto,'nombre':rows[0].nombre,'precio':rows[0].precio,'total':'0'};
					res.render('hacerPedido',{selected:producto});
				});
	});
});

//Para hacer un pedido
router.post('/a/:id',(req, res)=>{
	const {id}=req.params;
	const form = req.body;
	if(form.cantidad>0){
		req.getConnection((err,conn)=>{
			var data=[usuario.id_activo,producto.id_producto,form.cantidad]
					conn.query('INSERT INTO pedido_usuario(id_usuario,id_producto,cantidad) VALUES(?)', [data], (err,rows)=> {
						if(err){
							res.json(err);
						}
					});
		});
		res.redirect('/comprarUsuario');
	}
});

module.exports = router;
