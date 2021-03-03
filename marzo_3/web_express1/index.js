const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/',(req,res)=>{
  res.send('Metodo post post');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*body parser: modulo de node js que procesa el request y obtener parametros
cookie-siganture: para el manejo de cookies
http errors: biblioteca que apoya con los errores Http

*/
