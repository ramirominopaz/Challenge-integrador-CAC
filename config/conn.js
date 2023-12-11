const mysql = require('mysql2');
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'characters'
});
connection.connect();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'elpepe',
    password: 'admin123',
    database: 'latiendita',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    });

module.exports = {
    conn: pool.promise()
    };

module.exports = connection;