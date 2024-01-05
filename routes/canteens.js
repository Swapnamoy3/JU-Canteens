const express = require("express");
const Item = require("../models/items");
const route = express.Router({mergeParams:true});
const Review = require("../models/review.js")
const wrapAsync = require("../utils/wrapAsync.js")



route.get("/",(req,res)=>{
    res.render("./canteens/home.ejs")
})


route.get("/:ctn",(req,res)=>{
    let{ctn} = req.params;
    let canteen = ctn;
    res.render(`./canteens/${canteen}.ejs`,{canteen});
})

route.get("/:ctn/:typ",wrapAsync( async (req,res)=>{
    let {typ,ctn} = req.params;
    ctn= ctn[0].toUpperCase()+ctn.substring(1);
    console.log(ctn);
    let items = await Item.find({canteen:ctn,type:typ})
    res.render("./canteens/items.ejs",{items});
}))

route.get("/:ctn/:typ/:id",wrapAsync( async (req,res)=>{
    let {ctn,typ,id} = req.params;
    let items = await Item.findById(id);
    reviewArray = await Review.find({_id:items.reviews});

    console.log(reviewArray,"jhdvfha");
    // console.log(req.user.role);
    let is_admin = false;
    if(req.user ){
        is_admin = ( req.user.role == "admin");
        res.render("./canteens/dish_and_reviews.ejs",{items,reviewArray,is_admin});
    }
    res.render("./canteens/dish_and_reviews.ejs",{items,reviewArray,is_admin});
}))



module.exports = route;