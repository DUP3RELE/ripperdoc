import Hardware from "./hardware/page";
import Software from "./software/page";

export default function Products() {
	return (
		<>
			<div className="flex">
				<div className='w-1/2'><Hardware /></div>
				<div className='w-1/2'><Software /></div>
			</div>
		</>
	);
}
