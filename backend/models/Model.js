const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema({
  id: Number,
  images : [String],
  caption: String,
  likes:[mongoose.Types.ObjectId],
  createdAt: {
    type:Date,
    default: 5
  },
  author: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  comments:[
    {
      user: mongoose.Types.ObjectId,
      comment:String 
    }
  ]
})

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required:true,
    unique:true,
    
  },
  email: {
    type:String,
    required:true,
    unique:true,

  },
  password: {
    type:String,
    required:true
  },
  ImgUrl: {
    type:String,
  },
  bio:{
    type:String,
  },
  postCounter: {
    type:Number,
    default:0,
  },
  posts: [{type: mongoose.Schema.Types.ObjectId, ref:'Post'}],

  following: [mongoose.Types.ObjectId],
  followers: [mongoose.Types.ObjectId],

},
{
  toObject: {getters: true, setters: true},
  toJSON: {getters: true, setters: true},
  runSettersOnQuery: true
});

PostSchema.pre('save',function(next){

  this.createdAt = Date.now()
  next()
  
})




const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);






exports.UserModel = User  
exports.PostModel = Post  