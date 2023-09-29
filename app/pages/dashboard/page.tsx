"use client";
import UserInfo from "../../components/userInfo";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default function Dashboard() {
	

	return (
		<>
			<div className='m-5'>
				<p>You're in, Runner.</p>
			</div>
			<UserInfo />
		</>
	);
}
