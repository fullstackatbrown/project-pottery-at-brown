import Image from "next/image";
import { useState, useEffect } from "react";

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
				<p className="text-white text-lg font-bold">
					Photo Credit:{props.hoverText}
					</p>
			</div>
		</div>
		</>
	);
}




export default function Gallery() {

	const [artGallery, setGallery] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchProfiles() {
		try {
			const response = await fetch(
			"https://api.cosmicjs.com/v3/buckets/potterybrown-production/objects?pretty=true&query=%7B%22type%22:%22leaderships%22%7D&limit=18&skip=0&read_key=d457O3yZQcIoACYAEF2Q6SYGoBQ5Q8waV36wRrfgaf9HOnjHVU&depth=1&props=slug,title,metadata,type,"
			);
			
			if (!response.ok) {
			throw new Error("Failed to fetch profiles");
			}
			
			const data = await response.json();
			
			const admins = data.objects.filter(profile => profile.metadata.admin === true);
			const studioAids = data.objects.filter(profile => profile.metadata.admin === false);
			
			setAdminProfiles(admins);
			setStudioAidProfiles(studioAids);
			setLoading(false);
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
		}

		fetchProfiles();
	}, []);

	const getImageUrl = (profile) => {
		if (profile.metadata.image && profile.metadata.image.imgix_url) {
		return profile.metadata.image.imgix_url;
		}
		else if (profile.metadata.image && profile.metadata.image.url) {
		return profile.metadata.image.url;
		}
		return "/placeholder-image.png";
	};


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
