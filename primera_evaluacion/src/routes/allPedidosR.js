const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    var tabla = [];
    req.getConnection((err,conn)=>{
  		conn.query('select u.nombre, p.nombre as nombreP, pu.cantidad, (pu.cantidad * p.precio ) as total from pedido_usuario pu, usuario u, producto p where pu.id_producto=p.id_producto and u.id_usuario=pu.id_usuario;', (err2,rows)=> {
      	if(err2){
      		res.json(err2);
      	}
				res.render('allPedidos',{data:rows});
      });
  });
});
module.exports = router;
