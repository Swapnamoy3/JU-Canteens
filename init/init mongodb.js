const { default: mongoose } = require("mongoose");
const Item = require("../models/items.js")

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/JuCanteens");
}

main();
const data = require("./data.js");
const data2 = require("./data2.js");

async function insert(){
    console.dir(data);
    await Item.deleteMany({});
    await Item.insertMany(data)
    await Item.insertMany(data2)
    console.log("successfull");
}

insert()