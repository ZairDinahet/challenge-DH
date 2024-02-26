const { Applicant, Profession } = require("../database/models")
const { ClientError } = require("../utils/errors")
const { Op } = require("sequelize");

module.exports = {
  list: async () => {
    const data = await Applicant.findAll({
      include: [{
        model: Profession,
        as: 'professions',
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        }
      }]
    });
    if (!data) {
      throw new ClientError("Applicants not found", 404);
    } else {
      return data;
    }
  },
  getOne: async (id) => {
    const data = await Applicant.findByPk(id,
      {
        include: [{
          model: Profession,
          as: 'professions',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          }
        }]
      });
    if (!data) {
      throw new ClientError("Applicant not found", 404);
    } else {
      return data;
    }
  },
  getOneName: async (name) => {
    console.log(name);
    const data = await Applicant.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      },
      include: [{
        model: Profession,
        as: 'professions',
        attributes: ['name'],
        through: {
          attributes: [],
        }
      }],
    });

    if (data.length === 0) {
      throw new ClientError("Applicant not found", 404);
    } else {
      return data;
    }
  },
 
  create: async (dataCreate, req) => {
    //Aplico la referencia a la imagen del aplicante
    const file = req.file;
    dataCreate.image = file?.filename
    console.log("datacreate",dataCreate)
    const data = await Applicant.create(dataCreate);
    return data;
  },
  delete: async (id) => {
    const data = await Applicant.findByPk(id);
    if (!data) {
      throw new ClientError("Applicant not found", 404);
    } else {

      await data.setProfessions([])
      await data.destroy();
    }
  },
  update: async (id, dataUpdate) => {

    const data = await Applicant.findByPk(id,
      {
        include: [{
          model: Profession,
          as: 'professions',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          }
        }]
      })

    await data.update(dataUpdate);
    await data.setProfessions([dataUpdate.profession])

    return data;
  }
}