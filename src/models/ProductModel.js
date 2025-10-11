const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - category
 *         - price
 *         - stock
 *       properties:
 *         id:
 *           type: string
 *           description: ID unique du produit
 *         title:
 *           type: string
 *           description: Nom du produit
 *         description:
 *           type: string
 *           description: Brève description du produit
 *         category:
 *           type: string
 *           description: Catégorie du produit
 *         price:
 *           type: number
 *           description: Prix du produit (en DH)
 *         stock:
 *           type: number
 *           description: Quantité disponible
 *         imageUrl:
 *           type: string
 *           description: Lien de l’image du produit
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création (gérée automatiquement)
 *       example:
 *         id: 661a1f9b2f58f91c0e6a76df
 *         title: Bouquet de Roses Rouges
 *         description: Un magnifique bouquet de 12 roses rouges fraîches, parfait pour exprimer l’amour et la passion.
 *         category: Bouquets Romantiques
 *         price: 249
 *         stock: 15
 *         imageUrl: "https://.com/images/roses-rouges.jpg"
 *         createdAt: "2025-10-10T12:30:00Z"
 */

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
    // category: {
    //     type:String,
    //     required:true

    // },
     categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }],
    imageUrl: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
     isDeleted: {
    type: Boolean,
    default: false
  }

})
var product=new mongoose.model('Product', ProductShema);
module.exports=product;