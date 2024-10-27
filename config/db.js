import mongoose from "mongoose";

export const connectDB=async()=>{
     await mongoose.connect('mongodb+srv://shreyasisaha74:yTbAZDLwfBk5gmCT@cluster0.csm3m.mongodb.net/food-delivery').then(()=>{
          console.log("DB connected");
     })
}