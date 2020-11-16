/*
Crear un servidor con express con todas las librerias que hemos visto hasta ahora
    - crear 3 rutas :
        1. index.html que tenga bootstrap y solo un navbar con 3 enlace->La ruta ('/'),('/home') 
         abren este index.html
        2. Otra ruta sobre-nosotros que tenga el mismo navbar y que abra el sobreNosotros.html
        3. Otra ruta contacto que tenga el mismo navbar y que abra el contacto.html
tengo que utilizar el navbar para moverme de una pagina a otra utilizando la libreria path y las rutas
con el metodo get OSEA CON EL SERVIDOR
*/

const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
  })

  app.get('/sobreNosotros', (req, res) => {
    res.sendFile(path.join(__dirname + "/sobreNosotros.html"))
  })

  app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname + "/contacto.html"))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})