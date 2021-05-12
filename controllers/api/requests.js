const User = require('../../models/user');
const Post = require('../../models/post');
const Request = require('../../models/request');


module.exports = {
    create,
    getAll,
};

async function create(req, res) {
    const request = await Request.createRequest( req.body, req.user)
    console.log(request)
    // res.json(posts);
}

async function getAll(req, res) {
    const allRequests = await Request.getAll(req.user)
    res.json(allRequests)
}



