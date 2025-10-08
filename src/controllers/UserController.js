const  User =require('../models/UserModel') ;
class UserController {


    getAllUsers = async (req, res) => {
        try {
            const users = await User.find();
            if(!users){ 
                res.status(404).json({ message:"users not found " });

            }
            res.status(200).json({ message: "all users ", users: users });


        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }


    }
    createUser = async (req, res) => {

        try {
           
            const newUser =  new User(req.body);
           await  newUser.save();
            res.status(201).json({ message: "created  good", newUser: newUser });

        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }

    }
    getUser = async (req, res) => {
      
  try {
    const userId = req.params.id;
  
    const userFind = await User.findOne({_id:userId});
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
deleteUser=async(req,res)=>{
try{
    const userId=req.params.id;
    

    if (!userId) {
      return res.status(404).json({ message: 'User not found' });
    } 
    const deletedUser = await User.deleteOne({ _id: userId });
    res.status(200).json({message:"deleted the user"});

}
catch(err){
    res.status(500).json({error:err.message});
}

}

    

};
module.exports=UserController