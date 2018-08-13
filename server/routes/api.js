//dependencies:
var express = require('express');
var uniqid = require('uniqid');
var mongoose = require('mongoose');
var router = express.Router();

//get models:

var Status = require('../models/status');
router.get('/status', (req,res,next)=>{
Status.find(function(err, status){
	res.json(status);
	});
});
router.post('/status',(req,res,next)=>{
    let newStatus = new Status({
        name : req.body.name,
        user_id: mongoose.Types.ObjectId(),
        post_id : uniqid(), 
        text: req.body.text,
        likeCount : req.body.likeCount,
        commentCount : req.body.commentCount
    
     });
    newStatus.save((err,status)=>{
        if(err)
        {
            res.json({msg : 'failed to load status'});
        }
        else{
            res.json({msg : 'Status added'});
        }
    });
    });


//return router:
module.exports = router;
