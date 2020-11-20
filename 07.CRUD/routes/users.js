var express = require('express');
var router = express.Router();
let connection = require("../config/db")





//CRUD
//READ localhost:3000/users
router.get('/', function(req, res, next) {
  let sql = "SELECT * FROM users";

  connection.query(sql, (err, results) =>{
    if (err) throw err;
    res.json(results)
  })
});

// READ ONE USER localhost:3000/users/oneUser/:id_user

router.get("/oneUser/:id_user", (req, res) =>{
  let id_user = req.params.id_user;

  let sql = `SELECT * FROM users WHERE id_user = ${id_user}`;

  connection.query(sql, (err, results) =>{
    if (err) throw err;
    res.json(results)
  })
});

//CREATE POST localhost:3000/users/createUser

router.post("/createUser", (req, res) =>{
  let name = req.body.name;
  let last_name = req.body.last_name;
  let age = req.body.age;
  let color = req.body.color;
  let song = req.body.song;

  let sql = `INSERT INTO users (name, last_name, age, color, song)
            VALUES ('${name}', '${last_name}', ${age}, '${color}', '${song}')`;
  
  connection.query(sql, (err, results) =>{
    if (err) throw err;
    res.send("ok");
  })          
})

//DELETE GET/POST/DELETE localhost:3000/users/deleteUser/:id_user

router.get("/deleteUser/:id_user", (req, res) =>{
  let id_user = req.params.id_user;
  let sql = `DELETE FROM users WHERE id_user='${id_user}'`;

  connection.query(sql, (err,result) =>{
    if (err) throw err;
    res.send(`Usuario número ${id_user} eliminado`)
  });
});

router.post("/deleteUser", (req, res) =>{
  let id_user = req.body.id_user;
  let sql =`DELETE FROM users WHERE id_user='${id_user}'`;
  
  connection.query(sql, (err, results) =>{
    if (err) throw err;
    res.send("ok");
  })          
});


// UPDATE localhost:3000/users/updateUser/:id_user

router.post("/updateUser/:id_user", (req, res) =>{
  let id_user = req.params.id_user;
  let name = req.body.name;
  let last_name = req.body.last_name;
  let age = req.body.age;
  let color = req.body.color;
  let song = req.body.song;

  let sql = `UPDATE users SET name = '${name}',
                              last_name = '${last_name}',
                              age = ${age},
                              color = '${color}',
                              song = '${song}'
  WHERE id_user = ${id_user}`;

  connection.query(sql, (err, result) =>{
    if(err) throw err;
    res.json(result);
  })
})


module.exports = router;