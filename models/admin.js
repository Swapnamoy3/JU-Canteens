const mongoose = require("mongoose");
const Schema = mongoose.Schema

const passportLocalMongoose = require("passport-local-mongoose")


const adminSchema = new Schema({
    id:{
        type: Schema.Types.ObjectId,
        ref:"user"
    }
})


const Admin = new mongoose.model("admin",adminSchema);
module.exports = Admin;