const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.get('/', postsCtrl.get);
router.post('/create', postsCtrl.create);


module.exports = router;