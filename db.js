const mongoose = require('mongoose');
async function connection(){
    var ans =await mongoose.connect('mongodb+srv://admin:admin@cluster0.m7mfs6g.mongodb.net/sample');
   // console.log(ans);
}
module.exports=connection;