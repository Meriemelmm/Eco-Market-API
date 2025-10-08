const User = require('../models/UserModel');
class UserController {


    getAllUsers = async (req, res) => {
        try {
            const users = await User.find();
            if (!users) {
                res.status(404).json({ message: "users not found " });

            }
            res.status(200).json({ message: "all users ", users: users });


        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }


    }
    createUser = async (req, res) => {

        try {

            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })

            res.status(201).json({ message: "created  good", newUser: newUser });

        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }

    }
    getUser = async (req, res) => {

        try {
            const userId = req.params.id;

            const userFind = await User.findById({ _id: userId });
            if (!userFind) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({
                message: "Information about user",
                user: userFind
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    deleteUser = async (req, res) => {
        try {
            const deletedUser = await Product.findByIdAndDelete(req.params.id);


            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ message: "deleted the user" ,deletedUser});

        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }

    }



};
module.exports = UserController