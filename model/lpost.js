var mongoose = require('mongoose');
const LPostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    like: {
        type: String,
        default: 0
    },
    unlike: {
        type: String,
        default:0
    },
    time: {
        type: Date,
        default: Date.now
    }
}, {
        collection: 'blog'
    });
const Post = module.exports = mongoose.model('Post', LPostSchema);