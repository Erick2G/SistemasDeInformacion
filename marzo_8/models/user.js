const login = (email,passwd,callback)=>{
  var err='';
  var bd_data='';//simula la inf, proveniente de bd
  if(email == 'joe@doe.com' && passwd='1234'){
    bd_data = {
      'email':email,
      'phone':'5544332211'
    }
  }else{
    err = {'mensaje':'credenciales incorrectas'}
  }
  callback(err,bd_data);
}
exports.login=login;
