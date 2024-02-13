const db = require("../database/models");
const { ClientError } = require("../utils/errors");

module.exports = {
  list: async () => {
    const data  = await db.Company.findAll();
    if(!data) {
      throw new ClientError("Professions not found", 404)
    }
    return data;
  },
}