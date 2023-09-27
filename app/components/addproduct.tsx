"use client";
import React, { useState } from "react";
import axios from "axios";

export default function AddProductForm() {

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await axios.post("/api/addProduct", {
				title,
				description,
				price,
				image,
			});
			console.log("Product Added:", response.data);
		} catch (error) {
			console.error("Error adding product:");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
			</label>
			<label>
				Description:
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
			</label>
			<label>
				Price:
				<input
					type='number'
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
					required
				/>
			</label>
			<label>
				Image URL:
				<input
					type='text'
					value={image}
					onChange={(e) => setImage(e.target.value)}
					required
				/>
			</label>
			<button type='submit'>Add Product</button>
		</form>
	);
}
