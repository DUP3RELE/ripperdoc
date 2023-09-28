"use client";
import { useState } from "react";
import axios from "axios";

export default function HandleImageUpload() {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (e: any) => {
		setSelectedFile(e.target.files[0]);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!selectedFile) {
			alert("Please select a file.");
			return;
		}

		const formData = new FormData();
		formData.append("file", selectedFile);

		try {
			const response = await axios.post("/api/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			alert("File uploaded successfully!");
			console.log(response.data);
		} catch (error) {
			console.error("Error uploading file:", error);
		}
	};

	return (
		<div>
			<h1>File Upload</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Choose a File:
					<input
						type='file'
						accept='.jpg, .jpeg, .png'
						onChange={handleFileChange}
					/>
				</label>
				<button type='submit'>Upload</button>
			</form>
		</div>
	);
}
