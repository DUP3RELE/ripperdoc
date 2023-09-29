import LoginForm from "@/app/components/logregcomp/LoginForm";
import Link from "next/dist/client/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import HackerModal from "./hackermodal";

export default async function Login() {
	// @ts-ignore
	const session = await getServerSession(authOptions);

	if (session) redirect("../pages/dashboard");

	return (
		<>
			<div className='loginStyle'>
				<h2 className='text-4xl'>Plug in:</h2>
				<LoginForm />
				<p className='mt-1'>
					If you don`&apos;`t have account, you can
					<span className='text-red-500 underline'>
						<Link href='/pages/register'>Register here</Link>
					</span>
					, or use
					<HackerModal />
				</p>
			</div>
		</>
	);
}
