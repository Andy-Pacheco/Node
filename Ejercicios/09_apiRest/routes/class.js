var express = require('express');
var router = express.Router();
var classController = require('../controllers/classControllers');

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

var upload = multer({ storage: storage }).single("img_user")

/*  Estamos en /class */
router.get('/', classController.getUsers);

router.get("/register", classController.getRegister);

router.post("/register/send", upload, classController.getRegisterSend);

router.get("/user/:id_user", classController.getOneUser);

router.post("/technology/send/:id_user", classController.getTech);

router.get("/deleteTech/:id_tech", classController.deleteTech);


module.exports = router;
