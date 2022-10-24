const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  comments:{
    type: Object
  }
});

const User = mongoose.model("User", UserSchema);

exports.UserModel = User