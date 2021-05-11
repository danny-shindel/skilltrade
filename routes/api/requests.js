const express = require('express');
const router = express.Router();
const requestsCtrl = require('../../controllers/api/requests');

// POST /api/users
router.post('/', requestsCtrl.create);
// POST /api/users/login
// router.post('/login', usersCtrl.login);
// // GET /api/users/check-token
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;