const router = require('../models/users');

const getMaxFollowing = (req, res) => {
  const result = router.getMaxFollowing();
  res.json(result);
};

module.exports = getMaxFollowing;
