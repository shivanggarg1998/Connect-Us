// dependencies
var mongoose = require('mongoose');


//Schema:
var StatusSchema = new mongoose.Schema({
    name: String,
    user_id: String,
    post_id: String ,
    text: String,
    likeCount:Number,
    commentCount: Number
});

const Status = module.exports = mongoose.model('tblstatus',StatusSchema);

