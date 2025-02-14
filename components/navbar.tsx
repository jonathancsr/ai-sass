"use client";

import { SignOutButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
	const { isLoaded, isSignedIn, user } = useUser();
	if (!isLoaded) return <p>Loading...</p>;
	return (
		<nav>
			{""}
			<div>
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={60} height={60} />
				</Link>
			</div>
			<div>
				<SignedIn>
					<Link href="/mealplan">Meal Plan</Link>
					{user?.imageUrl ? (
						<Link href="profile">
							<Image
								src={user?.imageUrl}
								alt="picture"
								width={40}
								height={40}
							/>
						</Link>
					) : (
						""
					)}
					<SignOutButton>
						<button type="button">Sign Out</button>
					</SignOutButton>
				</SignedIn>
				<SignedOut>sair</SignedOut>
			</div>
		</nav>
	);
}
