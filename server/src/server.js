const express = require('express');
const morgan = require('morgan');
const { ClientError } = require('./utils/errors')

const server = express();

// Ruteadores

const applicantsRoutes = require('./routes/applicantsRoutes')
const professionsRoutes = require('./routes/professionsRoutes')

server.use(express.json());
server.use(morgan('dev'));

server.use('/', require('./routes'));

// Ruteos

server.use('/applicants', applicantsRoutes)
server.use('/professions', professionsRoutes)


server.use('*', (req, res) => {
  throw new ClientError('404 Not Found', 404)
})

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message})
})
module.exports = server;
