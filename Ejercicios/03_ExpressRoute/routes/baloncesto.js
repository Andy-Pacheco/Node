const express = require('express');
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Esta es la ruta principal de baloncesto")
});

router.get("/equipo-baloncesto", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/equipo-baloncesto.html"))
});

router.get("/canastas", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/canastas.html"))
});
module.exports = router;