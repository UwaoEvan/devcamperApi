const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan')
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');
const colors = require('colors');

//Load env variables
dotenv.config({ path: './.env' });

//Connect to DB
connectDB();

const PORT = process.env.PORT || 5000;

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Body Parser

app.use(express.json());
//Routes

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV.cyan} mode on port ${PORT.cyan}`)
})

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message.red}`);
    //Close server
    server.close(() => process.exit(1))
});