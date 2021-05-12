const User = require('../../models/user');
const Post = require('../../models/post');
const Request = require('../../models/request');


module.exports = {
    create,
};

async function create(req, res) {
    const request = await Request.createRequest( req.body, req.user)
    // await Request.create({ ...req.body, user: req.user._id });
    // const posts = await Post.getAll(req.user._id);
    console.log(request)
    // res.json(posts);
}



