var express = require('express');
var router = express.Router();
const connection = require("../config/db");
const multer  = require('multer');
const sha1 = require("sha1");

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

var upload = multer({ storage: storage }).single("avatar")

router.get('/createUser', function(req, res, next) {
  res.render('form');
});

router.post("/subirImagen", upload, (req, res) =>{
  //recoger archivo
  console.log(req.file.filename);

  let name = req.body.name
  let lastname = req.body.lastname
  let age = req.body.age
  let img = req.file.filename;
  let pass = sha1(req.body.password);

  let sql = `INSERT INTO users (name, lastname, age, img_user, password) 
  VALUES ("${name}", "${lastname}", ${age}, "${img}", "${pass}") `
  connection.query(sql, (err, result) =>{
    if (err) throw err;
    res.send("ok");
  })
})

router.get('/verUsers', function(req, res, next) {
  let sql = `SELECT * FROM users`;

  connection.query(sql, (err, results) =>{
    if (err) throw err;
    console.log(results)
    res.render("index", {results})
  })
});

router.get('/deleteUser/:id_user', function(req, res, next) {
  let id_user = req.params.id_user;
  let sql = `DELETE FROM users WHERE id_users = ${id_user}`;

  connection.query(sql, (err, results) =>{
    if (err) throw err;
    console.log(results)
    res.redirect("/users/verUsers")
  })
});


//localhost:3000/users/curso

router.get("/cursos", (req, res) =>{
  let sql = `SELECT * FROM users, cursos WHERE cursos.id_users = users.id_users`;

  connection.query(sql, (err, results) =>{
    if (err) throw err;
    console.log(results);
    res.send("ok")
  })
})

module.exports = router;
