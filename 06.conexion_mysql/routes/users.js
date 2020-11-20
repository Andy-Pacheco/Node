var express = require('express');
var router = express.Router();
let connection = require("../config/db.js");



// localhost:3000/users/
router.get('/', function(req, res, next) {
  // guardo la query que voy a ejecutar en una variable
  let sql = "SELECT * FROM users";

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

//localhost:3000/users/verFormulario
router.get("/verFormulario", (req, res) =>{
  res.render("users")
});

//localhost:3000/users/enviarUser
router.post("/enviarUser", (req, res) =>{
  let name = req.body.name;
  let lastName = req.body.lastName;

  let sql = `INSERT INTO users (name, last_name) values ("${name}", "${lastName}")`;
  
  connection.query(sql, (err, result) => {
    
    if (err) throw err;
    console.log(result);
    res.send("ok")
  });
  
})

module.exports = router;
