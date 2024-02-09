const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { ClientError } = require('./utils/errors')
const applicantsRoutes = require('./routes/applicantsRoutes')
const professionsRoutes = require('./routes/professionsRoutes')

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: true }));
server.use(cors());

// Ruteos
server.use('/applicants', applicantsRoutes)
server.use('/professions', professionsRoutes)


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
