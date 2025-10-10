const express=require('express');
const router=express.Router();
const CategoryController= require('../controllers/CategoryController');
const Controller= new CategoryController();
const shema=require('../middlewares/Shema');
 const validateMiddlewares=require('../middlewares/validateMiddlewares');
 const validator= new validateMiddlewares();
 /**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Gestion des catégories
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Récupérer toutes les catégories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Liste de toutes les catégories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Créer une nouvelle catégorie
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par son ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catégorie trouvée
 *       404:
 *         description: Catégorie non trouvée
 */

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Catégorie mise à jour
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Catégorie non trouvée
 */

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catégorie supprimée avec succès
 *       404:
 *         description: Catégorie non trouvée
 */


 router.get('/',Controller.getAllCategories);
 router.post('/',validator.validate(shema.CategoryShema),Controller.createCatgeory);
 router.get('/:id',Controller.getCategory);
 router.put('/:id',validator.validate(shema.CategoryShema),Controller.updateCategory);
 router.delete('/:id',Controller.deleteCategory);





module.exports=router;