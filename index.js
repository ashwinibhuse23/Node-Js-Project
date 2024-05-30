var bodyParser = require('body-parser')
var cors = require("cors");

var connection=require("./db.js")
connection();

var MyModel=require("./models/usermodel.js")





var express=require('express');
var app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))//give to npm body parser
app.use(bodyParser.json())

app.get('/register',function(req,res){

});
app.get('/login',function(req,res){
});
app.get('/users',async function(req,res){
    try{
    var ans = await MyModel.find();
   res.send(ans)
  // res.render("userdata.ejs",{data: ans})
    }
    catch(error){
      res.send("something went wrong")
    }
});
app.get('/add-user',function(req,res){
    res.render("adduser.ejs")
})
app.post('/user-action',async function(req,res){
   // console.log(req.body)
   try{

    var record = new MyModel(req.body);
    var ans = await record.save();
   // res.redirect('/users')
   res.send({"Message":"record inserted"})
   }catch(error){

   }
})
app.listen(8000);