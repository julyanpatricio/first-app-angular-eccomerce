require('./src/db.js');
const server = require('./src/app.js');
const { precargaDB } = require('./src/controllers/precargaDB')

// Syncing all the models at once.
server.listen(3001, () => {
  console.log('%s listening at 3001')
  precargaDB() //precargo la DB
});
