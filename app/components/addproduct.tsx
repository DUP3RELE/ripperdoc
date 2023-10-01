"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState("");

	const router = useRouter();

	function covertToBase64(e: any) {
		var reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			console.log(reader.result);
			// @ts-ignore
			setImage(reader.result);
		};
		reader.onerror = (error) => {
			console.log("Error: ", error);
		};
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await axios.post("/api/products", {
				title,
				description,
				price,
				image,
			});
			router.push("../products");
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
				<div style={{ display: "flex", alignItems: "center" }}>
					<input
						className='text-black m-3 w-36'
						type='number'
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
						required
					/>
					<span>E$</span>
				</div>
			</label>
			<label className='flex flex-col'>
				Upload Image:
				<label className='mt-2'>
					Choose a File:
					<input
						type='file'
						accept='.jpg, .jpeg, .png'
						onChange={covertToBase64}
					/>
				</label>
				{image == "" || image == null ? (
					""
				) : (
					<Image
						width={100}
						height={100}
						src={image}
						alt='image'
					/>
				)}
			</label>
			<button
				type='submit'
				className='m-3 mt-10 p-3 w-36 bg-yellow-500 hover:bg-yellow-600'
			>
				Add Product
			</button>
		</form>
	);
}
