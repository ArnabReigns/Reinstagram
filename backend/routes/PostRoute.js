const express = require("express");
const router = express.Router();
const {UserModel,PostModel} = require('../models/Model')



router.get('/get',(req,res)=>{

    PostModel.find().populate('author').then(posts => {res.send(posts.reverse())})

    
})
router.get('/get/:username',(req,res)=>{

    PostModel.find({author:req.params.username}).populate('author').then(posts => {res.send(posts.reverse())})

    
})

router.post('/', async (req,res)=>{

    data = req.body;

    const user = await UserModel.findOne({username: data.username})

    user.postCounter += 1
    const newpost = await new PostModel({
        caption: data.caption,
        author: user,
        id: user.postCounter
    })
    user.posts.push(newpost);
    
    newpost.save().then((e)=>{
        user.save().then(user=>{res.send("Posted")})
    }
    )

})


module.exports = router;