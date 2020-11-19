//requerimos la libreria
const mysql      = require('mysql');

//createConnection es una funcion para crear la conexion con mysql
// con la config entre llaves
let connection = mysql.createConnection({
    
    // host -> la conexion que vamos a utilizar en produc y post produc cambia
    host :"localhost",
    //user -> usuario de la base de datos que voy a utilizar
    user: "root",
    // password del user
    password: "root",
    // nombre de la base de datos
    database: "primera_conexion"
});

connection.connect(
    (error) => {
        if (error){
            throw error;
        }
        else{
            console.log("Conexion con db correcta");
        }
    }
)

module.exports = connection;
