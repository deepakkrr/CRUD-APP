import mongoose from "mongoose";

const connectMongodb=async()=>{
    try {
         await mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("Coonected To Atlas");
        })
    } catch (error) {
        console.log("error");
    }
}
export default connectMongodb;