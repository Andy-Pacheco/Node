const express = require('express');
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Esta es la ruta principal de futbol")
});

router.get("/equipo", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/equipo.html"))
});

router.get("/goles", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/goles.html"))
});
module.exports = router;