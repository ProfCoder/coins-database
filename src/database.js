const mysql = require('mysql');

function connect(app) {
    const connection = mysql.createConnection({
        host: 'users-MacBook-Air.local',
        port: 3306,
        user: 'root',
        password: 'almaz123',
        database: 'COINS'
    });
    
    connection.connect((err) => {
        if (!err) { 
            console.log("DATABASE IS CONNECTED SUCCESSFULLY !!!");
            app(connection);
        } else {
            console.log(err);
        }
        });
}

module.exports = connect;
