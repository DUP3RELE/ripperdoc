"use client";
import React, { useState } from "react";
import axios from "axios";
import HandleImageUpload from "./handleimageupload";

export default function AddProductForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState("");

	const handleImageUpload = (imageUrl: any) => {
		setImage(imageUrl);
	};

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
		<form
			onSubmit={handleSubmit}
			className='flex flex-col m-5'
		>
			<label className='flex flex-col'>
				Title:
				<input
					className='text-black m-3 w-48'
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
					placeholder='Implant name'
				/>
			</label>
			<label className='flex flex-col'>
				Description:
				<textarea
					className='text-black m-3 w-48 max-h-48'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
					placeholder='Implant description'
				/>
			</label>
			<label className='flex flex-col'>
				Price:
				<input
					className='text-black m-3 w-36'
					type='number'
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
					required
				/>
			</label>
			<label className='flex flex-col'>
				Upload Image:
				<HandleImageUpload
					// @ts-ignore
					onImageUpload={handleImageUpload}
				/>
			</label>
			<button
				type='submit'
				className='m-3 p-3 w-36 bg-yellow-500 hover:bg-yellow-600'
			>
				Add Product
			</button>
		</form>
	);
}
