
const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    gender : {
        type :String,
        required : true
    },
    powerLevel : 
    {
        type: Number,
        required:true
    },
    comicbookType : {
        type:String,
        required:true
    },
    realName : 
    {
        type: String
    },
    dateCreated :{
        type : Date,
        default : Date.now()
    }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
