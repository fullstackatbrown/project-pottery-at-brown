const Footer = () => {
	return (
		<footer className="flex flex-col gap-y-4 w-full">
			<img
				className="flex w-32"
				src="/images/Brown-University-Logo.png"
			></img>

			<p>SAO Acknowledgement / Official Details go here</p>

			{/* footer nav bar */}
			<nav className="flex justify-between w-full pt-4 pb-4 border-t">
				<a className="nav-link" href="">
					pottery@brown.edu
				</a>
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
				<a className="nav-link" href="">
					Mailing List
				</a>
				<a className="nav-link" href="">
					Instagram
				</a>
			</nav>
		</footer>
	);
};

export default Footer;
