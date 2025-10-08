const express=require('express');
const router = express.Router();

const ProductController=require('../controllers/ProductController');
const Controller=new ProductController();
router.get('/',Controller.getAllProduct);
router.post('/',Controller.createProdct);
router.get('/:id',Controller.getProduit);
router.delete('/:id',Controller.deleteProduct);





module.exports=router;