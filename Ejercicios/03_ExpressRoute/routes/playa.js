const express = require('express');
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Esta es la ruta principal de playa")
});

router.get("/isla", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/isla.html"))
});

router.get("/caribe", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/caribe.html"))
});

module.exports = router;