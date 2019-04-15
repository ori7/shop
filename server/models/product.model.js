const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category: String,
    id: String,
    name: String
});

module.exports = mongoose.model('Product' , ProductSchema); 