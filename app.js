// https://pugjs.org/api/getting-started.html
const express =require("express")
const path = require("path");
// const fs=require("fs");
const app=express();
const bodyparser = require("body-parser");

//getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
const port = 8000;

var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String

});

var contact = mongoose.model('contact', contactSchema);


//Express Specific stuff
app.use('/static',express.static('static'))  //for serving static files
app.use(express.urlencoded())

//pug specific stuff
app.set('view engine', 'pug'); //set the template engine as pug 
app.set('views', path.join(__dirname, 'views'))  //set the views directory

//endpoints
app.get('/',(req,res)=>{
    const params={};
    res.status(200).render('home.pug',params);
});

app.get('/contact',(req,res)=>{
    const params={};
    res.status(200).render('contact.pug',params);
});

app.post('/contact',(req,res)=>{
    var mydata = new contact(req.body);
    mydata.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item was not saved to the database")
    });
    // res.status(200).render('contact.pug');
});

//start the server
app.listen(port ,()=>{
    console.log(`the application started sucessfully on port ${port}`);
});







// PS D:\Web development> cd .\day75-Dance
// PS D:\Web development> cd .\day75-Dance
// PS D:\Web development\day75-Dance> node app.js
// body-parser deprecated undefined extended: provide extended option app.js:25:17  
// the application started sucessfully on port 8000
// PS D:\Web development\day75-Dance> npm install body-parser
// added 2 packages, changed 2 packages, and audited 126 packages in 2s
// 17 packages are looking for funding
//   run `npm fund` for details
// found 0 vulnerabilities



// PS D:\Web development> cd .\day75-Dance
// PS D:\Web development\day75-Dance> mongod  



// PS D:\Web development> cd .\day75-Dance
// PS D:\Web development\day75-Dance> mongosh    
// Current Mongosh Log ID: 654c915683453eb2fdfc6711
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2
// Using MongoDB:          7.0.2
// Using Mongosh:          2.0.2
// For mongosh info see: https://docs.mongodb.com/mongodb-shell/
// ------
//    The server generated these startup warnings when booting
//    2023-11-09T13:00:45.744+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
//    2023-11-09T13:00:45.744+05:30: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
// ------

// test> use contactDance
// switched to db contactDance
// contactDance> show collections
// contacts
// contactDance> db.contact.find()

// contactDance> db.contacts.find()
// [
//   {
//     _id: ObjectId("654c934eb79a032f61b66b20"),
//     name: '1',
//     phone: '2',
//     email: 'vishalkrmonu@gmail.com',
//     address: 'Obra',
//     desc: '4',
//     __v: 0
//   },
//   {
//     _id: ObjectId("654c938b24e387d3f93e93c4"),
//     name: '1',
//     phone: '2',
//     email: 'vishalkrmonu@gmail.com',
//     address: 'Obra',
//     desc: '4',
//     __v: 0
//   },
//   {
//     _id: ObjectId("654c93e53c6b3223f79f68c7"),
//     name: 'Vishal Kumar',
//     phone: '0993 919 0673',
//     email: 'vishalkrmonu@gmail.com',
//     address: 'Obra',
//     desc: '2',
//     __v: 0
//   },
//   {
//     _id: ObjectId("654c9431158b642661fbaac1"),
//     name: 'Vishal Kumar',
//     phone: '0993 919 0673',
//     email: 'vishalkrmonu@gmail.com',
//     address: 'Obra',
//     desc: '3',
//     __v: 0
//   }
// ]