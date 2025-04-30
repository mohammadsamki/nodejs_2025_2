const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})