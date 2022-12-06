const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
  subscribe: {
    type: Array,
    default: [],
  },
});

userSchema.post('save', (error, data, next) => {
  const { name, code } = error;
  console.log(name);
  console.log(code);
  next();
});

const User = model('user', userSchema); // creating model

module.exports = User;
