var express = require('express');
var router = express.Router();
let connection = require("../config/db.js");



// localhost:3000/products/
router.get('/', function(req, res, next) {
  // guardo la query que voy a ejecutar en una variable
  let sql = "SELECT * FROM products";

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

router.get("/verFormulario", (req, res) =>{
  res.render("products");
});

router.post("/enviarProduct", (req, res) =>{
  let productName = req.body.productName;
  let price = req.body.price;
  let color = req.body.color;

  let sql = `INSERT INTO products (name_product, price, color) VALUES ("${productName}", ${price}, "${color}")`;

  connection.query(sql, (err, result) =>{

    if(err) throw err;
    console.log(result);
    res.send("ok")
  })
})

module.exports = router;