import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema({
	title: String,
	description: String,
	price: Number,
	image: String,
});

const Product = models.Product || mongoose.model("Product", ProductSchema);
export default Product;
