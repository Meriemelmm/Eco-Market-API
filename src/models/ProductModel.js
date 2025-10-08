const mongoose = require('mongoose');
const ProductShema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,

    }, price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type:String,
        required:true

    },
    imageUrl: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})
var product=new mongooose.model('Product', ProductShema);
module.exports=product;