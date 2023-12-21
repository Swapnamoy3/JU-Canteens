const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const url = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
const itemSchema = new Schema({
    item:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    }
    ,
    foodImage:{
        type:String,
        default: url,
        // set : (v)=>{v==""? url:v;},
        
    },
    description:{
        type:String,
        required:true
    },
    canteen:{
        type:String,
        required:true,
        enum:["Ahar","Cet","Home","Milandar","Suruchi"]
    },
    type:{
        type:String,
        enum: ['Snaks','Drinks',"MC","Deserts"]

    }
})


const Item = new mongoose.model("item",itemSchema);
module.exports = Item;