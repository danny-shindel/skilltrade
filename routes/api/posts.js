const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.get('/userposts', postsCtrl.getUserPosts);
router.post('/create', postsCtrl.create);
router.post('/filteredposts', postsCtrl.getFilteredPosts);
router.delete('/deletepost', postsCtrl.deletePost);


module.exports = router;