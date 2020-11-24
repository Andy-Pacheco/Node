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

var upload = multer({ storage: storage }).single("profile")



/* GET home page. */
router.get('/', function(req, res, next) {
  let sql = `SELECT * FROM users`

  connection.query(sql, (err, results) =>{
    if (err) throw err;
    console.log(results)
    res.render("index", {results})
  })
});

router.get('/register', function(req, res, next) {
  res.render('form');
});

router.post('/register/send', upload, function(req, res, next) {
  let {name, email, password} =req.body;
  password = sha1(password);
  let img_user = req.file.filename;

  let sql = `INSERT INTO users (name, email, password, img_user) 
  VALUES ("${name}", "${email}","${password}","${img_user}")`;

  connection.query(sql, (err, results) =>{
    if (err) throw err;
    res.redirect("/");
  });
});

router.get("/login", (req, res) =>{
  res.render("login");
})

router.post('/login/send', function(req, res) {

  let {email, password} = req.body;
  password = sha1(password);

  let sql = `SELECT * FROM users WHERE email = "${email}" AND password = "${password}"`;

  connection.query(sql, (err, result) =>{
    if (err) throw err;
    console.log(result.length)
    if (result.length == 0){
      res.send("Error, el correo o contraseña no son correctos")
    }
    else{
      res.send("Login correcto")
    }
  })

});

module.exports = router;