"use client"
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

	const READ_KEY = process.env.NEXT_PUBLIC_COSMIC_READ_KEY;

	useEffect(() => {
		async function fetchGallery() {
		  try {
			const query = encodeURIComponent(JSON.stringify({ type: "gallery" }));
			const url =  "https://api.cosmicjs.com/v3/buckets/potterybrown-production/objects?pretty=true&query=%7B%22type%22:%22galleries%22%7D&limit=100&read_key=d457O3yZQcIoACYAEF2Q6SYGoBQ5Q8waV36wRrfgaf9HOnjHVU&depth=1&props=slug,title,metadata";
	
			const response = await fetch(url);
			if (!response.ok) throw new Error("Failed to fetch gallery");
	
			const data = await response.json();
			setGallery(data.objects || []);
			setLoading(false);
		  } catch (err) {
			setError(err.message);
			setLoading(false);
		  }
		}
	
		fetchGallery();
	  }, [READ_KEY]);
	
	  const getImageUrl = (item) => {
		const image = item.metadata?.image;
		return image?.imgix_url || image?.url || "/placeholder-image.png";
	  };

	return (
		<main className="bg-[url(/background.png)] bg-cover bg-center min-h-screen flex flex-col justify-center p-10 h-full">
			<h1 className="text-[50px] font-hedvig text-[#513223] mx-auto justify-center items-center">
				<p className="justify-center items-center text-center pb-10">
					Gallery
				</p>
							{loading ? (
					<p className="text-center">Loading gallery...</p>
				) : error ? (
					<p className="text-center text-red-500">Error: {error}</p>
				) : (
					<div className="grid grid-cols-3 gap-10 px-10 justify-center items-center">
					{artGallery.map((art) => (
						<Art
						key={art.slug}
						image={getImageUrl(art)}
						hoverText={art.metadata?.credits || "Unknown"}
						/>
					))}
					</div>
				)}
			</h1>
		</main>
	);
}
