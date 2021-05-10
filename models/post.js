const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    category: { type: String, required: true },
    title: {
        type: String,
        required: true
    },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true,
});

postSchema.statics.getAll = function (userId) {
    // 'this' is bound to the model
    return this.find({ user: userId });
};

postSchema.statics.filterPosts = async function (filter, location) {
    // 'this' is bound to the model
    const posts = await this.find({}).populate('user');
    const filteredPosts = []
    console.log(posts)
    posts.forEach(post => {
        if (distance(location.latitude, post.user.location.latitude, location.longitude, post.user.location.longitude) <= filter.distance)
            filteredPosts.push(post)
    })
    return filteredPosts
};

module.exports = mongoose.model('Post', postSchema);

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
    console.log(c * r)
    return (c * r);
}