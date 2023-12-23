const express = require("express");
const route = express.Router({mergeParams:true});
const Item = require("../models/items");
const Review = require("../models/review");
const { default: mongoose } = require("mongoose");


route.post("/:canteen/:type/:id",async (req,res)=>{
    let {canteen,type,id} = req.params;//extracting id of item
    let  review = req.body;//extracting review from review
    let newReview = new Review(review);

    console.log("jkdhfskaj");
    console.log(review);

    let item = await Item.findById(id);
    item.reviews.push(newReview);//pushing review in review array of item, only the _id of review gets stored

    await newReview.save();//saving review and updated review
    await item.save();

    res.redirect(`/canteens/${canteen}/${type}/${id}`);
})


module.exports = route;