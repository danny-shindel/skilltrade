const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    skills: {type: Array, required:true},
    distance: {type: Number, required: true},
    status: {type: String, required:true, default:"pending"},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    message: { type: String, required: true, default:"no message" },
}, {
    timestamps: true,
});