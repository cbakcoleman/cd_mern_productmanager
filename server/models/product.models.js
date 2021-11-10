// 4. CREATE THE MODEL SCHEMA
const mongoose = require("mongoose");

const ProductScheuma = new mongoose.Schema({
    title : {
        type : String,
        require : [true, "Product {PATH} is required"],
        minlength : [3, "Product {PATH} must be at least 3 characters long"]
    },
    price : {
        type : Number,
        require : [true, "Product {PATH} is required"],
        min : [0.99, "Product {PATH} can not be less that $0.99"]
    },
    description : {
        type : String,
        require : [true, "Product {PATH} is required"],
        minlength : [3, "Product {PATH} must be at least 3 characters long"]
    },
    isFavorited : {
        type : Boolean,
        default : false
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;