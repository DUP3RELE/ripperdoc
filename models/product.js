import mongoose, { Schema, models } from "mongoose";
const mongoose = require("mongoose");

const ProductSchema = new Schema({
	title: String,
	description: String,
	price: Number,
	imageUrl: String,
});

const Product = models.Product || mongoose.model("Product", ProductSchema);
export default Product;
