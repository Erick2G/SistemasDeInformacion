var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fes Aragon' });
});

router.get('/saludo',(req,res,next)=>{
    res.send('<h1>hola<h1>');
})

module.exports = router;
