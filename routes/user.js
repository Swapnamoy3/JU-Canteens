const express = require("express");
const route = express.Router({mergeParams:true})

route.get("/login",(req,res)=>{
    res.render("./user/login.ejs");
})

route.get("/signup",(req,res)=>{
    res.render("./user/signup.ejs");
})

module.exports = route;