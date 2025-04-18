import Image from "next/image";

function Art(props){
	return(
		<>
		{/* Hover effect */}
		<div className="relative group flex flex-col rounded-lg justify-center items-center drop-shadow-2xl text-center w-[300px] h-[300px]">
			<Image
				src={props.image}
				alt="Gallery Image"
				fill
				className="object-cover transition-transform duration-300"
			/>
			{/* Hover overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<p className="text-white text-lg font-bold">{props.hoverText}</p>
			</div>
		</div>
		</>
	);
}


export default function Gallery() {
	return (
		<main className="bg-[url(/background.png)] bg-cover bg-center min-h-screen flex flex-col justify-center p-10 h-full">
			<h1 className="text-[50px] font-hedvig text-[#513223] mx-auto justify-center items-center">
				<p className="justify-center items-center text-center pb-10">
					Gallery
				</p>
				<div className="grid grid-cols-3 grid-rows-6 gap-10 px-10">
					{/* Place Holder until backend fits all the images */}
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
					<Art image="/images/placehold.jpg" hoverText="Art 1" />
				</div>
			</h1>
		</main>
	);
}
