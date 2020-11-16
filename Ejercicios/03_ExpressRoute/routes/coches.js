const express = require('express');
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Esta es la ruta principal de coches")
});

router.get("/cilindrada", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/cilindrada.html"))
});

router.get("/marca", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/marca.html"))
});
module.exports = router;