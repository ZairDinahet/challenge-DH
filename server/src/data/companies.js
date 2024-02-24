const db = require("../database/models");
const { ClientError } = require("../utils/errors");
const { Op } = require("sequelize");

module.exports = {
  list: async () => {
    const data  = await db.Company.findAll();
    if(!data) {
      throw new ClientError("Professions not found", 404)
    }
    return data;
  },
  getOneName: async (name) => {
    console.log(name);
    const data = await db.Company.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      },
      
    });
  
    if (data.length === 0) {
      throw new ClientError("Applicant not found", 404);
    } else {
      return data;
    }
  },
}