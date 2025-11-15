import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true,
    },

    email: {
        type:String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Note_user", userSchema)