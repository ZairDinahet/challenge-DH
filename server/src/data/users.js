const { User } = require("../database/models")
const { ClientError } = require("../utils/errors")
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = {
  loggeo: async function (dataCreate) {

    console.log("dataCreate in users", dataCreate)
    let loggued = false
    const { email, password } = dataCreate
        const userToLogin = await User.findOne({
          where: { email: email }
        })
        //console.log("usertologin",userToLogin)
        if (userToLogin) {
          let isOkThePassword = bcrypt.compareSync(password, userToLogin.password)
          //console.log("isOkThePassword",isOkThePassword)
          if (isOkThePassword) {
            loggued=true
            //console.log(loggued)
            return (loggued)
            }
          }
        },

        // return res.render('users/login', {
        //   errors: {
        //     email: {
        //       msg: 'No tienes una cuenta registrada'
        //     },
        //   },
        //   oldData: {
        //     email: email
        //   }
        //})
    }
      



