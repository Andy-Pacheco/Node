const express = require('express');
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.send("Esta es la ruta de animals")
});

router.get("/verHtml", (req, res) =>{
    res.sendFile(path.join(__dirname + "/../index.html"))
});

router.post("/enviar", (req,res) =>{
    console.log(req.body);
    res.send("ok");
})

module.exports = router;