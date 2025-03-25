/*
import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type: String,
            required:true,
        },
        publishYear:{
            type: Number,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        inStock:{
            type: Number,
            required: true,
        },
        author:{
            type: String,
            required:true,
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book',bookSchema);
*/

import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type: String,
            required:true,
        },
        category:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        inStock:{
            type: Number,
            required: true,
        },
        imageUrl:{
            type:String,
            required:true,
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book',bookSchema);