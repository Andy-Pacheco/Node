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

router.get("/verFormulario", (req, res) =>{
  res.render("ratings");
});

router.post("/enviarRating", (req, res) =>{
  let ratingName = req.body.ratingName;
  let rating = req.body.rating;

  let sql = `INSERT INTO ratings (name_rating, number_rating) VALUES ("${ratingName}", "${rating}")`;

  connection.query(sql, (err, result) =>{

    if(err) throw err;
    console.log(result);
    res.send("ok")
  })
})

module.exports = router;