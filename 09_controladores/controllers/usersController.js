//Creo un controlador y ejecuto la lógica
//llamo a la config de bd para poder hacer la logica de querys aqui

let connection = require("../config/db")
let sha1 = require("sha1")
let multer = require("multer")

// Creo un controlador con un objeto vacio donde voy a guardar todos mis métodos
let userController = {};

//Creamos un método que se llama enviarMensaje y que guardamos en el
//objeto vacío para poder usarlo en otro archivo
userController.enviarMensaje = (req, res) =>{
    res.send("esto funciona perfectamente")
}

userController.verUsuario = (req, res) =>{
    res.render("users");
};

userController.recogerUsuario = (req, res) =>{
    let {name} = req.body;
    
    let sql =`INSERT INTO user (name) VALUES ("${name}")`

    connection.query(sql, (err, result) =>{
        if (err) throw err;
        res.send("OK")
    })
}

userController.deleteUser = (req, res) =>{
    let id_user = req.params.id_user;

    let sql = `DELETE FROM user WHERE id_user = "${id_user}"`;

    connection.query (sql, (err, results) =>{
        if (err) throw err;
        res.json(results)
    })
}
module.exports = userController;