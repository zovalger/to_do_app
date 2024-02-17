import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";

export default function Home() {
	return <Link href={RouterLinks.dashboard}>dashboard</Link>;
}
