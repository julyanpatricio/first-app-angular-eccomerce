const mongoose = require('mongoose')
require('dotenv').config();
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT} = process.env;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/ecommerce-angular`)

//limpio la base de datos cada vez que inicia el server
mongoose.createConnection(`mongodb://${DB_HOST}:${DB_PORT}/ecommerce-angular`).dropDatabase()

mongoose.connection.on('open', _ => {
  console.log('database connected');

})

mongoose.connection.on('error', err => {
  console.log(err);
})