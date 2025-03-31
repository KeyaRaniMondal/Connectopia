import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

export const Connectopia= async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }
};
