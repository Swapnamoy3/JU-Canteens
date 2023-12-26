const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    username:{
        type:String,
        default:"Riju"
    },
    comment: {
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})

const Review = mongoose.model("review",reviewSchema);
module.exports = Review;