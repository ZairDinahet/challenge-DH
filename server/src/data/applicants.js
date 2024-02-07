const { Applicant, Profession } = require("../database/models")
const { ClientError } = require("../utils/errors")

module.exports = {
  list: async () => {
    const data  = await Applicant.findAll({
      include:[{
        model: db.Profession,
        as: 'professions',
        attributes: ['id','name'],
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
  create: async (dataCreate) => {
    const dataProfession = await Profession.findByPk(dataCreate.profession)

    const data = await Applicant.create(dataCreate);
    await data.addProfession(dataProfession)
    return data;
  },
  delete: async (id) => {
    const data = await Applicant.findByPk(id);
    if (!data) {
      throw new ClientError("Applicant not found ", 404);
    } else {

      await data.setProfessions([])
      await data.destroy();
      return data;
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