const { Router } = require('express');
const ctrl = require('../../conttollers/');
const ctrlWrapper = require('../../helpers/ctrlWrapper');

const router = Router();

router.get('/users', ctrlWrapper(ctrl.listUsers));
router.get('/users/:id/friends', ctrlWrapper(ctrl.getUserInfo));
router.get('/max-following', ctrlWrapper(ctrl.getMaxFollowing));
router.get('/not-following', ctrlWrapper(ctrl.getNotFollowing));

module.exports = router;
