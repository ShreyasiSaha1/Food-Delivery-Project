import foodModel from "../models/foodmodel.js";
import fs from 'fs';

const addFood = async (req, res) => {
     try  {
          console.log('Uploaded file:', req.file);

          if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
          }

        let image_filename = `${req.file.filename}`;
        console.log('File name:', image_filename);

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });

    } catch (error) {
        console.error('Error while adding food:', error);
        res.status(500).json({ success: false, message: "Error Found" });
    }
};

// all food list
const listFood=async(req,res)=>{
     try{
          const foods=await foodModel.find({});
          res.json({success:true,data:foods});
     }catch(error){
          console.log(error);
          res.json({success:false,message:"Error"});

     }
}

//remove food item
const removeFood=async(req,res)=>{
     try{
          const food=await foodModel.findById(req.body.id);
          fs.unlink(`uploads/${food.image}`,()=>{});
          await foodModel.findByIdAndDelete(req.body.id);
          res.json({success:true,message:"Food item removed"});
     }catch(error){
          console.log(error);
          res.json({success:false,message:"Error"});
     }
}

export {addFood,listFood,removeFood};