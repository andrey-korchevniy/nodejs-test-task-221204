const router = require('../models/users');
const User = require('../models/user');

const listUsers = (req, res) => {
  const result = router.listUsers();
  res.json(result);
};

module.exports = listUsers;
