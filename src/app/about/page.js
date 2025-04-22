import Header from "../../components/Header";
import Footer from "../../components/Footer";

const members = [
	{ name: "Pepito Jimenez", title: "Co-President" },
	{ name: "Pepito Jimenez", title: "Co-President" },
	{ name: "Pepito Jimenez", title: "Studio Aide" },
	{ name: "Pepito Jimenez", title: "Studio Aide" },
	{ name: "Pepito Jimenez", title: "Studio Aide" },
	{ name: "Pepito Jimenez", title: "Studio Aide" },
];

export default function Home() {
	return (
		<main className="bg-[url(/background.png)] bg-cover bg-center min-h-screen flex flex-col justify-center p-10 h-full">
			<div className="flex flex-col items-start w-full max-w-8xl gap-8 p-20 pl-40 pr-40">
				<h1 className="text-[50px] font-hedvig text-[#513223] mx-auto !justify-center !items-center">
					About Pottery @ Brown
				</h1>

				{/*<p
					style={{
						color: "#513223",
						fontFamily: "'Inter', serif",
						fontWeight: 400,
						fontSize: "24px",
					}}
				>
					
				</p>*/}

				<div className="flex flex-col sm:flex-row items-center gap-40 w-full mt-8">
					<div
						className="w-full sm:w-2/5 p-4 rounded-lg"
						style={{
							backgroundColor: "#D3D3D3",
							backgroundImage: "url('images/about-1.jpeg')",
							backgroundSize: "cover",
							height: "350px",
							border: "5px solid #593625",
						}}
					></div>

					<div
						className="w-full sm:w-3/5 text-[#513223] space-y-4"
						style={{
							fontFamily: "'Inter', serif",
							fontWeight: 400,
							fontSize: "20px",
						}}
					>
						<p>
							As of Fall 2024, Pottery @ Brown is a student organization looking to provide equal access to working with clay mediums. The club will support student activities at local studios and primarily towards a fully functional pottery studio on campus grounds. 

						</p>
						<p>
							Because ceramics opportunities are so competitive on College Hill, we hope to extend this opportunity such that it is more accessible to students across disciplines, backgrounds, and socioeconomic status. 

						</p>
						<button className="text-[24px] bg-[#3B7F9C] text-white font-bold py-5 px-6 rounded-full font-inter">
					        Join us!
					      </button>
						{/*<a href="#" className="text-[#3B7F9C] underline">
							Link to mailing list/something relevant
						</a>*/}
					</div>
				</div>
			</div>

			<div className="flex flex-col items-start w-full max-w-8xl gap-8 p-20 pl-40 pr-40">

				<h1 className="text-[50px] font-hedvig text-[#513223] mx-auto !justify-center !items-center">
					Initiatives
				</h1>

				<div className="flex flex-col sm:flex-row items-center gap-40 w-full mt-8">

					<div
						className="w-full text-[#513223] space-y-4"
						style={{
							fontFamily: "'Inter', serif",
							fontWeight: 400,
							fontSize: "20px",
						}}
					>
						<p>
							Pottery @ Brown is dedicated to fostering creativity and community through various ceramics programs. Currently, we operate two initiatives:

						</p>
						
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-center gap-40 w-full mt-8">
					<div
						className="w-full sm:w-2/5 p-4 rounded-lg"
						style={{
							backgroundColor: "#D3D3D3",
							backgroundImage: "url('images/about-2.jpeg')",
							height: "350px",
							backgroundSize: "cover",
							border: "5px solid #593625",
						}}
					></div>

					<div
						className="w-full sm:w-3/5 text-[#513223] space-y-4"
						style={{
							fontFamily: "'Inter', serif",
							fontWeight: 400,
							fontSize: "20px",
						}}
					>
						<h2 className="text-[40px] font-hedvig text-[#513223] mx-auto !justify-center !items-center">
							Mudstone Studios Program
						</h2>
						<p>
							This program offers a four-week studio opportunity for 20 club members at Mudstone Studios in Pawtucket. We allocate exclusive studio time and welcome a new cohort of members each month. 

						</p>
						
						{/*<a href="#" className="text-[#3B7F9C] underline">
							Link to mailing list/something relevant
						</a>*/}
					</div>
				</div>
				<br></br>

				<h2 className="text-[40px] font-hedvig text-[#513223] mx-auto !justify-center !items-center">
					BDW Studio Program
				</h2>

				<div className="flex flex-col sm:flex-row items-center gap-40 w-full mt-8">

					<div
						className="w-full text-[#513223] space-y-4"
						style={{
							fontFamily: "'Inter', serif",
							fontWeight: 400,
							fontSize: "20px",
						}}
					>
						<p>
							Currently accommodates 60 club members, with 6 members in the space at once. We hope to open this to a larger body of students in the near future.

						</p>
						
					</div>
				</div>

				<br></br>

				<div className="flex flex-col sm:flex-row items-center gap-40 w-full mt-8">

					<div
						className="w-full text-[#513223] space-y-4"
						style={{
							fontFamily: "'Inter', serif",
							fontWeight: 400,
							fontSize: "20px",
						}}
					>
						<p className="text-center">
							Additionally, we plan to introduce outdoor open hand-building sessions later in the spring, taking advantage of the pleasant weather. 

						</p>
						<br></br>
						<a href="https://www.brownalumnimagazine.com/articles/2025-01-16/brown-pottery-club">
							<p className="text-center">
							Check out our feature in the Brown Alumni Magazine!
							</p>
						</a>
						
					</div>
				</div>



			</div>

			{/*<div className="flex flex-col items-center w-full max-w-5xl gap-8 p-20 mx-auto">
				<h1
					style={{
						color: "#513223",
						fontFamily: "'Hedvig Letters Serif', serif",
						fontWeight: 400,
						fontSize: "50px",
					}}
				>
					Frequently Asked Questions
				</h1>
				<p
					style={{
						color: "#513223",
						fontFamily: "'Inter', serif",
						fontWeight: 600,
						fontSize: "20px",
					}}
				>
					<span style={{ fontStyle: "italic" }}>
						Lorem ipsum dolor sit amet?
					</span>
					<br />
					<span style={{ fontWeight: 400 }}>
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</span>
				</p>
				<p
					style={{
						color: "#513223",
						fontFamily: "'Inter', serif",
						fontWeight: 600,
						fontSize: "20px",
					}}
				>
					<span style={{ fontStyle: "italic" }}>
						Lorem ipsum dolor sit amet?
					</span>
					<br />
					<span style={{ fontWeight: 400 }}>
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</span>
				</p>
				<p
					style={{
						color: "#513223",
						fontFamily: "'Inter', serif",
						fontWeight: 600,
						fontSize: "20px",
					}}
				>
					<span style={{ fontStyle: "italic" }}>
						Lorem ipsum dolor sit amet?
					</span>
					<br />
					<span style={{ fontWeight: 400 }}>
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</span>
				</p>
				<p
					style={{
						color: "#513223",
						fontFamily: "'Inter', serif",
						fontWeight: 600,
						fontSize: "20px",
					}}
				>
					<span style={{ fontStyle: "italic" }}>
						Lorem ipsum dolor sit amet?
					</span>
					<br />
					<span style={{ fontWeight: 400 }}>
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</span>
				</p>
			</div>*/}

			{/*<div className="flex flex-col items-center w-full max-w-5xl gap-8 p-20 mx-auto">
				<h1
					style={{
						color: "#513223",
						fontFamily: "'Hedvig Letters Serif', serif",
						fontWeight: 400,
						fontSize: "50px",
					}}
				>
					Our Members
				</h1>
				<p
					style={{
						color: "#513223",
						fontFamily: "'Inter', serif",
						fontWeight: 400,
						fontSize: "20px",
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
					{members.map((member, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center"
						>
							<div className="w-48 h-48 bg-[#D9D9D9] rounded-2xl border-2 border-[#593625]"></div>
							<p className="mt-4 text-[#593625] font-semibold text-lg">
								{member.name}
							</p>
							<p className="text-[#593625] text-sm">
								{member.title}
							</p>
						</div>
					))}
				</div>
			</div>*/}
		</main>
	);
}
