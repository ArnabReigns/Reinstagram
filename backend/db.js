const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://arnabreigns:arnabreigns@cluster0.qrtp9ci.mongodb.net/instagram?retryWrites=true&w=majority',
{   useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
}).then(()=>{console.log("Connected")},err=>{console.log(err)})
