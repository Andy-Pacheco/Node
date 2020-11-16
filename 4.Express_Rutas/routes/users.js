const express = require("express");
const router = express.Router();


//localhost:3000/users/
router.get("/", (req, res) => {
    res.send("Es el users principal")
});

//localhost:3000/users/rutadeusers2
router.get("/rutadeusers2", (req, res) => {
    res.send("Segunda ruta")
});


//localhost:3000/users/login
router.get("/login", (req, res) => {
    res.send("Es el login del usuario")
});

module.exports = router;