var express = require('express');
var router = express.Router(); //llamada a constructore de POO

/* GET home page. */
router.get('/',(req, res, next)=>{ //para cuando soliciten la ruta de campeones
  res.send('Bienvenido invocador');
});

router.get('/garen',(req,res,next)=>{
    res.render('campeongaren',{nombre:'Garen',pasiva:'perseverancia'});
})

module.exports = router; //mantar a llamar un modulo de express para hacer visible este archivo para el resto del sistema
