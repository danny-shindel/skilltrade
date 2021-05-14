const User = require('../../models/user');
const Post = require('../../models/post');
const Request = require('../../models/request');


module.exports = {
    create,
    getAll,
    updateStatus,
    deleteRequest
};

async function create(req, res) {
    await Request.createRequest( req.body, req.user)
    const requests = await Request.getSent(req.user)
    res.json(requests)
}

async function getAll(req, res) {
    const allRequests = await Request.getAll(req.user)
    res.json(allRequests)
}

async function updateStatus(req, res) {
    await Request.findByIdAndUpdate(req.body.id, { 'status':req.body.status })
    const allRequests = await Request.getAll(req.user)
    res.json(allRequests)
}

async function deleteRequest(req, res) {
    await Request.findByIdAndDelete(req.params.id)
    const requests = await Request.getSent(req.user)
    const ref = await Request.getRef(req.user)
    res.json({'requests':requests,'reference':ref})
}





