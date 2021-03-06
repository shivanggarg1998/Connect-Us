//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
var path = require('path');

const route = require('./routes/route');
//connect to mongoose db
mongoose.connect('mongodb://shiv:shiv123@ds018168.mlab.com:18168/connectus');
//on connected
mongoose.connection.on('connected',()=>{
console.log('connected to database :)');
});
//on error
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error is ' + err);
    }
});
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
// const MongoClient = require('mongodb').MongoClient;
//
// // replace the uri string with your connection string.
// const uri = "mongodb://shiv:shiv123@ds018168.mlab.com:18168/connectus"
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("connectus").collection("UserInfo");
//    // perform actions on the collection object
//    client.close();
// });
//port no
const port = 4200;
//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());
app.use('/uploads', express.static('uploads')) ;

//static files

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);
app.use('/api', require('./routes/api'));
 //testing
 app.get('/',(req,res)=>{
     res.send('foobar');
 });



app.listen(port,() => {
console.log('Server started at port :'+port);

});
