const mongoose=require('mongoose');
CategoryShema= new mongoose.Schema({
 name:{
    type:String,
    required:true,
 }


})
var category= new mongoose.model('Category',CategoryShema);
module.exports=category;