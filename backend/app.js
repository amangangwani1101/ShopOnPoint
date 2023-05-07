const express = require('express');
const errorMiddleWare = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();
const path = require("path")

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

// Config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require('dotenv').config({path:"backend/config/config.env"});
}

// Route Imports
const product = require("./routes/productRoute");
const user = require('./routes/userRoute');
const order = require("./routes/orderRoutes");
const payment = require("./routes/paymentRoutes");


app.use('/api/v1',product);
app.use('/api/v1',user);
app.use('/api/v1',order);
app.use('/api/v1',payment);


app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
});
// MiddleWare For Errors
app.use(errorMiddleWare);

module.exports = app;