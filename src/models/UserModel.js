const mongoose = require('mongoose');
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: ID unique de l'utilisateur
 *         name:
 *           type: string
 *           description: Nom complet de l'utilisateur
 *         email:
 *           type: string
 *           description: Email de l'utilisateur
 *         password:
 *           type: string
 *           description: Mot de passe (haché)
 *       example:
 *         id: 1
 *         name: Meriem Elmecaniqui
 *         email: meriem@example.com
 *         password: $2a$10$hash
 */

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