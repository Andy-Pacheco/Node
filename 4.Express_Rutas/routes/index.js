const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Primera ruta")
});

router.get("/index", (req, res) => {
    res.send("Segunda ruta")
});

router.get("/prueba1", (req, res) => {
    res.send("Tercera ruta")
});

module.exports = router;