"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UserInfo() {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (!session?.user?.name || !session?.user?.email) {
			router.push("./loginPanel"); // przekierowuje na stronę logowania, jeśli user.name lub user.email są niezdefiniowane
		}
	}, [session, router]);

	const onSignOut = () => {
		sessionStorage.removeItem("cart");
		signOut();
	};

	return (
		<div className='grid place-items-center'>
			<div className='shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6'>
				<div>
					Netrunner: <span className='font-bold'>{session?.user?.name}</span>
				</div>
				<div>
					Email: <span className='font-bold'>{session?.user?.email}</span>
				</div>
				<div className='flex-row m-5'>
					<a
						href='products'
						className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-3  m-3 py-2 text-center'
					>
						Buy some stuff
					</a>
					<a
						href='basket'
						className='bg-green-500 hover:bg-green-600  text-white font-bold px-3  m-3 py-2 text-center'
					>
						Check Your cart
					</a>

					{session?.user?.name === "Admin" && (
						<a
							href='dashboard/adminBoard'
							className='bg-yellow-500 text-white font-bold px-3 py-2 mt-3 text-center'
						>
							Add Chrome
						</a>
					)}
				</div>
				<button
					onClick={onSignOut}
					className='bg-red-500 hover:bg-red-600 text-white font-bold m-3 px-3 py-2'
				>
					Log Out
				</button>
			</div>
		</div>
	);
}
