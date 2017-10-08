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
    },
    unlike: {
        type: String
    }
},{
    collection:'blog'
});
const Post = module.exports = mongoose.model('Post', LPostSchema);