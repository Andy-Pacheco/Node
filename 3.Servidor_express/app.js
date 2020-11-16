const express = require('express')
const app = express()
const port = 3000

app.get('/codehouse', (req, res) => {
  res.send('Hola, bienvenidos a Codehouse!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})