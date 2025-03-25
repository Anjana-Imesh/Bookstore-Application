import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        
        customerName:{
            type:String,
            required:true,
        },
        bookDetails:{
            type:String,
            required:true,
        },
        address:{
            type: String,
            required:true,
        },
        email:{
            type: String,
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
);

export const Order = mongoose.model('Order',orderSchema);