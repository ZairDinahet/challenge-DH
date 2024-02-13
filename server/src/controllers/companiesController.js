const Companies = require("../data/companies");
const { cachedAsync } = require("../utils");
const { response } = require("../utils");

const getCompanies = async (req, res) => {
  const companies = await Companies.list();
  response(res, req, 200, companies)
}


module.exports = {
  getCompanies: cachedAsync(getCompanies),
}