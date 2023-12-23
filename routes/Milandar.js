const express = require("express");
const Item = require("../models/items");
const wrapAsync = require("../utils/wrapAsync");
const route = express.Router({mergeParams:true});


 
//Milandar canteen


route.get("/",(req,res)=>{
    let canteen = "Milandar";
    res.render("./canteens/Milandar.ejs",{canteen});
})

route.get("/Drinks",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen: "Milandar",type:"Drinks"})
    res.render("./canteens/items.ejs",{items});
}))
route.get("/Drinks/:id",wrapAsync( async (req,res)=>{
    let {id} = req.params;
    let items = await Item.findById(id)
    res.render("./canteens/dish_and_reviews.ejs",{items});
}))



route.get("/Snacks",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen: "Milandar",type:"Snacks"})
    res.render("./canteens/items.ejs",{items});
}))  
route.get("/Snacks/:id",wrapAsync( async (req,res)=>{
    let {id} = req.params;
    let items = await Item.findById(id)
    res.render("./canteens/dish_and_reviews.ejs",{items});
}))



route.get("/MC",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen:"Milandar",type:"MC"})
    res.render("./canteens/items.ejs",{items});
}))
route.get("/MC/:id",wrapAsync( async (req,res)=>{
    let {id} = req.params;
    let items = await Item.findById(id)
    res.render("./canteens/dish_and_reviews.ejs",{items});
}))


route.get("/Deserts",wrapAsync(async (req,res)=>{
    let items = await Item.find({canteen: "Milandar",type:"Deserts"})
    res.render("./canteens/items.ejs",{items});
}))
route.get("/Deserts/:id",wrapAsync( async (req,res)=>{
    let {id} = req.params;
    let items = await Item.findById(id)
    res.render("./canteens/dish_and_reviews.ejs",{items});
}))
 

 


module.exports = route;