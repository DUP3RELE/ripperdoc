import { connectMongoDB } from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import multer from "multer";

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