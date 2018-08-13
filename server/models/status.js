// dependencies
var mongoose = require('mongoose');


//Schema:
var StatusSchema = new mongoose.Schema({
    name: String,
    user_id: String,
    post_id: String ,
    text: String,
    likeCount:Number,
    commentCount: Number,
    post_image: {type: String, required: true}
});

const Status = module.exports = mongoose.model('tblstatus',StatusSchema);

