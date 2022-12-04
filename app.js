//9qxgCqiXrlmX0AzS
const mongoose = require('mongoose'); // MongoDB work library
require('dotenv').config({ path: './.env' }); // import dotenv - npm package for env variables

const { DB_HOST } = process.env;
// connecting to DB
mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch(error => {
    console.log(error.message);
    process.exit(1); // closes all active processes (1 - close undefined errors)
  });
