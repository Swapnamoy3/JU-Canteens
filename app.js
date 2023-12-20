const express = require("express")
const app = express();
const path = require('path');
const port = 8080;
const ejsMate = require("ejs-mate")
const juCanteensRoute = require("./routes/canteens.js")
const userRoute = require("./routes/user.js")


//initialization
app.listen(port);
app.set("view engin","ejs");
app.set("views",path.join(__dirname,"/views"));


//body parser 
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:false}))
app.use(express.json());



//modulation assistance
app.engine("ejs",ejsMate);


//setting routes
app.use("/",userRoute)
app.use("/canteens",juCanteensRoute)