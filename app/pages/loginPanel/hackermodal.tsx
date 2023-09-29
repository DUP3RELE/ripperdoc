"use client";
import React, { useState } from "react";

export default function HackerModal() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	// @ts-ignore
	function Modal({ isOpen, onClose }) {
		if (!isOpen) return null;

		return (
			<div
				className='fixed flex top-0 left-0 right-0 bottom-0 justify-center items-center text-white'
				style={{
					backgroundColor: "rgba(106, 90, 205, 0.5)",
				}}
			>
				<div className='bg-purple-400 p-5 border'>
					<h2 className='text-xl m-5'>Hacked By TR0N</h2>
					<p className='mb-2'>
						Can You belive that this ripperdoc set his account like this?{" "}
					</p>
					<div className='bg-purple-500 p-2 w-72'>
						<p>
							Login: <span>admin@admin.admin</span>
						</p>
						<p className='mt-2'>
							Password: <span>admin</span>
						</p>
					</div>
					<p className="my-2">
						What a smart guy! I would consider getting implants in his store...
					</p>
					<button
						className='underline m-5'
						onClick={onClose}
					>
						Close
					</button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<button
				onClick={() => setIsModalOpen(true)}
				className='text-purple-500 underline'
			>
				?? Admin Account ??
			</button>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}
