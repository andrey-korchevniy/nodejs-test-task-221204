const router = require('../models/users');
const { RequestError } = require('../helpers/index');

const getUserInfo = (req, res) => {
  const { id } = req.params;
  const result = router.getUserInfo(id);
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = getUserInfo;
