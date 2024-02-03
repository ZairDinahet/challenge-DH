const db = require('../database/models')
const indexController = {
  index: function(req, res){
    res.send("Hola, server levantado")
  },
  // por el momento para que se creen las tablas
  findAll: async function(req, res){
    const applicants = db.Applicant.findAll()
    const professions = db.Profession.findAll()
  }
}


module.exports = indexController