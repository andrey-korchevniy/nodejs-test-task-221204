const { connect } = require('mongoose');
const { listen } = require('./app');
const { MONGO_URL } = process.env;

console.log(MONGO_URL);

// connecting to DB
connect(MONGO_URL)
  .then(() => listen(3000))
  .catch(error => {
    console.log(error.message);
    process.exit(1); // close all active processes (1 - close undefined errors)
  });
