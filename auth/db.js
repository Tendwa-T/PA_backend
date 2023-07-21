const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

async function connectDB() {
    try{
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


module.exports = connectDB;