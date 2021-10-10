/*
Muhammad Ahsan
135698207
mahsan15@myseneca.ca
WEB422
*/
const express = require("express");
const mongoose = require('mongoose');
const customerController = require("./controllers/CustomerController.js");
const productController = require("./controllers/ProductController.js");
if(process.env.NODE_ENV!="production")
{
    require('dotenv').config({ path: 'config/keys.env' });
}
const app = express();


app.use(express.json());

app.use("/customers",customerController);

app.use("/products",productController);


app.listen(process.env.PORT,()=>{
    console.log(`RESTful API is up and running on PoRT ${process.env.PORT}`);

    mongoose.connect(process.env.MONGODB_CONN_STRING)
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    })


})