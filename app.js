//9qxgCqiXrlmX0AzS
const mongoose = require('mongoose'); // MongoDB work library

const DB_HOST =
  'mongodb+srv://nodetest:9qxgCqiXrlmX0AzS@cluster0.1ampk9j.mongodb.net/users?retryWrites=true&w=majority'; //  'users' DB connection string

// connecting to DB
mongoose
  .connect(DB_HOST)
  .then(() => console.log('DB connect'))
  .catch(error => console.log(error.message));
