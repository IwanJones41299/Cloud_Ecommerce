var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    description : {
        type : String
    },
    price : {
        type : Number
    },
    flavour : {
        type : String,
        enum : [ 'Unflavoured', 'Chocolate Brownie', 'Caramel Brownie', 'Strawberry', 'Banana'],
        default : 'Unflavoured'
    },
    size : {
        type : String,
        enum : [ '250g', '500g', '1kg', '2.5kg' ],
        default : '250g'
    },
    stock : { 
        type : Number
    }
});

module.exports.Products = mongoose.model('Products', productSchema);