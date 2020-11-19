var express = require('express');
var router = express.Router();
let connection = require("../config/db.js");



// localhost:3000/ratings/
router.get('/', function(req, res, next) {
  // guardo la query que voy a ejecutar en una variable
  let sql = "SELECT * FROM ratings";

  //conecto y ejecuto una variable que es una query
  // en conection.query tenemos dos parametros, el primero la query y el
  // segundo un callback, que esa funcion va a tener 2 param: un error
  // y un resultado (res de la query)
  connection.query(sql, function(err, result){
    
    if (err) throw err;
    console.log(result);
    //envio con un json de ese resultado
    res.json(result);
  });
  
});

module.exports = router;