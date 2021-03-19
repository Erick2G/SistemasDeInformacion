var express = require('express');
var router = express.Router();
var session =require('express-session');

router.get('/alta',(req, res)=>{
  var ses =req.session;
  res.render("almacen/frmAlta",{user:ses.userdata,token:ses.token});
});

router.get('/reporte',(req, res)=>{
  res.render("almacen/frmReporte",{user:ses.userdata});
});

router.get('/baja',(req, res)=>{
  res.render("almacen/frmBajas",{user:ses.userdata});
});

module.exports =router;
