const router = require('express').Router();
const users = require('../controllers/users');

router.get('/:id', users.getUser);

module.exports = router;