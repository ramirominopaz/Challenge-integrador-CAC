const UserModel = require('../models/authModel');

const getAlluser = async () => {
  return await UserModel.getUser();
}

const getItem = async (id) => {
  return await ItemModel.getOne({product_id: id});
}

const createUser = async (user) => {
  const UserSchema = {
    name: user.name,
    lastname: user.lastname,
    password: user.password,
    email: user.mail,
  }
  return await UserModel.create([Object.values(UserSchema)]);
}

module.exports = {
  createUser,
}