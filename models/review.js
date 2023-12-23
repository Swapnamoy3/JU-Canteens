const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    username:{
        type:String,
        default:"Swapanmoy"
    },
    comment: {
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})

const Review = mongoose.model("review",reviewSchema);
module.exports = Review;