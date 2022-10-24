const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://arnabreigns:arnabreigns@cluster0.qrtp9ci.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true}).then(()=>{console.log("Connected")},err=>{console.log(err)})
