const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const messageRoutes=require('./routes/MessageRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api',messageRoutes);
app.get('/',async(req,res)=>{
    res.send('hello')
})

const PORT = 5000;

app.listen(PORT, console.log(`Server running in development mode on port ${PORT}`.yellow.bold));

