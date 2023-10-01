import { connectMongoDB } from "@/lib/mongodb";
import Products from "@/models/product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
	try {
		const { id } = params;
		const {
			newTitle: title,
			newDescription: description,
			newPrice: price,
		} = await request.json();
		await connectMongoDB();
		await Products.findByIdAndUpdate(id, { title, description, price, image });
		return NextResponse.json({ message: "Product updated" }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured while updating the product." },
			{ status: 500 }
		);
	}
}

export async function GET(request, { params }) {
	try {
		const { id } = params;
		await connectMongoDB();
		const product = await Products.findOne({ _id: id });
		return NextResponse.json({ product }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured while requesting note." },
			{ status: 500 }
		);
	}
}