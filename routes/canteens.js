const express = require("express");
const route = express.Router({mergeParams:true});



route.get("/",(req,res)=>{
    res.render("./canteens/home.ejs")
})


route.get("/ahar",(req,res)=>{
    res.render("./canteens/ahar.ejs");
})

route.get("/cet",(req,res)=>{
    res.render("./canteens/cet.ejs");
})

route.get("/Milandar",(req,res)=>{
    res.render("./canteens/Milandar.ejs");
})

route.get("/suruchi",(req,res)=>{
    res.render("./canteens/suruchi.ejs");
})




module.exports = route;