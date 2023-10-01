import AddProductForm from "@/app/components/addproduct";

export default function AdminBoard() {
	return (
		<>
			<h1 className="m-10">Welcome in, Ripperdoc. You can add, edit or delete products here.</h1>
			<AddProductForm />
		</>
	);
}
