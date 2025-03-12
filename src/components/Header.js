const Header = () => {
	return (
		<header className="flex justify-between items-center w-full pt-4 pb-4 border-b">
			{/* left-aligned title */}
			<a
				className="nav-link text-xl font-bold flex justify-self-"
				href="#"
			>
				Pottery @ Brown
			</a>

			{/* right-aligned nav bar */}
			<nav className="flex justify-self-end gap-6">
				<a className="nav-link" href="">
					About Us
				</a>
				<a className="nav-link" href="">
					Calendar
				</a>
				<a className="nav-link" href="">
					Donate
				</a>
				<a className="nav-link" href="">
					Join
				</a>
				<input type="text" placeholder="search" />
			</nav>
		</header>
	);
};

export default Header;
