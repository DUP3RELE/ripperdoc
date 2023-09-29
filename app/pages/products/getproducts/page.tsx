"use client";
import { useEffect, useState } from "react";

export default function GetProducts() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await fetch("../api/products", {
					cache: "no-store",
				});

				if (!res.ok) {
					throw new Error("Failed to fetch products");
				}

				const data = await res.json();
				setProducts(data.products);
				setLoading(false);
			} catch (error) {
				console.log("Error loading products: ", error);
				setLoading(false);
			}
		};

		getProducts();
	}, []);

	if (loading) {
		return <div className='m-10'>Syncing Cybernetic Interfaces...</div>;
	}

	return (
		<>
			<div className='flex flex-wrap'>
				{products.map((t: any) => (
					<div
						key={t._id}
						className='w-96 m-10 bg-red-500  product-style'
					>
						<div className='relative flex'>
							<div className='w-96'>
								<h2 className='font-bold m-10'>{t.title}</h2>
							</div>
							<div className='m-5 image-style'>
								<img
									width={200}
									height={200}
									src={t.image}
								/>
							</div>
						</div>
						<div className='flex-col m-3'>
							<div className="mb-5">
								<p>Description: {t.description}</p>
							</div>
							<div className="mb-2 mt-3">
								<p>Price: {t.price} E$ </p>
							</div>
						</div>
						<button className='absolute bottom-2 right-2 border bg-yellow-500 hover:bg-yellow-600 underline pt-2 pb-2 pl-4 pr-4'>
							BUY
						</button>
					</div>
				))}
			</div>
		</>
	);
}
