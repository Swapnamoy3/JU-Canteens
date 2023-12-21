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
    
})

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("user",userSchema);
module.exports = User;