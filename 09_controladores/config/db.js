const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Controllers'
})
connection.connect(
    function(error) {
        if (error) {
            throw error;
        } else {
            console.log('Conexion a Crud correcta')
        }
    }
)
module.exports = connection;