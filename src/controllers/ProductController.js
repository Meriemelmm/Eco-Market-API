const Product = require('../models/ProductModel');
class ProductController {
    getAllProduct = async (req, res) => {
        try {

            const AllProduct = await Product.find({ isDeleted: false }).populate('categories');
            if (!AllProduct || AllProduct.length === 0) {
                return res.status(404).json({ message: "No products found" });
            }
            res.status(200).json({ message: "all products", products: AllProduct });

        }
        catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
    createProdUct = async (req, res) => {

        try {
            console.log("hdhdhd", req.body);
            const newProduct = await Product.create({
                title: req.body.title,
                description: req.body.description,
                // category: req.body.category,
                price: req.body.price,
                stock: req.body.stock,
                imageUrl: req.body.imageUrl || "",
                categories: req.body.categories
            });

            res.status(201).json({ message: "Product added", product: newProduct });



        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }



    }
    getProduit = async (req, res) => {

        try {
            const findProduct = await Product.findById(req.params.id).populate('categories');

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
            const { id } = req.params;


            const deletedProduct = await Product.findByIdAndUpdate(
                id,
                { isDeleted: true },
                { new: true }
            );

            if (!deletedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json({
                message: "Product deleted successfully",
                deletedProduct,
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    updateProduct = async (req, res) => {
        try {
            const ProductId = req.params.id;
            const UpdateData = {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                price: req.body.price,
                stock: req.body.stock,
                imageUrl: req.body.imageUrl ? req.body.imageUrl : "",
                categories: req.body.categories
            }
            const updateOne = await Product.findByIdAndUpdate(ProductId, UpdateData, { new: true });
            if (!updateOne) {
                return res.status(404).json({ message: 'Item not found' });
            }

            res.status(200).json({ message: "product updated", product: updateOne });

        }
        catch (err) {

            res.status(500).json({ message: err.message });


        }
    }
  searchProduct = async (req, res) => {
    try {
        const { title, minPrice, maxPrice } = req.query;
        let filter = { isDeleted: false };

        // search par title
        if (title) {
            filter.title = { $regex: title, $options: 'i' };
        }

       

        // filter par prix
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        const products = await Product.find(filter)
            .populate('categories', 'name');

        res.status(200).json({
            count: products.length,
            products,
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}








}
module.exports = ProductController;