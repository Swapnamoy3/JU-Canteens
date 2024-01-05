const Review = require("./models/review")
const Admin  = require("./models/admin.js");
const User = require("./models/user.js")


function isLoggedIn(req,res,next){
    if(!req.isAuthenticated()){
        req.flash("error","user must be logged in");
        console.log("555");
        res.redirect("/login")
    }else next()
}

const is_author = async (req,res,next)=>{
    let reviewId = req.params.reviewId;
    let review = await  Review.findById(reviewId);
    console.log((review.author)!=(req.user._id),"_",review.author,"_",req.user._id)
    if(!((review.author).equals(req.user._id))){
       req.flash("error","you dont have access to this review")
       return res.redirect("/canteens")
    }
    next(); 
}

const is_admin = async (req,res,next)=>{
    if(req.user.role == "admin"){
        next();
    }
    else{
        res.redirect("/canteens");
    }
}
const is_admin_login = async (req,res,next)=>{
    if( req.user && req.user.role == "admin"){
        res.redirect("/admin/dashbord")
    }
    else next();
}

module.exports = {isLoggedIn,is_author,is_admin,is_admin_login}