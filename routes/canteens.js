const express = require("express");
const Item = require("../models/items");
const route = express.Router({mergeParams:true});



route.get("/",(req,res)=>{
    res.render("./canteens/home.ejs")
})


//Ahar canteen

route.get("/ahar",(req,res)=>{
    let canteen = "ahar";
    res.render("./canteens/ahar.ejs",{canteen});
})

route.get("/ahar/Drinks",async (req,res)=>{
    let items = await Item.find({canteen:"Ahar",type:"Drinks"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/ahar/Snacks",async (req,res)=>{
    let items = await Item.find({canteen:"Ahar",type:"Snaks"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/ahar/MC",async (req,res)=>{
    let items = await Item.find({canteen:"Ahar",type:"MC"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/ahar/Deserts",async (req,res)=>{
    let items = await Item.find({canteen:"Ahar",type:"Deserts"})
    res.render("./canteens/items.ejs",{items});
})
 



//cet canteen

route.get("/cet",(req,res)=>{
    let canteen = "cet";
    res.render("./canteens/cet.ejs",{canteen});
})

route.get("/cet/Drinks",async (req,res)=>{
    let items = await Item.find({canteen: "Cet",type:"Drinks"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/cet/Snacks",async (req,res)=>{
    let items = await Item.find({canteen: "Cet",type:"Snaks"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/cet/MC",async (req,res)=>{
    let items = await Item.find({canteen:"Cet",type:"MC"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/cet/Deserts",async (req,res)=>{
    let items = await Item.find({canteen: "Cet",type:"Deserts"})
    res.render("./canteens/items.ejs",{items});
})


//Milandar canteen


route.get("/Milandar",(req,res)=>{
    let canteen = "Milandar";
    res.render("./canteens/Milandar.ejs",{canteen});
})

route.get("/Milandar/Drinks",async (req,res)=>{
    let items = await Item.find({canteen: "Milandar",type:"Drinks"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/Milandar/Snacks",async (req,res)=>{
    let items = await Item.find({canteen: "Milandar",type:"Snaks"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/Milandar/MC",async (req,res)=>{
    let items = await Item.find({canteen:"Milandar",type:"MC"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/Milandar/Deserts",async (req,res)=>{
    let items = await Item.find({canteen: "Milandar",type:"Deserts"})
    res.render("./canteens/items.ejs",{items});
})


//Suruchi Canteen

route.get("/suruchi",(req,res)=>{
    let canteen = "suruchi";
    res.render("./canteens/suruchi.ejs",{canteen});
})

route.get("/suruchi/Drinks",async (req,res)=>{
    let items = await Item.find({canteen: "Suruchi",type:"Drinks"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/suruchi/Snacks",async (req,res)=>{
    let items = await Item.find({canteen: "Suruchi",type:"Snaks"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/suruchi/MC",async (req,res)=>{
    let items = await Item.find({canteen:"Suruchi",type:"MC"})
    res.render("./canteens/items.ejs",{items});
})

route.get("/suruchi/Deserts",async (req,res)=>{
    let items = await Item.find({canteen: "Suruchi",type:"Deserts"})
    res.render("./canteens/items.ejs",{items});
})



module.exports = route;