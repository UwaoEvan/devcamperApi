const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan')
const bootcamps = require('./routes/bootcamps');

//Load env variables
dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 5000;

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
//Routes

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})