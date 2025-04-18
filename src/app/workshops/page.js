import GCalEmbed from "./GCalEmbed";

export default function Workshops() {
	return (
		<main className="bg-[url(/background.png)] bg-cover bg-center min-h-screen flex flex-col justify-center p-10 h-full">
			<h1 className="text-[50px] font-hedvig text-[#513223] mx-auto !justify-center !items-center">
				Workshops
			</h1>

			<p className="text-lg text-[#513223] pt-4 pr-5 pl-5 font-inter mt-5">
				Workshops are outdoor open 2-hour handbuilding sessions for club
				members looking for a lower commitment to pottery, yet
				interested in getting their hands dirty with clay! In Spring
				2024 we had two workshops, and will likely have one or two in
				Spring 2025. Make sure to stay posted on the email list.
			</p>
			<br></br>
			<center>
				<GCalEmbed></GCalEmbed>
			</center>
			<br></br>
			<div className="flex justify-center">
				<button
					type="button"
					className="text-chocolate bg-seashell hover:bgseashell focus:ring-4 font-medium rounded-full text-sm px-7 py-1"
				>
					Book a Time
				</button>
			</div>
		</main>
	);
}
