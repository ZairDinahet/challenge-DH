const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const { ClientError } = require('./utils/errors')
const applicantsRoutes = require('./routes/applicantsRoutes')
const professionsRoutes = require('./routes/professionsRoutes')
const companiesRoutes = require('./routes/companiesRoutes')
const contactRoutes = require('./routes/contactRoutes')
const loginRoutes = require('./routes/loginRoutes')

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(session({
    secret:'secret',
    saveUninitialized:false,
    // cookie:{
    //   secure:false,
    //   maxAge:1000 * 60 * 24
    // }
}))
// Ruteos
server.use('/applicants', applicantsRoutes)
server.use('/professions', professionsRoutes)
server.use('/companies', companiesRoutes)
server.use('/contact', contactRoutes)
server.use('/login', loginRoutes)

server.use('*', (req, res) => {
  throw new ClientError('404 Not Found', 404)
})

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    meta: {
      error: true,
      status: err.statusCode,
      url: req.protocol + '://' + req.get('host') + req.url,
      message: err.message
    },  
  })
})

module.exports = server;
