const db = require("../database/models")

module.exports = {
  list: async () => {
    const data  = await db.Profession.findAll();
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