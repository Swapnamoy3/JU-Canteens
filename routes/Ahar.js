const express = require("express");
const Item = require("../models/items");
const route = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync")

//Ahar canteen

route.get("/",(req,res)=>{
    let canteen = "ahar";
    res.render("./canteens/ahar.ejs",{canteen});
})

route.get("/Drinks",wrapAsync( async (req,res)=>{
    let items = await Item.find({canteen:"Ahar",type:"Drinks"})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/Snacks",wrapAsync( async (req,res)=>{
    let items = await Item.find({canteen:"Ahar",type:"Snaks"})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/MC",wrapAsync (async (req,res)=>{
    let items = await Item.find({canteen:"Ahar",type:"MC"})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/Deserts",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen:"Ahar",type:"Deserts"})
    res.render("./canteens/items.ejs",{items});
}))
 


module.exports = route;