var jwt = require('jsonwebtoken');
var payload ={
  userdata:{'email':'joe@doe.com','phone':'5544332211'}
}
const clave ='dios1234';
const token = jwt.sign(payload,clave,{expiresIn:60*5});

console.log(token);
