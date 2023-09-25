import Link from "next/link";
export default function RegistrationSuccess() {
	return (
		<>
			<div>
				<p className='m-10 w-48'>
					Welcome to the Neon Grid, Runner! You’ve successfully jack into our
					system. Sync your implants, and get ready to navigate through the
					digital shadows. Now You can
					<Link
						className='text-red-500 underline'
						href='/pages/loginPanel'
					>
						<br></br>log in.
					</Link>
				</p>
			</div>
		</>
	);
}
