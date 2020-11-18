const express = require("express");
const router = express.Router();
const path = require("path");


//localhost:3000/users/
router.get("/", (req, res) => {
    res.send("Es el users principal");
});

//localhost:3000/users/rutadeusers2
router.get("/rutadeusers2", (req, res) => {
    res.send("Segunda ruta");
});

//localhost:3000/users/verFormulario
router.get("/verFormulario", (req, res) =>{
    res.sendFile(path.join(__dirname + "/../user.html"));
});

router.get("/nombre/:name", (req, res) =>{
    console.log(req.params);
    res.send("entra en nombre");
});

router.get("/ejemplo/:numero", (req, res) =>{
    let num = req.params.numero;
    if (num == 1){
        res.sendFile(path.join(__dirname + "/../numero1.html"))
    }
    else if (num == 2){
        res.sendFile(path.join(__dirname + "/../numero2.html"))
    }
 
});

//localhost:3000/users/login
router.get("/login", (req, res) => {
    res.send("Es el login del usuario");
});

router.post("/register", (req, res) => {
    //recogemos los datos del usuario
    console.log(req.body);
    res.send('ok');

});

module.exports = router;