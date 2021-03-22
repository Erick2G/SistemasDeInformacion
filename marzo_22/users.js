var express = require('express');
var router = express.Router();
var usuario = require('../models/user');
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('frmlogin',{});
});
//esto realiza el proceso de auteticacion, pero no tiene elementos de seguridad
router.post('/login',(req,res,next)=>{
  usuario.login(req.body.email,req.body.passwd,(e,d)=>{
    if(d){
      ses=req.session;
      console.log(ses.id);
      ses.userdata=d;
      console.log(ses);
      const payload={
        datos:d
      }
      //process representa al sistema operativo
      const clave = process.env.SECRETO || 'dios1234'; //obtener desde ENV
      const token = jwt.sign(payload,clave,{expiresIn:60*5});
      ses.token=token;
      res.redirect('/');
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

router.get('/logout',(req,res,next)=>{
  req.session.destroy((falla)=>{
    if(falla){
      res.send(501,"Errore");
    }else{
      res.redirect('/');
    }
  });
});

module.exports = router;
