const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    skills: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    distance: {type: Number, required: true},
    status: {type: String, required:true, default:"pending"},
    barterUser: { type: Schema.Types.ObjectId, ref: 'User' },
    postUser: { type: Schema.Types.ObjectId, ref: 'User' },
    message: { type: String, default:"no message" },
}, {
    timestamps: true,
});


requestSchema.statics.createRequest = async function(body, user) {
    const barterDistance = distance(body.post.user.location.latitude, user.location.latitude, body.post.user.location.longitude, user.location.longitude)
    const request = await this.create({...body, 'distance':barterDistance, 'barterUser':user._id, 'postUser':body.post.user._id})
    return request
}

requestSchema.statics.getAll = async function (user) {
    const userSent = await this.find({ 'barterUser': user._id }).populate('post').populate('skills').exec()
    const userRecieve = await this.find({ 'postUser': user._id }).populate('post').populate('skills').exec()
    const sent = userSent.filter(function(request){ return request.status === 'pending' || request.status==='denied'})
    const sentPending = userSent.filter(function(request){ return request.status === 'pending'})
    const pending = userRecieve.filter(function(request){ return request.status === 'pending' })
    const filter1 = userSent.filter(function(request){ return request.status === 'accepted'})
    const filter2 = userRecieve.filter(function(request){ return request.status === 'accepted'})
    const accepted = filter1.concat(filter2)
    const crossReferenceList = filter1.concat(sentPending)
    const crossReference = crossReferenceList.map(function(request){return request.post._id})
    console.log(crossReference)
    return { 'accepted':accepted, 'pending':pending, 'sent':sent, 'crossReference':crossReference }
}

module.exports = mongoose.model('Request', requestSchema);

function distance(lat1, lat2, lon1, lon2) {
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
        + Math.cos(lat1) * Math.cos(lat2)
        * Math.pow(Math.sin(dlon / 2), 2);
    let c = 2 * Math.asin(Math.sqrt(a));
    let r = 3965;
    return (c * r);
}