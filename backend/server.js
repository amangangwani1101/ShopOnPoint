const app = require('./app');
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling UnCaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shuting Down The Server Due To UnCaught Exception`);
    process.exit(1);
});

// Config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require('dotenv').config({path:"backend/config/config.env"});
}

// Connecting To MongoDB
connectDatabase();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Is Working On http://localhost:${process.env.PORT}`);
})

// Unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shuting Down The Server Due To Unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    });
});