const express = require('express');
const router = express.Router();
const path = require("path");

//localhost:3000/products/
router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + "/../formulario.html"))
});

//localhost:3000/products/enviar
router.post("/enviar", (req, res) =>{
    let formulario = req.body;
    console.log(formulario.nombre);
    console.log(formulario.precio);
    console.log(formulario.descripcion);
    console.log(formulario.color);
    console.log(formulario.forma);
    res.send("Todo bien, nada mal");
});

router.get("/ejemplo/:nombre/:precio", (req, res) =>{
    variables = req.params;
    if (variables.nombre == "azul" && variables.precio == 155){
        res.send("Good job.");
    }
    else if(variables.nombre != "azul" ){
        res.send("Mejor en azul, no?");
    }
    else if(variables.precio < 155){
        res.send("Sube precio!");
    }
    else{
        res.send("Baja el precio!");
    }
})

module.exports = router;