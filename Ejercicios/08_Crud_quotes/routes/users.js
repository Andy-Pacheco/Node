var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController');

// get /users
router.get('/', userController.verUsers);

// verUsuarios
router.get("/verUsuarios", userController.allUsers);

// post guardarUsuario
router.post("/guardarUsuario", userController.guardarUser)

// ver un usuario /verOneUser/:id_user
router.get("/verOneUser/:id_user", userController.getUser)

//delete user /deleteUser/:id_quote
router.get("/deleteQuote/:id_quotes", userController.deleteQuote)

//delete user /deleteUser/:id_user
router.get("/deleteUser/:id_user", userController.deleteUser)

//update user /updateUser/:id_user
router.post("/updateUser/:id_user", userController.updateUser)

//update quote /crearQuote/:id_user
router.post("/createQuote/:id_user", userController.crearQuote)

module.exports = router;
