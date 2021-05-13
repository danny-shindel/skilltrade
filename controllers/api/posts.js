const User = require('../../models/user');
const Post = require('../../models/post');
const Request = require('../../models/request');


module.exports = {
    getUserPosts,
    getFilteredPosts,
    create,
    deletePost,
    updatePost,
};

async function getUserPosts(req,res) {
    const posts = await Post.getAll(req.user._id);
    res.json(posts);
}

async function getFilteredPosts(req,res) {
    const user = await User.findById(req.user._id)
    const posts = await Post.filterPosts(req.body, user.location, req.user);
    res.json(posts);
}

async function create(req,res) {
    await Post.create({...req.body, user:req.user._id});
    const posts = await Post.getAll(req.user._id);
    res.json(posts);
}

async function deletePost(req,res) {
    await Post.findOneAndDelete({_id:req.body._id, user:req.user._id});
    await Request.deleteAssociated(req.body._id)
    const posts = await Post.getAll(req.user._id);
    const allRequests = await Request.getAll(req.user)
    res.json({'posts':posts, 'requests':allRequests});
}

async function updatePost(req,res) {
    await Post.findOneAndUpdate({_id:req.body._id, user:req.user._id},{...req.body});
    const posts = await Post.getAll(req.user._id);
    res.json(posts);
}
