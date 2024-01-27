const express = require('express');
const app = express()
app.use(express.json())
require('dotenv').config()

const router = require('./router/router')
app.use(router)
const mongoose = require('mongoose');


const port = process.env.port
const db = process.env.dblink

mongoose.connect(db) 
.then(()=>{
    app.listen(port, ()=>{
        console.log(`This server is listening on port: ${port}`);
    })
    console.log(`Database connection established successfully`);
})
.catch((err)=>{
    console.log(`Error connecting to database: ${err.message}`);
})




