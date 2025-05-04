const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
var cors = require('cors')

dotenv.config();
connectDB();

const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use('/api',userRouter);

const PORT = process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})