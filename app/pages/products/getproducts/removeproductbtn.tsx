"use client";

import { useRouter } from "next/navigation";

const getProducts = async () => {
	try {
		const res = await fetch("Products", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch products");
		}

		return res.json();
	} catch (error) {
		console.log("Error loading products: ", error);
	}
};

export default function RemoveBtn({ id }: any) {
	const router = useRouter();
	const removeProduct = async () => {
		const confirmed = confirm("Are you sure?");

		if (confirmed) {
			const res = await fetch(`/api/products?id=${id}`, {
				method: "DELETE",
			});

			if (res.ok) {
				router.refresh();
			}
			setInterval(() => {
				window.location.reload();
			}, 1500);
		}
	};

	return (
		<button
			className='underline'
			onClick={removeProduct}
		>
			DELETE
		</button>
	);
}
