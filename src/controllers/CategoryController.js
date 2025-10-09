const Category=require('../models/CategoryModel');
class CategoryController{

 createCatgeory= async(req,res)=>{
try{
   const newCategory= await Category.create({name:req.body.name});  
   res.status(201).json({message:"category added",newCategory:newCategory}); 
}
catch(err){
res.status(500).json({error:err.message});

}



 } 
 getAllCategories=async(req,res)=>{
 try{
    const allCatgeories= await Category.find();
if(!allCatgeories){
    res.status(400).json({message:"categories not found"});


}
res.status(200).json({message:"all categories ",categories:allCatgeories});

 }
 catch(err){
    res.status(500).json({error:err.message});
 }

 }
 getCategory=async(req,res)=>{
    try{
      const FindCategory= await Category.findById({_id:req.params.id});
    if(!FindCategory){
        res.status(400).json({message:"category not found "});
    } 
    res.status(200).json({message:" the info about category is ",category:FindCategory});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }

   
 }
 updateCategory=async(req,res)=>{
    try{
 const CategoryId=req.params.id;
 const CategoryData={name:req.body.name};
   const updateOne = await Category.findByIdAndUpdate(CategoryId, CategoryData, { new: true });
   if(!updateOne){
    res.status(404).json({message:"not found "});
   }
   res.status(200).json({ message: "product updated", category: updateOne });
    }
    catch(err){
        res.status(500).json({error:err.message});

    }
 }
 deleteCategory=async(req,res)=>{

 try{
  const CategoryId=req.params.id;
    const deleteOne= await Category.findByIdAndDelete({_id:CategoryId});
    if(!deleteOne){
 return res.status(404).json({ messsage:"not found "});
    }  
    res.status(200).json({message:"category deleted ",deleteOne});
 }
 catch(err){
    res.status(500).json({error:err.message});
 }
    

 }

}
module.exports=CategoryController;