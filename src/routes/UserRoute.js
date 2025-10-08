const express=require('express');

const router = express.Router();
const UserController=require('../controllers/UserController');
const shema=require('../middlewares/Shema');

const ValidateMiddleware=require('../middlewares/validateMiddlewares');
const validator=new ValidateMiddleware();

const Controller= new UserController();

 const userShema=shema.userShema;
router.get('/', Controller.getAllUsers);
router.get('/:id',Controller.getUser);
router.post('/',validator.validate(shema.UserSchema),Controller.createUser);
router.delete('/:id',Controller.deleteUser);




module.exports = router;