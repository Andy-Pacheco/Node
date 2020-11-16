const express = require('express');
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Esta es la ruta principal")
});

router.get("/sobreNosotros", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/sobreNosotros.html"))
});

router.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname + "/../html/contacto.html"))
});
module.exports = router;
