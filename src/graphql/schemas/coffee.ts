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
    Farm: {
        Name: {
            type: String,
        },
        required: false,
    },
    Country: {
        of: {
            Origin: {
                type: String,
            },
        },
        required: false,
    },
    Total: {
        Cup: {
            Points: {
                type: String,
            },
        },
        required: false,
    },
});
