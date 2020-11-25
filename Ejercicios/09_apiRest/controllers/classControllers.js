// Controladores de la ruta class

let connection = require("../config/db")
let classController = {};

classController.getRegister = (req, res) =>{
    res.render("register")
}

classController.getRegisterSend = (req, res) =>{
    //recoger archivo 
    let img_user = req.file.filename;

    let {name, description} = req.body;
  
    let sql = `INSERT INTO users (name, description, img_user) VALUES ("${name}", "${description}", "${img_user}") `
    connection.query(sql, (err, result) =>{
      if (err) throw err;
      res.redirect("/class");
    })
}


classController.getUsers = (req, res) =>{
    let sql = `SELECT * FROM users`;
    let sql2 = `SELECT * FROM technology`;

    connection.query(sql, (err, results) =>{
        if (err) throw err;
        console.log(results);

        connection.query(sql2, (err, results2) =>{
            if (err) throw err;
            console.log(results2);
            res.render('index', {results, results2});
        })
        
    })
}

classController.getOneUser = (req, res) =>{
    let id_user = req.params.id_user;

    let sql = `SELECT * FROM users WHERE id_users = ${id_user}`;
    let sql2 = `SELECT * FROM technology WHERE id_user = ${id_user}`;

    connection.query(sql, (err, results) =>{
        if (err) throw err;

        connection.query(sql2, (err, results2) =>{
            if (err) throw err;
            res.render('user', {results, results2});
        })
        
    })
}

classController.getTech = (req, res) =>{
    let id_user = req.params.id_user;
    let {tech_name, description_tech} = req.body;

    let sql = `INSERT INTO technology (name, id_user, description_tech) 
            VALUES ("${tech_name}", ${id_user}, "${description_tech}")`;

    connection.query(sql, (err, result) =>{
        if (err) throw err;
        res.redirect(`/class/user/${id_user}`);
    })
}

classController.deleteTech = (req, res) =>{
    let id_tech = req.params.id_tech;
    let sql2 = `DELETE FROM technology WHERE id_tech = ${id_tech}`;
    let sql = `SELECT id_user FROM technology WHERE id_tech = ${id_tech}`;

    connection.query(sql, (err, result) =>{
        if (err) throw err;
        let id_user = result[0].id_user;
        connection.query(sql2, (err, result2) =>{
            if(err) throw err;
            res.redirect(`/class/user/${id_user}`)
        })
    })
}

module.exports = classController;