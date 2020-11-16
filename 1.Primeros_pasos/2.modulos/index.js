//Ejecutar diferentes funciones de diferentes archivos (cuando sea necesario)
//Archivo Principal
//Palabra reservada require importa X archivo para poder acceder a sus funciones
// Requiero el archivo suma.js y lo guardo en una constante para utilizar a futuro sus funcionalidades
const funcionSuma = require("./suma.js");
const funcionResta = require("./resta.js");
const funcionMulti = require("./multi.js");
const funcionDivi = require("./divi.js");

console.log(funcionSuma.suma(2,3));

let user = {
    name: "Pepito",
    lastname: "Jimenez",
    age: 44
};

console.log(user);