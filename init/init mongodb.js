const { default: mongoose } = require("mongoose");
const Item = require("../models/items.js")
const User = require("../models/user.js")
const Admin = require("../models/admin.js")
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/JuCanteens");
}

main();
const data = require("./data.js");
const data2 = require("./data2.js");
const data3 = require("./data3.js");

async function insert(){
    console.dir(data);
    await Item.deleteMany({});
    await Item.insertMany(data)
    await Item.insertMany(data2)
    await Item.insertMany(data3)
    console.log("successfull");
}


async function resetUsers(){
    await User.deleteMany({});
}
// insert()
resetUsers()

async function adminInit(){
    let admin  = new Admin({id:"658b16971f1f526e4a275bd6"});
    await admin.save();
}

adminInit()