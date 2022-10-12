const express = require("express")
const app = express;
const mongoose = require("mongoose");

    mongoose.connect('localhost:27017/netflix',
    
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log("DATABASE CONNECTED")
        })
        const port=8000;

        app.listen(port,()=>{
            console.log(`app is running at ${port} `)
        })
        