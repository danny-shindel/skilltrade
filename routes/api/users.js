const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', usersCtrl.create);
router.post('/signup', usersCtrl.createNoPic);
router.post('/login', usersCtrl.login);

module.exports = router;