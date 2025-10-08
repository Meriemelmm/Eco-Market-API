const Product = require('../models/UserModel');
class ProductController {
    getAllProduct = async (req, res) => {
        try {

            const AllProduct = Product.find();
            if (!AllProduct) {
                res.status(400).json({ message: "not found " });
            }
            res.status(200).json({ message: "all products", products: AllProduct });

        }
        catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
    createProdct = async (req, res) => {
        try {
            const newProduct = new Product({
                title: req.body.title,
                description: req.body.title,
                category: req.body.categoy,
                price: req.body.price,
                stock: req.body.stock,
                imageUrl: req.body.imageUrl
            });
            await newProduct.save();
            res.status(201).json({ message: "product added ", newProduct });

        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }



    }
    getProduit = async (req, res) => {

        try {
            const findProduct = await find({ _id: req.params.id });
            if (!findProduct) {
                res.status(400).json({ message: "not found" });
            }
            res.status(200).json({ message: "the product", findProduct });

        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    deleteProduct = async (req, res) => {
        try {
            const productId = req.params.id;
            if (!productId) {
                res.status(400).json({ message: "product not found" });
            }
            const deleteProduit = await Product.delete({ _id: productId });
            res.status(200).json({ message: "deleted product" });


        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    






}
module.exports = ProductController;