import Link from 'next/link';

const Header = () => {
	return (
		<header className="flex justify-between items-center w-full pt-4 pb-4 border-b">
			{/* left-aligned title */}
			<Link href="/" className="nav-link text-xl font-bold">
				Pottery @ Brown
			</Link>

			{/* right-aligned nav bar */}
			<nav className="flex gap-6">
				<Link href="/about" className="nav-link">
					About Us
				</Link>
				<Link href="/leadership" className="nav-link">
					Leadership
				</Link>
				<Link href="/faq" className="nav-link">
					FAQ
				</Link>
				<Link href="/workshops" className="nav-link">
					Workshops and Schedule
				</Link>
				<Link href="/gallery" className="nav-link">
					Gallery
				</Link>
				<Link href="/join" className="nav-link">
					Join
				</Link>
				<input type="text" placeholder="search" />
			</nav>
		</header>
	);
};

export default Header;