"use client";
import React, { useState, useEffect } from "react";

function Cart() {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const savedCart = sessionStorage.getItem("cart");
		if (savedCart) setCartItems(JSON.parse(savedCart));
	}, []);

	const removeItem = (indexToRemove: any) => {
		const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
		setCartItems(updatedCart);
		sessionStorage.setItem("cart", JSON.stringify(updatedCart));
	};

	const getTotalPrice = () => {
		// @ts-ignore
		return cartItems.reduce((total, item) => total + item.price, 0);
	};

	return (
		<div className='m-10 w-3/4'>
			{cartItems.length === 0 ? (
				<p>Cart is empty</p>
			) : (
				<>
					<ul className='flex flex-col relative w-full m-10'>
						{cartItems.map((item, index) => (
							<div key={index} className='w-full justify-between items-center bg-yellow-500 m-2 p-3 pl-10 product-style'>
								<li>
									<span>
										{
											// @ts-ignore
											item.name
										}
									</span>{" "}
									-{" "}
									<span>
										{
											// @ts-ignore
											item.price
										}{" "}
										E$
									</span>
									<button
										className='absolute right-2 bg-red-500 hover:bg-red-600 p-2 underline'
										onClick={() => removeItem(index)}
									>
										Delete
									</button>
								</li>
							</div>
						))}
					</ul>
					<div className='flex flex-row'>
						<p className='bg-green-500 p-5 pl-10 product-style m-2'>
							Full Price: {getTotalPrice()} E$
						</p>

						<p className='bg-red-500 hover:bg-red-600 underline p-5 pl-10 m-2 product-style'>
							<a href='http://kzportfolio.pl/' target="_blank">BUY</a>
						</p>
					</div>
				</>
			)}
		</div>
	);
}

export default Cart;
