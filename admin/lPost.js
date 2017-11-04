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
        unlike: req.body.unlike,
        date: req.body.date
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
router.post('/update',(req,res) =>{
/*
    Post.update({ _id: "59fd695fcb431435b074f849"},{$inc:{like:+1}},(err,result)=>{
        if(err){
            throw err;
        }else{
            console.log('hello')
        }
    })
*/
    console.log("hjkdhkshdkhd-------------------")

   
})
module.exports = router;