const mongoose = require("mongoose");

const ProductSchma = new mongoose.Schema(
    {
        title:{type:String, required:true, unique:true},
        desc:{type:String, required:true},
        img: {type:String, required:true},
        categories:{type:Array},
        color:{type:String},
        size:{type:String},
        price:{type:Number, requred:true},
    },
    {timestamps:true}
);

mosule.exports = mongoose.model("Product", ProductSchma);
