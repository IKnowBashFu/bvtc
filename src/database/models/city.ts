import { Schema, Model, model } from 'mongoose';

const citySchema = new Schema({
    name: String,
    state: String,
    country: String
});

export default model('City', citySchema);