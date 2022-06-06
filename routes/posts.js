const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//gets all post
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        sid: req.body.sid
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//gets specific post by sid
router.get('/searchBySid', function (req, res){
    const sid = req.query.sid;
    Post.find({sid: sid}, function(err, response){
        if(err)
        res.send("error");
        else
        res.send(response);
    });
});

module.exports= router;