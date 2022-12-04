//9qxgCqiXrlmX0AzS
const mongoose = require('mongoose'); // MongoDB work library

const { DB_HOST } = require('./config.');
// connecting to DB
mongoose
  .connect(DB_HOST)
  .then(() => console.log('DB connect !!!!'))
  .catch(error => console.log(error.message));
