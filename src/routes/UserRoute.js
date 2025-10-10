

 


const express=require('express');

const router = express.Router();
const UserController=require('../controllers/UserController');
const shema=require('../middlewares/Shema');

const ValidateMiddleware=require('../middlewares/validateMiddlewares');
const validator=new ValidateMiddleware();

const Controller= new UserController();

 const userShema=shema.userShema;
 

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestion des utilisateurs
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 */
router.get('/', Controller.getAllUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: ajouter  les  utilisateurs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 */

router.get('/', Controller.getAllUsers);
router.get('/:id',Controller.getUser);
router.post('/',validator.validate(shema.UserSchema),Controller.createUser);
router.delete('/:id',Controller.deleteUser);




module.exports = router;