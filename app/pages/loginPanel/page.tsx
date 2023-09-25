import LoginForm from "@/app/components/logregcomp/LoginForm";
import Link from "next/dist/client/link";

export default function Login() {
	return (
		<>
			<div className='loginStyle'>
				<h2 className='text-4xl'>Plug in:</h2>
				<LoginForm />
				<p className='mt-1'>
					If you don't have account, you can
					<span className='text-red-500 underline'>
						<Link href='/pages/register'>Register here</Link>
					</span>
					, or use
					<span className='text-red-500 underline'></span>
				</p>
			</div>
		</>
	);
}
