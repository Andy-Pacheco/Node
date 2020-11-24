const express = require('express');
const router = express.Router();
const connection = require("../config/db");
const multer  = require('multer')

//utilizamos el metodo diskstorage de multer para configurar DONDE (destination)
// y el NOMBRE (filename) de donde quiero que se guarde la imagen y el nombre
// con el que quiero que se guarde la imagen
var storage = multer.diskStorage({
  destination: "public/images",
  filename: function (req, file, cb) {
    const extension = file.originalname.slice(
      file.originalname.lastIndexOf("."));
    // la imagen se guarde con un nombre único
    //la fecha de subida + el nombre de la imagen
    cb(null, Date.now() + extension)
    }
})
 

//guardo en una variable upload que es la configuracion de el destino
//y el nombre de subida de la imagen y le indicamos el tipo de método de subida
//de imagen que quiero utilizar: single(para una sola imagen),
// array(para subir varias imagenes)
//el método single me permite subir una imagen por formulario(click)
//lo que recibe el método single es el name="" del input del formulario
// (avatar == name="" del formulario)
var upload = multer({ storage: storage }).single("avatar")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

//middleware (funcion intermedia)
router.post("/subirImagen", upload, (req, res) =>{
  //recoger archivo
  console.log(req.file.filename);

  let name = req.file.filename;

  let sql = `INSERT INTO images (name) VALUES ("${name}") `
  connection.query(sql, (err, result) =>{
    if (err) throw err;
    res.send("ok");
  })
})

router.get("/verImagen" , (req, res) =>{
  let sql = `SELECT * FROM images`;

  connection.query(sql, (err, results) =>{
    if (err) throw err;
    res.render("index", {results})
  })
})

module.exports = router;
