var express = require('express');
const userController = require('../controllers/usersController');
var router = express.Router();
let controller = require("../controllers/usersController")
// no se va a ejecutar let connection = require("../config/db")
// no se va a ejecutar let sha1 = require("sha1")
// no se va a ejecutar let multer = require("multer")


//Creo la ruta y ejecuto un controlador

/* GET users listing. */
router.get('/', userController.enviarMensaje);

router.get("/verUser", userController.verUsuario)

router.post("/enviarDatos", userController.recogerUsuario)

router.get("/deleteUser/:id_user", userController.deleteUser)

module.exports = router;
