const { conn } = require('../config/conn');

const getUser = async () => {
  try {
    const [rows] = await conn.query('SELECT * FROM user;');
    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos ${e}.`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

const createUser = async (params) => {
  try {
    const [rows] = await conn.query('INSERT INTO user (name, lastname, email, password) VALUES ?;', [params]);

    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos crear el user por: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
};

module.exports = {
  getUser,
  create: createUser,
}