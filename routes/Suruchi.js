const express = require("express");
const Item = require("../models/items");
const wrapAsync = require("../utils/wrapAsync");
const route = express.Router({mergeParams:true});

//Suruchi Canteen

route.get("/",(req,res)=>{
    let canteen = "suruchi";
    res.render("./canteens/suruchi.ejs",{canteen});
})

route.get("/Drinks",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen: "Suruchi",type:"Drinks"})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/Snacks",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen: "Suruchi",type:"Snaks"})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/MC",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen:"Suruchi",type:"MC"})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/Deserts",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen: "Suruchi",type:"Deserts"})
    res.render("./canteens/items.ejs",{items});
}))



module.exports = route;