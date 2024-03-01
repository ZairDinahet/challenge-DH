const Users = require("../data/users")
const { cachedAsync } = require("../utils")
const { response } = require("../utils")

const loginProcess = async (req, res) => {
  console.log("req",req.body)
  const users = await Users.loggeo(req.body);
  response(res, req, 201, users)
}

module.exports = {
    loginProcess: cachedAsync(loginProcess),
  }