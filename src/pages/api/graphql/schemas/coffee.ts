import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true,
    },
    Id: {
        type: Number,
        required: true,
    },
    Color: {
        type: String,
        required: false,
    },
    Producer: {
        type: String,
        required: false,
    },
    Region: {
        type: String,
        required: false,
    },
});
