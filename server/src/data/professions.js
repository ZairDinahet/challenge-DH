const db = require("../database/models");
const { ClientError } = require("../utils/errors");

module.exports = {
  list: async () => {
    const data  = await db.Profession.findAll();
    if(!data) {
      throw new ClientError("Professions not found", 404)
    }
    return data;
  },
  getOne: async (id) => {
  },
  create: async (dataCreate) => {
    const data = await db.Profession.create(dataCreate);
    return data;
  },
  delete: async (id) => {
  },
  update: async (id, data) => {
  }
}