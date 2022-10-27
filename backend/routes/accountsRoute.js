const express = require("express");
const router = express.Router();

const {UserModel} = require('../models/UserModel');
const { UserSerializer } = require("../serializer/UserSerializer");

router.get('/get',(req,res)=>{

    UserModel.find({},'-_id -__v').sort([['age',-1]]).then(user=> res.send(user))

})


router.post('/login',(req,res)=>{

    var data = req.body.email;
    UserModel.findOne({email:data})
    .then(user=> {
        if(user)
        {
            if(user.password === req.body.password)
            {
                res.cookie("loggedin",user.username,{httpOnly:true,sameSite:"none",secure:true,signed:true}).json(UserSerializer(user));
                
            }
            else 
            {
                res.status(400).send('Wrong Credentials')
            }
        }
        else { 
            UserModel.findOne({username:data}).then(user=>{
                if(user)
                {
                    if(user.password === req.body.password)
                    {
                        res.cookie("loggedin",user.username,{httpOnly:true,sameSite:"none",secure:true,signed:true}).json(UserSerializer(user));
                        console.log(user)
                        
                    }
                    else 
                    {
                        res.status(400).send('Wrong Credentials')
                    }
                }
                else {
                    res.status(400).send("Wrong Credentials")
                }
            })
        }``
    })
    .catch(err=> {console.log(err); res.status(400).send(err)})
})

router.get('/currentUser',(req,res)=>{

    if(req.user) res.send(req.user);
    else res.status(401).json({message:"Unautherised"})
})

router.get('/logout',(req,res)=>{
    res.cookie("loggedin","").send("Logged Out");
})


router.route('/register')
.post((req,res)=>{
    var user = new UserModel(req.body);
    console.log(user)
    user.save()
    .then(user => {
        res.cookie("loggedin","true",{sameSite:"none",secure:true})
        res.send(user)
    })
    .catch(err=>{
        if(err.code === 11000 && Object.keys(err.keyPattern)[0] === "email")
        {
            res.status(401).send("Email already exists.");
        }
        if(err.code === 11000 && Object.keys(err.keyPattern)[0] === "username")
        {
            res.json({error:"username not available."})
        }
    }
    )
})


module.exports = router;