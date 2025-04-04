import Link from "next/link";

const Header = () => {
	return (
		<header className="flex justify-between items-center w-full pt-8 pl-20 pr-20 pb-8 border-b bg-header bg-cover bg-center">
			{/* left-aligned title */}
			<Link
				className="nav-link text-2xl font-bold text-seashell flex justify-self- lowercase"
				href="/"
			>
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
				<button type="button" className="text-chocolate bg-darkseashell hover:bgseashell focus:ring-4 font-medium rounded-full text-sm px-7 py-1" 
				href="https://forms.gle/6VA3G5DMPpxS5HbGA">
					join
				</button>
				<input type="text" className="rounded-full text-chocolate text-center px-5" placeholder="search pottery @ brown" />
			</nav>
		</header>
	);
};

export default Header;
