
const express = require("express")
const app = express();
const path = require('path');
const port = 8080;
const ejsMate = require("ejs-mate")
const juCanteensRoute = require("./routes/canteens.js")
const userRoute = require("./routes/user.js")
const ExpressError = require("./utils/ExpressError.js");
const User = require("./models/user.js");
const passport = require("passport")
const LocalStatergy = require("passport-local")
const session = require("express-session")
const flash = require("connect-flash");



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



// //modulation assistance
// app.engine("ejs",ejsMate);

// //sessions 
// app.use(session(session))

// //authetication
// passport.use(passport.initialize());
// passport.use(passport.session());
// passport.use(new LocalStatergy(User.authenticate()))//authenticate = login + signup //sstatic method
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


//setting routes
app.use("/",userRoute)
app.use("/canteens",juCanteensRoute)


//error handelling
app.all("*",(req,res,next)=>{
    console.dir(req.path);
    next(new ExpressError(404,"this page is not found"));
})

//handels all error
app.use((err,req,res,next)=>{
    let {status=500,message="somethisg is wrong with server"} = err;
    console.dir(err);
    res.render("./error.ejs",{status,message});
})