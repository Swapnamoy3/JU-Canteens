const express = require("express");
const route = express.Router({mergeParams:true})
const mongoose = require("mongoose");
const ExpressError = require("../utils/ExpressError");
const User = require("../models/user.js")

route.get("/login",(req,res)=>{
    res.render("./user/login.ejs");
})

route.get("/signup",(req,res)=>{
    res.render("./user/signup.ejs");
})

route.post("/signup",async (req,res,next)=>{
    let user = req.body;
    if(user.password!=user.confirmpassword){
        return next(new ExpressError(400,"your passwords are not same"));
    }
    console.log(user)
    let newUser = new User(user);
    await newUser.save();
    console.log("new user saved");
    res.redirect("/canteens");
})

module.exports = route;