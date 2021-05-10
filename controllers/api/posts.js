const User = require('../../models/user');
const Post = require('../../models/post');


module.exports = {
    getUserPosts,
    getFilteredPosts,
    create,
};

async function getUserPosts(req,res) {
    const posts = await Post.getAll(req.user._id);
    res.json(posts);
}

async function getFilteredPosts(req,res) {
    const user = await User.findById(req.user._id)
    const posts = await Post.filterPosts(req.body, user.location);
    res.json(posts);
}

async function create(req,res) {
    const posts = await Post.create({...req.body, user:req.user._id});
    res.json(posts);
}
