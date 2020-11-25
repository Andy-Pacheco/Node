var express = require('express');
var router = express.Router();
var usercontroller = require('../controllers/userControllers');

let multer  = require('multer')

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

var upload = multer({ storage: storage }).single("profile_pic")

// pintar usuarios en index
router.get("/", usercontroller.getUsers);

// pintar formulario usuarios
router.get("/register", upload, usercontroller.getRegisterForm);

// pillar usuario registrado que nos postea el action del form
router.post("/register/send", usercontroller.registerUser);

// pintar un solo usuario que nos da el boton de cada card
router.get("/oneUser/:id_user", usercontroller.getOneUser);

//borrar usuario que nos da el boton del perfil único
router.get("/eliminarUser/:id_user", usercontroller.deleteUser);

//pillar partner que nos postea el form del perfil único
router.post("/registerPartner/:id_user", usercontroller.registerPartner);

//borrar partner que nos trae el boton de cada partner
router.get("/eliminarPartner/:id_partner", usercontroller.deletePartner);





module.exports = router;
