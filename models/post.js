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

module.exports = mongoose.model('Post', postSchema);