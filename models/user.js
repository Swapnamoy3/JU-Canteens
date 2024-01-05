const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default: "user"
    }
    
})

userSchema.plugin(passportLocalMongoose);//username ,hashing , salting, and password is added in mongoose schema
const User = mongoose.model("user",userSchema);
module.exports = User;