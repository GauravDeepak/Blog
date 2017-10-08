var express = require('express');
var fs = require('fs');

const router = express.Router();

var Post = require('../model/lpost');

router.get('/posts', (req, res) => {
    Post.find((err, posts) => {
        res.json(posts);
    })
});
router.post('/post', (req, res) => {
    let post = new Post({
        name: req.body.name,
        content: req.body.content,
        like: req.body.like,
        unlike: req.body.unlike
    })
    post.save((err, post) => {
        if (err) {
            res.json({
                msg: 'failed'
            });
        } else {
            res.json({
                msg: 'success'
            });
        }
    });
});
module.exports = router;