"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import AddProductForm from "./addproduct";

export default function UserInfo() {
	const { data: session } = useSession();

	return (
		<div className='grid place-items-center h-screen'>
			<div className='shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6'>
				<div>
					Name: <span className='font-bold'>{session?.user?.name}</span>
				</div>
				<div>
					Email: <span className='font-bold'>{session?.user?.email}</span>
				</div>
				<button
					onClick={() => signOut()}
					className='bg-red-500 text-white font-bold px-6 py-2 mt-3'
				>
					Log Out
				</button>
				<button
					onClick={() => AddProductForm()}
					className='bg-yellow-500 text-white font-bold px-6 py-2 mt-3'
				>
					Add Chrome
				</button>
			</div>
		</div>
	);
}