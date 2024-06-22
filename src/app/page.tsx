"use client";
import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { useEffect } from "react";
import { useRouter } from "../../node_modules/next/navigation";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push(RouterLinks.dashboard);
	}, []);

	return <Link href={RouterLinks.dashboard}>dashboard</Link>;
}
