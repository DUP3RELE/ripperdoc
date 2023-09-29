import Cart from "./cart/page";

export default function Basket() {
	
	return (
		<>
			<div className='m-5'>
				<h1>Runner`&apos;`s PurchasePod</h1>
			</div>
			<div className='flex'>
				<Cart />
			</div>
		</>
	);
}
