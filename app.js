const mongoose = require('mongoose'); // MongoDB work library
require('dotenv').config({ path: './.env' }); // import dotenv - npm package for env variables

const { MONGO_URL } = process.env;

console.log(MONGO_URL);

// connecting to DB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log(555))
  .catch(error => {
    console.log(error.message);
    process.exit(1); // closes all active processes (1 - close undefined errors)
  });
