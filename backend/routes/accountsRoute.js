const express = require("express");
const router = express.Router();

const {UserModel} = require('../models/UserModel')

router.get('/get',(req,res)=>{

    // UserModel.find({},(err,users)=>{

    //     var userMap = {};

    //     users.forEach(function(user) {
    //         userMap[user.name] = {age:user.age};
    //     });

    //     res.send(userMap);

    // })

    UserModel.find({},'-_id -__v').sort([['age',-1]]).then(user=> res.send(user))

})
router.get('/register',(req,res)=>{
    
    const user = new UserModel({"name":"arnab","age":20,"comments":{
        "aparup":"Hello Sir!", "other one":"Big fan sir."
    }});
    
    user.save().then(user => res.send(user)).catch(err=>res.send(user))

})


module.exports = router;