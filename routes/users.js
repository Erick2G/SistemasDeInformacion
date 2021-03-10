var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//esto realiza el proceso de auteticacion, pero no tiene elementos de seguridad
router.post('/login',(req,res,next)=>{
  usuario.login(req.body.email,req.body.passwd,(e,d)=>{
    if(d){
      res.send('login correcto');
      ses.req.session;//agrega el objeto session
      console.log(ses.id);
      //crear sesion
      /*
      1- reutilizar la sesion original del chrome
      2- hacer una nueva, desechando la de web browser
      Se aplica la segunda por seguridad, con la primera alguien puede secuestrar la sesipn
      */
    }else{
      res.json(e);
    }
  });
});

module.exports = router;
