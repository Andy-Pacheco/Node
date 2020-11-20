var express = require('express');
var router = express.Router();
let connection = require("../config/db")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("ok")
});

//READ localhost:3000/phones/allphones
//todos los telefonos

router.get("/allphones", (req, res) => {
    let sql = `SELECT * FROM phone`;

    connection.query(sql, (err, result) =>{
        if (err) throw err;
        res.json(result);
    })
});

//READ localhost:3000/phones/onePhone/:id_phone
//el telefonos id_phone

router.get("/onePhone/:id_phone", (req, res) => {
    let id_phone = req.params.id_phone;
    let sql =  `SELECT * FROM phone WHERE id_phone = ${id_phone}`;

    connection.query(sql, (err, result) =>{
        if (err) throw err;
        res.json(result);
    })
});

//Create localhost:3000/phones/createPhone
//Crear telefono con todos los campos de la tabla

router.post("/createPhone", (req, res) => {
    let model = req.body.model;
    let color = req.body.color;
    let price = req.body.price;
    let year = req.body.year;

    let sql = `INSERT INTO phone (model, color, price, year) VALUES
                ('${model}', '${color}', ${price}, ${year})`;
    
    connection.query(sql, (err, result) =>{
        if (err) throw err;
        res.json(result);
    })
});

//Delete localhost:3000/phones/deletePhone/id:phone
//Borrar un telefono según su id

router.get("/deletePhone/:id_phone", (req, res) => {
    let id_phone = req.params.id_phone;

    let sql = `DELETE FROM phone WHERE id_phone = ${id_phone}`;

    connection.query(sql, (err, result) =>{
        if (err) throw err;
        res.json(result);
    })
});

//Update localhost:3000/phones/updatePhone/:id_phone
//Actualizar los datos de un telefono segun su id

router.post("/updatePhone/:id_phone", (req, res) => {
    let id_phone = req.params.id_phone;

    let model = req.body.model;
    let color = req.body.color;
    let price = req.body.price;
    let year = req.body.year;

    let sql = `UPDATE phone SET model = '${model}', color = '${color}', price = ${price}, year = ${year} 
    WHERE id_phone = ${id_phone}`;

    connection.query(sql, (err, result) =>{
        if (err) throw err;
        res.json(result);
    })
});

module.exports = router;