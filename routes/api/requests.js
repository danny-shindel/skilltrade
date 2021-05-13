const express = require('express');
const router = express.Router();
const requestsCtrl = require('../../controllers/api/requests');

router.get('/', requestsCtrl.getAll);
router.post('/create', requestsCtrl.create);

module.exports = router;