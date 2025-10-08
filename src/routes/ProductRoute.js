const express=require('express');
const router = express.Router();
const shema=require('../middlewares/Shema');
const validateMiddlewares=require('../middlewares/validateMiddlewares');
const validator= new validateMiddlewares();


const ProductController=require('../controllers/ProductController');
const Controller=new ProductController();
router.get('/',Controller.getAllProduct);
router.post('/',validator.validate(shema),Controller.createProdUct);
router.get('/:id',Controller.getProduit);
router.delete('/:id',Controller.deleteProduct);
router.put('/:id',validator.validate(shema),Controller.updateProduct);





module.exports=router;