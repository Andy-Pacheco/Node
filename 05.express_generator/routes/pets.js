var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', (req, res) => {
  res.render('pets');
});

router.get("/namePet", (req, res) => {
  let dogName = "Rutillo Estático";
  let dogName2 = "Nodete";
  let dogName3 = "Jason";

  //1er param el template ejs y el 2o param las variables que se quieran mostrar
  res.render("pets", { dogName, dogName2, dogName3 });
})

module.exports = router;
