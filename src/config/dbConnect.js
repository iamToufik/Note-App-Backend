import mongoose from "mongoose";
import dotenv from "dotenv/config";

export async function dbConnect() {
    try {

        await mongoose.connect(process.env.URL)
        console.log("MongoDB connected successfully");

    } catch (error) {

        console.log("MongoDB not Connected", error);
        
    }
}