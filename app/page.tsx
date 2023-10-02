import Image from "next/image";
import ripperdoc from "./img/Ripperdoc-named-cobalt-fingers--with-implants--old-guy-.png";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='max-w-5xl w-full font-mono text-sm flex flex-wrap'>
				<div className='md:w-1/2'>
					<h1 className='text-2xl m-2 md:mb-1 '>
						Welcome to Cobalt Fingers Ripperdock!
					</h1>
				</div>
				<div className='md:w-1/2 flex justify-center items-center'>
					<Image
					className="ripperdoc-image"
						width={300}
						height={300}
						src={ripperdoc}
						alt='ripperdoc Chrome fingers'
					/>
				</div>
			</div>
			<div className='mt-5 md:mt-1'>
				<p>
					Greetings, Runners, Hackers, and Cyberpunks! You&apos;ve just jacked
					into the digital haven of the most skilled Ripperdoc in the neon-lit
					backstreets of Night City - Cobalt Fingers. Here, we don&apos;t just
					upgrade bodies, we redefine humanity and give you the edge to navigate
					the urban jungle.
				</p>
			</div>
			<div className='mt-5 md:mt-1'>
				<h1 className='text-xl mb-3 md:mb-1'>💡 Cutting-Edge Cyberware</h1>
				<p>
					With an arsenal of high-tech implants, neuro-enhancements, and body
					modifications, we turn the impossible into your new normal. Whether
					you&apos;re looking to enhance your reflexes, amplify your strength,
					or become invisible in the shadows, Cobalt Fingers has got the tech to
					make you superior.
				</p>
			</div>
		</main>
	);
}
