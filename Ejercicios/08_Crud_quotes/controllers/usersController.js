let connection = require("../config/db")


let userController = {};

userController.verUsers = (req, res) =>{
    res.render("users")
}

userController.allUsers = (req, res) =>{

    let sql = `SELECT * FROM user, quotes WHERE user.id_user = quotes.id_user`

    connection.query(sql, (err,results) =>{
        if (err) throw err;
        console.log(results);
        res.render("users", {results})
    })
    
}

userController.guardarUser = (req, res) =>{
    let {name, quote} = req.body;

    let sql = `INSERT INTO user (name) VALUES ("${name}")`

    connection.query(sql, (err,result) =>{
        if (err) throw err;
        console.log(result)
        let id_user = result.insertId
        let sql2 = `INSERT INTO quotes (quote, id_user) VALUES ("${quote}", ${id_user})`;

        connection.query(sql2, (err, result2) =>{
            if (err) throw err;
            res.send("las dos tablas se han guardado")
        })
    })
}

userController.getUser = (req, res) =>{
    let id_user = req.params.id_user;
    let sql = `SELECT name, quote, user.id_user FROM user, quotes 
                WHERE user.id_user = ${id_user} AND quotes.id_user = ${id_user}`

    connection.query(sql, (err, result) =>{
        if (err) throw err;
        console.log(result[0])
        data = result[0]
        res.render("userProfile", {data})
    })
}

userController.deleteQuote = (req, res) =>{
    let id_quote = req.params.id_quotes;
    let sql = `DELETE FROM quotes WHERE id_quotes = ${id_quote}`;

    connection.query(sql, (err, result) =>{
        if(err) throw err;
        res.redirect("/users/verUsuarios")
    })
}

userController.deleteUser = (req, res) =>{
    let id_user = req.params.id_user;
    let sql = `DELETE FROM quotes WHERE id_user = ${id_user}`;

    connection.query(sql, (err, result) =>{
        if(err) throw err;
        let sql2 = `DELETE FROM user WHERE id_user = ${id_user}`;

        connection.query(sql, (err, result2) =>{
            if(err) throw err;
            res.redirect("/users/verUsuarios")
        })
    })
}

userController.updateUser = (req, res) =>{
    let id_user = req.params.id_user;
    let name = req.body.name;
    let sql = `UPDATE user SET name = "${name}" WHERE id_user = ${id_user}`

    connection.query(sql, (err, result) =>{
        if(err) throw err;
        res.redirect(`/users/verOneUser/${id_user}`)
    })
}

userController.crearQuote = (req, res) =>{
    let id_user = req.params.id_user;
    let quote = req.body.quote;

    let sql = `INSERT INTO quotes (quote, id_user) VALUES ("${quote}", ${id_user})`;

    connection.query(sql, (err, result) =>{
        if(err) throw err;
        res.redirect("/users/verUsuarios")
    })
}
    
module.exports = userController;