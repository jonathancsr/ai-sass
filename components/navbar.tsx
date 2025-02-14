import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="bg-white shadow-lg">
			{""}
			<div>
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={60} height={60} />
				</Link>
			</div>
		</nav>
	);
}
