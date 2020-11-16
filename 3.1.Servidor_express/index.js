//NODEMONnpm

const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/asd', (req, res) => {
    res.send('Hello asdassdfsdfsdf')
})


//localhost:3000/miHtml
app.get('/miHtml', (req, res) => {
    //localhost:3000/miHtml
    //sendfile:envia un archivo, el html que quiera ver en el navegador
    //utilizo el join del path para unir __dirname y el archivo
    res.sendFile(path.join(__dirname + "/index.html"))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})