const mongoose=require('mongoose');
/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       
 *       properties:
 *         _id:
 *           type: integer
 *           description: ID unique de category 
 *         name:
 *           type: string
 *           description: Nom de category 
 *         
 *       example:
 *         id: 61a1f9b2f58f91c0e6a76df
 *         name: Électronique
 *         
 */

CategoryShema= new mongoose.Schema({
 name:{
    type:String,
    required:true,
 }


})
var category= new mongoose.model('Category',CategoryShema);
module.exports=category;