import { connectMongoDB } from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { title, description, price, image } = await req.json();
		await connectMongoDB();
		await Product.create({ title, description, price, image });

		return NextResponse.json({ message: "Product created." }, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occurred while creating a product." },
			{ status: 500 }
		);
	}
}
export async function GET() {
	try {
		await connectMongoDB();
		const products = await Product.find();
		return NextResponse.json({ products });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured while catching notes." },
			{ status: 500 }
		);
	}
}

export async function DELETE(request) {
	try {
		const id = request.nextUrl.searchParams.get("id");
		await connectMongoDB();
		await Product.findByIdAndDelete(id);
		return NextResponse.json({ message: "Product deleted" }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured while deleting product." },
			{ status: 500 }
		);
	}
}
