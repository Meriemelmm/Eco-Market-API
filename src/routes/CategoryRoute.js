const express=require('express');
const router=express.Router();
const CategoryController= require('../controllers/CategoryController');
const Controller= new CategoryController();
const shema=require('../middlewares/Shema');
 const validateMiddlewares=require('../middlewares/validateMiddlewares');
 const validator= new validateMiddlewares();

 router.get('/',Controller.getAllCategories);
 router.post('/',validator.validate(shema.CategoryShema),Controller.createCatgeory);
 router.get('/:id',Controller.getCategory);
 router.put('/:id',validator.validate(shema.CategoryShema),Controller.updateCategory);
 router.delete('/:id',Controller.deleteCategory);





module.exports=router;