const router = require('../models/users');

const getNotFollowing = (req, res) => {
  const result = router.getNotFollowing();
  res.json(result);
};

module.exports = getNotFollowing;
