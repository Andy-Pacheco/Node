const mysql = require('mysql');

let connection = mysql.createConnection({
    
    host :"localhost",
    user: "root",
    password: "root",
    database: "crud"
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