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
        <div style={{ backgroundColor: "#E8D9CD", minHeight: "100vh", padding: "20px" }}>
            <div className="flex flex-col items-start w-full max-w-8xl gap-8 p-20 pl-40 pr-40">
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

            <div className="flex flex-col items-center w-full max-w-5xl gap-8 p-20 mx-auto">
                <h1 style={{ color: "#513223", fontFamily: "'Hedvig Letters Serif', serif", fontWeight: 400, fontSize: "50px" }}>
                    Frequently Asked Questions
                </h1>
                <p style={{ color: "#513223", fontFamily: "'Inter', serif", fontWeight: 600, fontSize: "20px" }}>
                    <span style={{ fontStyle: "italic" }}>
                        Lorem ipsum dolor sit amet?
                    </span>
                    <br />
                    <span style={{ fontWeight: 400 }}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </p>
                <p style={{ color: "#513223", fontFamily: "'Inter', serif", fontWeight: 600, fontSize: "20px" }}>
                    <span style={{ fontStyle: "italic" }}>
                        Lorem ipsum dolor sit amet?
                    </span>
                    <br />
                    <span style={{ fontWeight: 400 }}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </p>
                <p style={{ color: "#513223", fontFamily: "'Inter', serif", fontWeight: 600, fontSize: "20px" }}>
                    <span style={{ fontStyle: "italic" }}>
                        Lorem ipsum dolor sit amet?
                    </span>
                    <br />
                    <span style={{ fontWeight: 400 }}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </p>
                <p style={{ color: "#513223", fontFamily: "'Inter', serif", fontWeight: 600, fontSize: "20px" }}>
                    <span style={{ fontStyle: "italic" }}>
                        Lorem ipsum dolor sit amet?
                    </span>
                    <br />
                    <span style={{ fontWeight: 400 }}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </p>
            </div>

            <div className="flex flex-col items-center w-full max-w-5xl gap-8 p-20 mx-auto">
                <h1 style={{ color: "#513223", fontFamily: "'Hedvig Letters Serif', serif", fontWeight: 400, fontSize: "50px" }}>
                    Our Members
                </h1>
                <p style={{ color: "#513223", fontFamily: "'Inter', serif", fontWeight: 400, fontSize: "20px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {members.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 bg-[#D9D9D9] rounded-2xl border-2 border-[#593625]"></div>
                            <p className="mt-4 text-[#593625] font-semibold text-lg">{member.name}</p>
                            <p className="text-[#593625] text-sm">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}