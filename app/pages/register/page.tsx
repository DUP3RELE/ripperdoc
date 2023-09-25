"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	// @ts-ignore
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !email || !password) {
			setError("All fields are necessary.");
			return;
		}

		try {
			const resUserExists = await fetch("../api/userExists", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const { user } = await resUserExists.json();

			if (user) {
				setError("User already exists.");
				return;
			}

			const res = await fetch("../api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			});

			if (res.ok) {
				const form = e.target;
				form.reset();
				router.push("register/registrationsuccess");
			} else {
				console.log("User registration failed.");
			}
		} catch (error) {
			console.log("Error during registration: ", error);
		}
	};

	return (
		<div className='loginStyle'>
			<h2 className='text-4xl'>Register:</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input
						className='text-black'
						type='text'
						placeholder='e-mail'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Username:
					<input
						className='text-black'
						onChange={(e) => setName(e.target.value)}
						type='text'
						placeholder='Username'
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						className='text-black'
						type='password'
						placeholder='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<button
					type='submit'
					className='underline mt-3 border-4 p-2'
				>
					Register
				</button>
				{error && <div className='bg-red-500 text-white mt-2'>{error}</div>}
			</form>
			<p className='mt-1'>
				If you have an account -
				<span className='text-red-500 underline'>
					<Link href='/pages/loginPanel'>Log in</Link>
				</span>
			</p>
		</div>
	);
}
