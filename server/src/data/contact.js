const { Contact } = require("../database/models");
const { ClientError } = require("../utils/errors");

module.exports = {
  list: async () => {
    const data = await Contact.findAll();
    if (!data) {
      throw new ClientError("Contacts not found", 404);
    } else {
      return data;
    }
  },
  getOne: async (id) => {
    const data = await Contact.findByPk(id);
    if (!data) {
      throw new ClientError("Contacts not found", 404);
    } else {
      return data;
    }
  },
  create: async (dataCreate) => {
    const data = await Contact.create(dataCreate);
    return data;
  },
  delete: async (id) => {
    const data = await Contact.findByPk(id);
    if (!data) {
      throw new ClientError("Contact not found", 404);
    } else {
      await data.destroy();
    }
  },
  update: async (id, dataUpdate) => {
    const data = await Applicant.findByPk(id);

    await data.update(dataUpdate);

    return data;
  },
};
