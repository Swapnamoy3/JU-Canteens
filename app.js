
const express = require("express")
const app = express();
const path = require('path');
const port = 8080;
const ejsMate = require("ejs-mate")
const userRoute = require("./routes/user.js")
const ExpressError = require("./utils/ExpressError.js");
const method_override = require("method-override"); 

const User = require("./models/user.js");
const passport = require("passport")
const LocalStatergy = require("passport-local")
const session = require("express-session")
const flash = require("connect-flash");
const sessionOptions = {
    secter: "allOut",
    resave: false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + (1000)*(60*60*24*3),
        maxAge: (1000)*(60*60*24*3),
        httpOnly: true
    }
}



///----------------------------canteens------------
const canteenRoute = require("./routes/canteens.js")
///----------------------------------------------
///----------------------------review------------
const reviewRoute = require("./routes/review handeller.js");
///-------------------------------------------------



//DBMS releated declerations
const { default: mongoose } = require("mongoose");

// connection to mongoose
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/JuCanteens");
}
main().catch((err)=>{
    console.dir(err);
})


//initialization
app.listen(port);
app.set("view engin","ejs");
app.set("views",path.join(__dirname,"/views"));


//body parser 
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json());



//modulation assistance
app.use(method_override("_method"))
app.engine("ejs",ejsMate);



///--------------------path printer----
app.use((req,res,next)=>{
    console.log(req.path);
    console.log(req.method);
    next()
})
///------------------------------------


//setting routes

app.use("/canteens",canteenRoute);
app.use("/canteens",reviewRoute);
app.use("/",userRoute);





//error handelling
app.all("*",(req,res,next)=>{
    // console.log(req);
    next(new ExpressError(404,"this page is not found"));
})

//handels all error
app.use((err,req,res,next)=>{
    let {status=500,message="somethisg is wrong with server"} = err;
    console.dir(err);
    res.status(status).render("error.ejs",{status,message});
})