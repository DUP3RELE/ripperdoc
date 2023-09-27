import React, { useState } from "react";
import axios from "axios";

export default function AddProductForm() {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		price: "",
		imageUrl: "",
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			await axios.post("/api/add-product", formData);
			// Resetuj formularz lub przekieruj użytkownika po pomyślnym dodaniu produktu
		} catch (error) {
			console.error("Nie udało się dodać produktu", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* Renderuj poszczególne pola formularza... */}
		</form>
	);
}
