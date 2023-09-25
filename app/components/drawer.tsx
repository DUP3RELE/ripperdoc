"use client";
import "../css/drawer.css";
import arrowRight from "../img/arrow-right-solid.svg";
import arrowLeft from "../img/arrow-left-solid.svg";
import card from "../img/address-card-regular.svg";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Drawer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const drawerRef = useRef<HTMLDivElement | null>(null);

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				drawerRef.current &&
				!drawerRef.current.contains(event.target as Node)
			) {
				// Jeśli kliknięcie nastąpiło poza szufladą
				if (isOpen) setIsOpen(false);
			}
		};

		// Dodaj nasłuchiwanie zdarzeń przy montowaniu komponentu
		document.addEventListener("mousedown", handleOutsideClick);

		// Usuń nasłuchiwanie zdarzeń przy odmontowywaniu komponentu
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
			</div>
			<div>
				<Link href='../pages/login/page'>
					<button className='underline'>Log In</button>
				</Link>
			</div>
			<div>
				<a
					href=''
					className='underline'
				>
					Hardware
				</a>
			</div>
			<div>
				<a
					href=''
					className='underline'
				>
					Software
				</a>
			</div>
			<div>
				<a
					href=''
					className='underline'
				>
					Contact
				</a>
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
