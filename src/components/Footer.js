import Link from "next/link";

const Footer = () => {
	return (
		<footer className="flex flex-row gap-y-4 w-full bg-header px-10 py-5 text-seashell">
			<div className="min-w-[30rem]">
			<img
				className="flex w-32"
				src="/images/Brown-University-Logo-Light.png"
			></img>

			<p className="text-md">
				© 2025 Pottery @ Brown
			</p>
			</div>

			{/* footer nav bar */}
			<nav className="flex flex-col justify-evenly w-full pt-2 pb-2 lowercase">
				<div className="flex flex-row justify-end gap-6 text-xl text-seashell">
					<Link className="nav-link" href="/about">
						About Us
					</Link>
					<Link className="nav-link" href="/workshops">
						Workshops
					</Link>
					<Link className="nav-link" href="/leadership">
						Leadership
					</Link>
					<Link className="nav-link" href="/faq">
						FAQ
					</Link>
					<Link className="nav-link" href="/gallery">
						Gallery
					</Link>
					<Link className="nav-link" href="https://forms.gle/6VA3G5DMPpxS5HbGA">
						Join
					</Link>
				</div>
				<div className="flex justify-end flex-row gap-6 text-xl text-seashell mr-[-.5rem]">
					<a href="mailto:pottery@brown.edu" className="inline-flex items-center font-lg">
					<img src="/mail.png"></img>
					</a>
					<a href="https://www.instagram.com/brownpotteryclub" className="inline-flex items-center font-lg">
					<img src="/insta.png"></img>
					</a>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
