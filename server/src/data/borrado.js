const bcrypt = require('bcrypt');

let contrasena = "1234"
const hasheo = bcrypt.hashSync(contrasena, 10)
console.log (hasheo)