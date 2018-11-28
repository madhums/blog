const express = require('express');
const router = express.Router();

const users = require('../api/users');

router.param('user_id', users.load);
router
  .get('/users', users.list)
  .route('/users/:user_id')
  .get(users.show)
  .put(users.update)
  .post(users.create)
  .delete(users.remove);

module.exports = router;
