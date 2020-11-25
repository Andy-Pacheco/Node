let connection = require("../config/db")
userController ={}

// pintar el index.ejs con todos los datos de la BBDD
userController.getUsers = (req, res) =>{
    let sql = `SELECT * FROM users`;
    let sql2 = `SELECT * FROM partners`;

    connection.query(sql, (err, results) =>{
        if(err) throw err;
        connection.query(sql, (err, results2) =>{
            console.log(results)
            console.log(results2)
            res.render("index", {results, results2});
        });
    });
};

// pintar el register.ejs
userController.getRegisterForm = (req, res) =>{
    res.render("register" )
};

// recoger e insertar el posteo y redirigir a /users 
userController.registerUser = (req, res) =>{
    let {name, description} = req.body;
    let img_user = req.file.filename;
    let sql = `INSERT INTO users (name, description, img_user)
                VALUES ("${name}","${description}","${img_user}")`;
    connection.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.redirect("/users");
    });
};

// pintar user.ejs
userController.getOneUser = (req, res) =>{};

// recoger id_user del params y eliminar de BBDD, redirigir a /users
userController.deleteUser = (req, res) =>{};

//recoger id_user del params e insertar partner en BBDD,
// redirigir a /users/oneUser/:id_user
userController.registerPartner = (req, res) =>{};

// recoger el id_partner del params y eliminar de BBDD, 
// redirigir a /users/oneUser/:id_user
userController.deletePartner = (req, res) =>{};



module.exports = userController;