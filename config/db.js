const mongoose = require('mongoose');
const colors = require('colors')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('connect', conn.connection.host.blue.underline.bold)
}

module.exports = connectDB;