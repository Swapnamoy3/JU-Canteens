const express = require("express");
const Item = require("../models/items");
const wrapAsync = require("../utils/wrapAsync");
const route = express.Router({mergeParams:true});


//cet canteen

route.get("/",(req,res)=>{
    let canteen = "cet";
    res.render("./canteens/cet.ejs",{canteen});
})

route.get("/Drinks",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen: "Cet",type:"Drinks"})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/Snacks",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen: "Cet",type:"Snaks"})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/MC",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen:"Cet",type:"MC"})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/Deserts",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen: "Cet",type:"Deserts"})
    res.render("./canteens/items.ejs",{items});
}))

module.exports = route;