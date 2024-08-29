import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://yushisin22:iSsCbrSWZeennlSZ@cluster0.jnigq.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}