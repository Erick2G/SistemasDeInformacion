const express = require('express');
const router = express.Router();
var usuario ={};

router.get('/',(req,res) => {
    var tabla = [];
    req.getConnection((err,conn)=>{
      conn.query('SELECT * FROM activo', (err,rows)=> {
        if(err){
          res.json(err);
        }
        usuario={'id_activo':rows[0].id_activo};
  		conn.query('SELECT * FROM pedido_usuario WHERE id_usuario=?', [usuario.id_activo], (err2,pedidos)=> {
      	if(err2){
      		res.json(err);
      	}
        for(let i =0;i<pedidos.length;i++){
          conn.query('SELECT * FROM producto WHERE id_producto=?', [pedidos[i].id_producto], (err3,datos_producto)=> {
            if(err){
          		res.json(err);
          	}
            const a = parseFloat(datos_producto[0].precio);
            const b = parseFloat(pedidos[i].cantidad);
            const total = a * b;
            tabla.push({'producto':datos_producto[0].nombre,'cantidad':pedidos[i].cantidad,'total':total});
          });
        }
      });
    });
  });
    setTimeout(function afterTwoSeconds() {
      res.render('pedidosUsuario',{data:tabla});
    }, 1200)
});

module.exports = router;
