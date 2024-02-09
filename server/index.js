const server = require('./src/server');
require('dotenv').config();

const PORT = process.env.PORT || 8001;

server.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});
