const express = require("express");
const route = express.Router({mergeParams:true});
const Item = require("../models/items");
const Review = require("../models/review");
const { default: mongoose } = require("mongoose");
const {isLoggedIn,is_author} = require("../middleware.js");

route.post("/:canteen/:type/:id",isLoggedIn,async (req,res,next)=>{
    let {canteen,type,id} = req.params;//extracting id of item


    // res.redirect(`/canteens/${canteen}/${type}/${id}`);

    let  review = req.body;//extracting review from review
    review.author = req.user;
    review.username = req.user.username;
    
    console.log(req.user)
    let newReview = new Review(review);

    // console.log(review);

    let item = await Item.findById(id);
    item.reviews.push(newReview);//pushing review in review array of item, only the _id of review gets stored

    await newReview.save();//saving review and updated review
    await item.save();
    
    req.flash("success","new review addad");
    console.log(req.user)
    res.redirect(`/canteens/${canteen}/${type}/${id}`);
})

route.delete("/:canteen/:type/:id/:reviewId",isLoggedIn,is_author,async (req,res)=>{

    

    let {canteen,type,id,reviewId} = req.params;
    await Review.findByIdAndDelete(reviewId);
    await Item.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});

    req.flash("success","review deleted");
    res.redirect(`/canteens/${canteen}/${type}/${id}`);
})


module.exports = route;