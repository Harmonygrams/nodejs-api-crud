import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const connectDb = async () => {
    try { 
        mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB is connected');
    }catch(err){
        console.log(err); 
    }
}
export { connectDb };