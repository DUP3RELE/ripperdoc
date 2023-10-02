"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import RemoveBtn from "./removeproductbtn";

export default function GetProducts() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const savedCart = sessionStorage.getItem("cart");
		if (savedCart) {
			setCartItems(JSON.parse(savedCart));
		}
	}, []);

	const { data: session } = useSession();

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

	const addToCart = (product: any) => {
		// @ts-ignore
		setCartItems((prevItems: any) => {
			const newItems = [
				...prevItems,
				{ _id: product._id, name: product.title, price: product.price },
			];
			sessionStorage.setItem("cart", JSON.stringify(newItems));
			return newItems;
		});
	};

	const isProductInCart = (productId: any) => {
		return cartItems.some((item: any) => item._id === productId);
	};

	if (loading) {
		return <div className='m-10'>Syncing Cybernetic Interfaces...</div>;
	}

	return (
		<>
			<div className='flex flex-wrap'>
				{products.map((t) => (
					<div
						// @ts-ignore
						key={t._id}
						className='w-3/5 m-2 md:w-96 md:m-10 bg-red-500 product-style relative'
					>
						<div className='relative flex'>
							<div className='w-20 md:w-96'>
								<h2 className='font-bold mt-10 ml-1 md:m-10'>
									{
										// @ts-ignore
										t.title
									}
								</h2>
							</div>
							<div className='m-5 image-style relative'>
								<Image
									width={200}
									height={200}
									src={
										// @ts-ignore
										t.image
									}
									alt='image'
								/>
							</div>
						</div>
						{isProductInCart(
							// @ts-ignore
							t._id
						) && (
							<div className='absolute inset-0 flex items-center justify-center bg-red-500 product-style-bought'>
								<span className='text-white bg-yellow-500 p-5 text-lg z-100 text-bold underline'>
									<a href='../pages/basket'>Dodano do koszyka</a>
								</span>
							</div>
						)}
						<div className='flex-col m-3 '>
							<div className=' md:mb-10'>
								<p>
									Description:{" "}
									{
										// @ts-ignore
										t.description
									}
								</p>
							</div>
							<div className='mb-2 mt-3 md:bottom-0 absolute'>
								<p>
									{isProductInCart(
										// @ts-ignore
										t._id
									)
										? `Chrome: ${
												// @ts-ignore
												t.title
										  }`
										: `Price: ${
												// @ts-ignore
												t.price
										  } E$`}
								</p>
							</div>
						</div>
						<div className='h-20'>
							{!isProductInCart(
								// @ts-ignore
								t._id
							) &&
								session && (
									<button
										onClick={() => addToCart(t)}
										className='absolute bottom-2 right-2 border bg-yellow-500 hover:bg-yellow-600 underline pt-2 pb-2 pl-4 pr-4'
									>
										BUY
									</button>
								)}

							{session?.user?.name === "Admin" && (
								<div className='absolute bottom-2 right-20 border bg-yellow-500 hover:bg-yellow-600 underline pt-2 pb-2 pl-4 pr-4'>
									<RemoveBtn
										id={
											// @ts-ignore
											t._id
										}
									/>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
