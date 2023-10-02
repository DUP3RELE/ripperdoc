import Image from "next/image";
import demon from "../../img/ASCII-art.png";

export default function Contact() {
	return (
		<>
			<div className='flex flex-wrap'>
				<div className='md:w-1/2 flex justify-center items-center text-xl m-10 md:text-5xl underline'>
					<a
						href='https://new-portfolio-topaz-nine.vercel.app/'
						target='_blank'
					>
						<p>My Portfolio</p>
					</a>
				</div>
				<div className='md:w-1/2 pointer-events-none cursor-not-allowed'>
					<Image
						src={demon}
						alt='hacker face'
						className='invert mt-20 w-4/6 pointer-events-none cursor-not-allowed'
					/>
				</div>
			</div>
		</>
	);
}
