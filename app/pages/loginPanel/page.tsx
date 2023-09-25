import LoginForm from "@/app/components/logregcomp/LoginForm";
import { Popover } from "@material-tailwind/react/components/Popover";

export default function Login() {
	return (
		<>
			<div className='loginStyle'>
				<h2 className='text-4xl'>Plug in:</h2>
				<LoginForm />
				<p className='mt-1'>
					If you don't have account, you can{" "}
					<span className='text-red-500 underline'>Register here</span>, or use{" "}
					<span className='text-red-500 underline'>
						<Popover />
					</span>
				</p>
			</div>
		</>
	);
}
