const mongoose = require('mongoose');
const UserShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

}

)
var user = new mongoose.model('User', UserShema);
module.exports=user;