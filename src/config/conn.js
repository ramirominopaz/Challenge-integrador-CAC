
const mysql = require('mysql2');
require('dotenv').config();

/*
 * Creamos un pool de conexiones
 */

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DBPASS,
  database: process.env.DB,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((error, connection) => {
  if (error) {
    console.error('Error al obtener una conexión:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
    connection.release();
  }
});

module.exports = {
  conn: pool.promise()
};