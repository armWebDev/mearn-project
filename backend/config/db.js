import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connecte DataBase`);
        
    } catch (error) {
        console.log(`error ${error}`);
        process.exit(1) //1 code meanse exit with failure, 0 means success
    }
}