const Prosession = require("../data/professions");
const { cachedAsync } = require("../utils");
const { response } = require("../utils");

const getProfessions = async (req, res) => {
  const professions = await Prosession.list();
  response(res, req, 200, professions)
}


module.exports = {
  getProfessions: cachedAsync(getProfessions),
}