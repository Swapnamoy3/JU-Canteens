const express = require("express");
const route = express.Router({mergeParams:true})
const mongoose = require("mongoose");
const ExpressError = require("../utils/ExpressError.js");
const User = require("../models/user.js");
const passport = require("passport");
const {is_admin_login} = require("../middleware.js")

route.get("/login",(req,res)=>{
    res.render("./user/login.ejs");
})
 
route.get("/signup",(req,res)=>{
    res.render("./user/signup.ejs");
})

route.post("/signup",async (req,res,next)=>{try{
    let user = req.body;
    if(user.password!=user.confirmpassword){
        return next(new ExpressError(400,"your passwords are not same"));
    }
    const {username,phone,email,password} = user;
    const newUser = new User({username,phone,email});
    console.log("user3",newUser)
    const regUser = await User.register(newUser,password);
    console.log(regUser);
    res.redirect("/canteens");
} catch(e){
    req.flash("error",e.message);
    res.redirect("/canteens");
}
})

route.post("/login",passport.authenticate('local',
{failureRedirect:"/login",
failureFlash:true}),is_admin_login,(req,res)=>{
    res.redirect("/canteens");
})

module.exports = route;