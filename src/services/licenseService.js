const LicenceModel = require('../models/licenseModel');

const getAllItemsLicences = async () => {
  return await LicenceModel.getAll();
}

module.exports = {
  getAllItemsLicences,
}