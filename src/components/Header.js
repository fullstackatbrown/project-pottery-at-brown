import Link from "next/link";
import Image from "next/image";

const Header = () => {
	return (
		<header className="flex justify-between items-center w-full pt-1 pl-10 pr-10 pb-1 border-b bg-header bg-cover bg-center">
			{/* left-aligned title with logo */}
			<Link
				className="nav-link text-2xl font-bold text-seashell flex items-center gap-2 lowercase"
				href="/"
			>
				<Image
					src="/pottery@brown_logo.png"
					alt="Pottery @ Brown Logo"
					width={80}
					height={80}
				/>
				pottery @ brown
			</Link>

			{/* right-aligned nav bar */}
			<nav className="flex justify-self-end gap-6 text-neutral-50 lowercase">
				<Link className="nav-link" href="/about">
					about us
				</Link>
				<Link className="nav-link" href="/workshops">
					workshops
				</Link>
				<Link className="nav-link" href="/leadership">
					leadership
				</Link>
				<Link className="nav-link" href="/faq">
					faq
				</Link>
				<Link className="nav-link" href="/gallery">
					gallery
				</Link>
				<button
					type="button"
					className="text-chocolate bg-darkseashell hover:bgseashell focus:ring-4 font-medium rounded-full text-sm px-7 py-1"
				>
					join
				</button>
				<input
					type="text"
					className="rounded-full text-chocolate text-center px-5"
					placeholder="search pottery @ brown"
				/>
			</nav>
		</header>
	);
};

export default Header;