const express = require("express");
const route = express.Router();
const fs = require("fs");
const { resolve } = require("path");
const ExpressError = require("../utils/ExpressError.js");
const Item = require("../models/items.js")
const {isLoggedIn,is_admin} = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
route.get("/dashbord",isLoggedIn,is_admin,(req,res)=>{
    res.render("./admin/dashbord.ejs");
})

route.get("/new",isLoggedIn,is_admin, (req,res)=>{
    console.log("route get for new")
    fs.readFile("./views/admin/new.ejs",(err,data)=>{
        if(err) throw new ExpressError(500,err.message);
        console.log((data).toString());
        res.send({data:data.toString()});
    });
})


route.post("/new",isLoggedIn,is_admin,wrapAsync(async (req,res)=>{
    let item = req.body;
    console.log(item)
    let newItem = new Item(item);
    await newItem.save();
    console.log("saved item")
    res.redirect("/admin/dashbord")
}))


route.get("/edit",isLoggedIn,is_admin, wrapAsync( async (req,res)=>{
    console.log("ds")
    // let items = await Item.find({});

    res.redirect("/canteens");
}))

route.get("/edit/:itemId",isLoggedIn,is_admin,wrapAsync(async (req,res)=>{
    let {itemId} = req.params;
    let item = await Item.findById(itemId)
    // item.save()
    // console.log(item);
    
    res.render("./admin/edit.ejs",{item})
}))
route.put("/edit/:itemId",isLoggedIn,is_admin,wrapAsync(async (req,res)=>{
    let {itemId} = req.params;
    console.log(itemId);
    let newItem = req.body;
    let newitem = await Item.findByIdAndUpdate(itemId,newItem,{runValidators: true});
    // await newitem.save()
    
    res.redirect("/admin/dashbord");
}))

route.delete("/edit/:itemId",isLoggedIn,is_admin,wrapAsync(async (req,res)=>{
    let {itemId} = req.params;
    let newitem = await Item.findByIdAndDelete(itemId);
    // await newitem.save()
    
    res.redirect("/admin/dashbord");
}))

module.exports = route