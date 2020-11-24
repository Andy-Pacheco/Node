const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'controllers'
})
connection.connect(
    function(error) {
        if (error) {
            throw error;
        } else {
            console.log('Conexion with DB successful')
        }
    }
)
module.exports = connection;