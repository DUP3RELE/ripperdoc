import Image from "next/image";
import demon from "../../img/ASCII-art.png";

export default function Contact() {
	return (
		<>
			<div className='flex'>
				<div className='w-1/2'></div>
				<div className='w-1/2'>
					<Image
						src={demon}
						alt='hacker face'
						className='invert mt-20'
					/>
				</div>
			</div>
		</>
	);
}
