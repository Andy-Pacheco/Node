/*
Crear Un servidor con express y su package.json que tenga 5 rutas: 
/ -> que envie una respuesta que sea (Esta es la ruta principal)
/sobreNosotros -> que envie una respuesta que sea  (Bienvenido a la pagina Sobre Nosotros)
/contact/withMe -> que envie una respues que sea (Contactanos y conoce mas detalles)
/Azul ->  que envie una respues que sea (no tiene nada que ver pero es una ruta )
/ultima-ruta ->  que envie una respues que sea (esta seria la ultima ruta del servidor creado con express)
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Esta es la ruta principal')
})

app.get('/contact/withMe', (req, res) => {
    res.send('Contáctanos y conoce más')
  })

  app.get('/Azul', (req, res) => {
    res.send('no tiene nada que ver pero es una ruta')
  })

  app.get('/sobreNosotros', (req, res) => {
    res.send('Bienvenido a la página sobre nosotros')
  })

  app.get('/ultima-ruta', (req, res) => {
    res.send('esta seria la ultima ruta del servidor creado con express')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})