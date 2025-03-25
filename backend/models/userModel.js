import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "visitor"
    }
})

export const User = mongoose.model('User', userSchema);
