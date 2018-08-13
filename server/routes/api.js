//dependencies:
var express = require('express');
var uniqid = require('uniqid');
var multer = require('multer');
var mongoose = require('mongoose');

var router = express.Router();

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(cb,file,cb){
        cb(null, file.originalname)
    }
});
//limiting file size
// var fileFilter = (req,file, cb) => {
//     if(file.minetype == 'image/jpeg'|| file.minetype == 'image/jpg' || file.minetype == 'image/png'){
//        cb(null, true); 
//    }else{
//     cb(null, false);
//    }
    
    
// }
// var upload = multer({storage: storage,
//  limits: {
//     fileSize: 1024 * 1024 * 5
// },
// fileFilter: fileFilter
// });

 var upload = multer({storage: storage});
//get models:


var Status = require('../models/status');
router.get('/status', (req,res,next)=>{
Status.find(function(err, status){
	res.json(status);
	});
});
router.post('/status',upload.single('postImage'),(req,res,next)=>{
    console.log(req.file);
    let newStatus = new Status({
        name : req.body.name,
        user_id: mongoose.Types.ObjectId(),
        post_id : uniqid(), 
        text: req.body.text,
        likeCount : req.body.likeCount,
        commentCount : req.body.commentCount,
        post_image: req.file.path
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
