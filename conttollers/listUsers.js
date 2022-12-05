const router = require('../models/users');

const listUsers = (req, res) => {
  const result = router.listUsers();
  res.json(result);
};

module.exports = listUsers;
