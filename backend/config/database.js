const mongoose = require('mongoose');


const connectDatabase = ( )=>{
    mongoose.connect(process.env.DB_URL).then((data)=>{
        console.log(`MongoDB Connected With Server:${data.connection.host}`);
    });
};
module.exports = connectDatabase;