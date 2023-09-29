"use client";
import "../css/drawer.css";
import arrowRight from "../img/arrow-right-solid.svg";
import arrowLeft from "../img/arrow-left-solid.svg";
import card from "../img/address-card-regular.svg";
import home from "../img/house-solid.svg";
import chip from "../img/microchip-solid.svg";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Drawer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const drawerRef = useRef<HTMLDivElement | null>(null);
	const { data: session } = useSession();

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				drawerRef.current &&
				!drawerRef.current.contains(event.target as Node)
			) {
				if (isOpen) setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [isOpen]);

	return (
		<div
			className={`drawer ${isOpen ? "open" : ""}`}
			ref={drawerRef}
		>
			<div className={`drawerElement ${isOpen ? "open" : ""}`}>
				<button
					className='menu-button'
					onClick={toggleDrawer}
				>
					{isOpen ? (
						<Image
							src={arrowRight}
							alt='Arrow Right'
						/>
					) : (
						<Image
							src={arrowLeft}
							alt='Arrow Left'
						/>
					)}
				</button>
				<div className='mt-16'>
					<Link href='/'>
						<button className='menu-button'>
							<Image
								src={home}
								alt='home'
							/>
						</button>
					</Link>
				</div>
				<div className='mt-32'>
					<Link href='/pages/products'>
						<button className='menu-button'>
							<Image
								src={chip}
								alt='products'
							/>
						</button>
					</Link>
				</div>
			</div>
			<div>
				{session && session.user && session.user.name ? (
					<Link href='/pages/dashboard'>
							
							<span className='underline'>{session.user.name}</span>
					</Link>
				) : (
					<Link href='/pages/loginPanel'>
						<p className='underline'>Log in</p>
					</Link>
				)}
			</div>
			<div>
				<Link href='/pages/products'>
					<p className='underline'>Products</p>
				</Link>
			</div>
			<div>
				<Link href='/pages/contact'>
					<p className='underline'>Contact</p>
				</Link>
			</div>
			<div className='absolute flex justify-between bottom-10 m-5'>
				<p>Created by Krystian Żywczak</p>
				<a
					href='http://kzportfolio.pl/'
					target='_blank'
				>
					<Image
						src={card}
						alt='contact'
						className='w-8 hover:w-10 hover:rotate-12 transition-all'
					/>
				</a>
			</div>
		</div>
	);
};

export default Drawer;
