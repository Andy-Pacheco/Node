var express = require('express');
var router = express.Router();
let connection = require("../config/db")


// Pagina principal sin perros: localhost:3000/
router.get('/', function(req, res, next) {
    let dogName = "Rutillo Estático";
    let dogName2 = "Nodete";
    let dogName3 = "Jason";
  
    res.render("pets", { dogName, dogName2, dogName3 });
});

// Pagina READ con todos los perros en bbdd localhost:3000/read
router.get('/read', function(req, res) {
    let sql = `SELECT name, id_pet FROM dog`;

    connection.query (sql, (err, results) =>{
        if (err) throw err;
        res.render("pets_read", {results});
    })
  
    
});

router.get('/read/oneDog/:id_pet', function(req, res) {
    let id_pet = req.params.id_pet;
    let sql = `SELECT name, id_pet FROM dog WHERE id_pet = ${id_pet}`;

    connection.query (sql, (err, results) =>{
        if (err) throw err;
        res.render("pets_read_oneDog", {results});
    })
  
    
});

router.get('/create', function(req, res, next) {
    
    res.render("pets_create");
});

router.post('/create/send', function(req, res) {
    let dogName = req.body.dog_name;
    let dogRace = req.body.dog_race;
    let dogColor = req.body.dog_color;
    let dogAge = req.body.dog_age;
    let dogOwnerName = req.body.owner_name;

    let sql = `INSERT INTO dog (name, race, color, age, name_owner) VALUES ("${dogName}", "${dogRace}", "${dogColor}", ${dogAge}, "${dogOwnerName}")`;

    connection.query (sql, (err, results) =>{
        if (err) throw err;
        res.render("pets_create_ok");
    })
});

router.get('/delete', function(req, res) {
    let sql = `SELECT name, id_pet FROM dog`;

    connection.query (sql, (err, results) =>{
        if (err) throw err;
        res.render("pets_delete", {results});
    })
  
    
});

router.get('/delete/oneDog/:id_pet', function(req, res) {
    let id_pet = req.params.id_pet;
    let sql = `DELETE FROM dog WHERE id_pet = ${id_pet}`;

    connection.query (sql, (err, results) =>{
        if (err) throw err;
        res.render("pets_delete_ok");
    })
  
    
});

router.get('/update', function(req, res) {
    let sql = `SELECT name, id_pet FROM dog`;

    connection.query (sql, (err, results) =>{
        if (err) throw err;
        res.render("pets_update", {results});
    })
  
    
});

router.get('/update/oneDog/:id_pet', function(req, res) {
    let id_pet = req.params.id_pet;

    res.render("pets_update_form", {id_pet})
  
    
});

router.post("/update/send/:id_pet", (req, res) =>{
    let id_pet = req.params.id_pet;
    let name = req.body.dog_name;
    let dog_race = req.body.dog_race;
    let age = req.body.dog_age;
    let color = req.body.dog_color;
    let owner_name = req.body.owner_name;
  
    let sql = `UPDATE dog SET name = '${name}',
                                race = '${dog_race}',
                                color = '${color}',
                                age = ${age},
                                name_owner = '${owner_name}'
    WHERE id_pet = ${id_pet}`;
  
    connection.query(sql, (err, result) =>{
      if(err) throw err;
      res.render("pets_update_ok");
    })
  })


module.exports = router;
