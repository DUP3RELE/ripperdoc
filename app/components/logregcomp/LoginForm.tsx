"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();
	// @ts-ignore
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});
			// @ts-ignore
			if (res.error) {
				setError("Invalid Credentials");
				return;
			}

			router.replace("dashboard");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Email:
				<input
					className='text-black'
					type='text'
					placeholder='username'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Password:
				<input
					className='text-black'
					type='password'
					placeholder='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<br />
			<button
				type='submit'
				className='underline mt-3 border-4 p-2'
			>
				Login
			</button>
			{error && (
				<div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
					{error}
				</div>
			)}
		</form>
	);
}
