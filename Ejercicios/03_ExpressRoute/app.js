const express = require('express')
const path = require("path")
const app = express()
const port = 3000;

/*
Crear un proyecto nuevo:
instalar librerias
crear carpeta de ruta
Los HTML tendran bootstrap y un H1 que defina la ruta en la que se encuentra
1.Index => 
    ('/')-> mensaje
    ('/sobrenosotros')->html
    ('/contacto')->html
2.futbol => 
    ('/')-> mensaje
    ('/equipo')->html
    ('/goles')->html
3.baloncesto => 
    ('/')-> mensaje
    ('/equipo')->html
    ('/canastas')->html
4.coches => 
    ('/')-> mensaje
    ('/marca')->html
    ('/cilindrada')->html
5.playa => 
    ('/')-> mensaje
    ('/isla')->html
    ('/caribe')->html
*/
let indexRouter = require("./routes/index.js");
let futbolRouter = require("./routes/futbol.js");
let baloncestoRouter = require("./routes/baloncesto.js");
let cochesRouter = require("./routes/coches.js");
let playaRouter = require("./routes/playa.js");

app.use("/", indexRouter);
app.use("/futbol", futbolRouter);
app.use("/baloncesto", baloncestoRouter);
app.use("/coches", cochesRouter);
app.use("/playa", playaRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})