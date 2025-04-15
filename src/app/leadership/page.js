// "use client"
// import Image from "next/image";
// import { useState, useEffect } from "react";

// function Profile(props) {
//   return (
//     <div className="pb-10 flex flex-col rounded-lg justfy-center items-center drop-shadow-2xl text-center">
//       <h2 className="font-bold text-xl text-[#513223] pb-4 font-inter">
//         {props.title}
//       </h2>
//       <Image
//         src={props.image}
//         alt={props.name}
//         width={200}
//         height={200}
//         className="rounded-full border-4 border-[#513223]"
//       />
//       <h1 className="text-3xl text-[#513223] font-normal font-hedvig">
//         {props.name}
//       </h1>
//       <h1 className="text-2xl text-[#513223] font-normal pb-4 font-hedvig">
//         {props.pronouns}
//       </h1>
//       <p className="text-lg text-[#513223] pb-4 font-inter">
//         {props.description}
//       </p>
//     </div>
//   );
// }

// export default function Workshops() {
//   const [adminProfiles, setAdminProfiles] = useState([]);
//   const [studioAidProfiles, setStudioAidProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchProfiles() {
//       try {
//         const response = await fetch(
//           "https://api.cosmicjs.com/v3/buckets/potterybrown-production/objects?pretty=true&query=%7B%22type%22:%22leaderships%22%7D&limit=18&skip=0&read_key=d457O3yZQcIoACYAEF2Q6SYGoBQ5Q8waV36wRrfgaf9HOnjHVU&depth=1&props=slug,title,metadata,type,"
//         );
        
//         if (!response.ok) {
//           throw new Error("Failed to fetch profiles");
//         }
        
//         const data = await response.json();
        
//         const admins = data.objects.filter(profile => profile.metadata.admin === true);
//         const studioAids = data.objects.filter(profile => profile.metadata.admin === false);
        
//         setAdminProfiles(admins);
//         setStudioAidProfiles(studioAids);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     }

//     fetchProfiles();
//   }, []);

// const getImageUrl = (profile) => {
//     if (profile.metadata.image && profile.metadata.image.imgix_url) {
//       return profile.metadata.image.imgix_url;
//     }
//     else if (profile.metadata.image && profile.metadata.image.url) {
//       return profile.metadata.image.url;
//     }
//     return "/placeholder-image.png";
//   };

//   return (
//     <main className="bg-[url(/background.png)] bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-10 h-full">
//       {/*admins*/}
//       <div className="flex flex-col min-h-full justify-center items-center">
//         <h1 className="text-[50px] font-hedvig text-[#513223]">Admin</h1>
//         {loading ? (
//           <p>Loading profiles...</p>
//         ) : error ? (
//           <p>Error loading profiles: {error}</p>
//         ) : (
//           <div className="grid grid-cols-3 grid-rows-2 px-55">
//             {adminProfiles.map((admin) => (
//               <Profile
//                 key={admin.slug}
//                 title={admin.metadata.title}
//                 name={admin.title}
//                 pronouns={admin.metadata.pronouns}
//                 description={admin.metadata.description}
//                 image={getImageUrl(admin)}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/*studio aids*/}
//       <div className="flex flex-col min-h-full justify-center items-center">
//         <h1 className="text-[50px] font-hedvig text-[#513223]">Studio Aids</h1>
//         {loading ? (
//           <p>Loading profiles...</p>
//         ) : error ? (
//           <p>Error loading profiles: {error}</p>
//         ) : studioAidProfiles.length === 0 ? (
//           <p>No studio aids found</p>
//         ) : (
//           <div className="grid grid-cols-4 grid-rows-3">
//             {studioAidProfiles.map((studioAid) => (
//               <Profile
//                 key={studioAid.slug}
//                 title={studioAid.metadata.title || ""}
//                 name={studioAid.title}
//                 pronouns={studioAid.metadata.pronouns}
//                 description={studioAid.metadata.description}
//                 image={getImageUrl(studioAid)}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

function Profile(props) {
  return (
    <div className="pb-10 flex flex-col rounded-lg justify-center items-center drop-shadow-2xl text-center group">
      <h2 className="font-bold text-xl text-[#513223] pb-4 font-inter">
        {props.title}
      </h2>
      {/* Hover effect area on image */}
      <div className="relative">
        <Image
          src={props.image}
          alt={props.name}
          width={200}
          height={200}
          className="rounded-full border-4 border-[#513223] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-bold">{props.hoverText}</p>
        </div>
      </div>
      <h1 className="text-3xl text-[#513223] font-normal font-hedvig">
        {props.name}
      </h1>
      <h1 className="text-2xl text-[#513223] font-normal pb-4 font-hedvig">
        {props.pronouns}
      </h1>
      <p className="text-lg text-[#513223] pb-4 font-inter">
        {props.description}
      </p>
    </div>
  );
}

export default function Workshops() {
  const [adminProfiles, setAdminProfiles] = useState([]);
  const [studioAidProfiles, setStudioAidProfiles] = useState([]);
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
    <main className="bg-[url(/background.png)] bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-10 h-full">
      {/*admins*/}
      <div className="flex flex-col min-h-full justify-center items-center">
        <h1 className="text-[50px] font-hedvig text-[#513223]">Admin</h1>
        {loading ? (
          <p>Loading profiles...</p>
        ) : error ? (
          <p>Error loading profiles: {error}</p>
        ) : (
          <div className="grid grid-cols-3 grid-rows-2 px-55">
            {adminProfiles.map((admin) => (
              <Profile
                key={admin.slug}
                title={admin.metadata.title}
                name={admin.title}
                pronouns={admin.metadata.pronouns}
                description={admin.metadata.description}
                image={getImageUrl(admin)}
                hoverText="PlaceHolder" // Add hover text prop if needed
              />
            ))}
          </div>
        )}
      </div>

      {/*studio aids*/}
      <div className="flex flex-col min-h-full justify-center items-center">
        <h1 className="text-[50px] font-hedvig text-[#513223]">Studio Aids</h1>
        {loading ? (
          <p>Loading profiles...</p>
        ) : error ? (
          <p>Error loading profiles: {error}</p>
        ) : studioAidProfiles.length === 0 ? (
          <p>No studio aids found</p>
        ) : (
          <div className="grid grid-cols-4 grid-rows-3">
            {studioAidProfiles.map((studioAid) => (
              <Profile
                key={studioAid.slug}
                title={studioAid.metadata.title || ""}
                name={studioAid.title}
                pronouns={studioAid.metadata.pronouns}
                description={studioAid.metadata.description}
                image={getImageUrl(studioAid)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
