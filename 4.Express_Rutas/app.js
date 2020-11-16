const express = require('express');
const app = express();
const port = 3000;
// la libreria body-parser nos permite recoger todo tipo de datos que nos llegan de un
//formulario tipo JSON
const bodyParser = require('body-parser')


//Requiero el archivo index.js que es nuestro archivo que contiene las rutas y las funcionalidades
let indexRouter = require("./routes/index.js");
let usersRouter = require("./routes/users.js");
let animalsRouter = require("./routes/animals.js");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//De app, UTILIZE (use) lo siguiente -> la ruta principal
//Ruta principal es lo que viene después de localhost:3000

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/animals", animalsRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});