export default function Home() {
    return (
        <div style={{ backgroundColor: "#E8D9CD", minHeight: "100vh", padding: "20px" }}>
            <div className="flex flex-col items-center sm:items-start w-full max-w-8xl gap-8 p-20 pl-40 pr-40">
                <h1 style={{ color: "#513223", fontFamily: "'Hedvig Letters Serif', serif", fontWeight: 400, fontSize: "40px" }}>
                    About Pottery @ Brown
                </h1>
                <p style={{ color: "#513223", fontFamily: "'Inter', serif", fontWeight: 400, fontSize: "24px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-40 w-full mt-8">
                    <div className="w-full sm:w-2/5 p-4 rounded-lg" style={{ backgroundColor: "#D3D3D3", height: "350px", border: "5px solid #593625" }}></div>

                    <div className="w-full sm:w-3/5 text-[#513223] space-y-4" style={{ fontFamily: "'Inter', serif", fontWeight: 400, fontSize: "20px" }}>
                        <p>Details about the location of the club, meeting times, resources at the location, etc.</p>
                        <p>Details about the location of the club, meeting times, resources at the location, etc.</p>
                        <p>Details about the location of the club, meeting times, resources at the location, etc.</p>
                        <p>Details about the location of the club, meeting times, resources at the location, etc.</p>
                        <a href="#" className="text-[#3B7F9C] underline">
                            Link to mailing list/something relevant
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}