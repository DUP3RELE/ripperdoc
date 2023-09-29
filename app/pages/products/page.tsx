import GetProducts from "./getproducts/page";

export default function Products() {
	return (
		<>
			<div className="m-5">
				<h1>Check my stuff, and pick Your chrome!</h1>
			</div>
			<div className='flex'>
				<GetProducts />
			</div>
		</>
	);
}
