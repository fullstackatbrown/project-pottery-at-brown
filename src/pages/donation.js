import Header from "../../components/Header";
import Footer from "../../components/Footer";

function DonationWidget() {
  return (
    <div className="flex flex-col bg-white p-12 rounded-lg justfy-center items-center drop-shadow-2xl ">
      <h1 className="text-3xl text-[#513223] font-normal pb-4 font-hedvig">
        Donate to Pottery @ Brown!
      </h1>
      <h2 className="text-xl text-[#513223] font-normal pb-4 font-inter">Short Tagline</h2>
      <p className="text-lg text-[#513223] pb-4 font-inter">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button className="bg-[#3B7F9C] text-white font-bold py-4 px-36 rounded-full font-inter">
        Donate!
      </button>
    </div>
  );
}

export default function Donation() {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-full">
        {/* Background Section */}
        <div className="relative flex flex-row p-10 h-2/3 bg-[url(/donation-picture.jpg)] bg-cover bg-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#CFA88880]"></div>

          {/* Content */}
          <div className="grid grid-cols-2 gap-24 relative z-10 px-12">
            <div className="">
              <Pottery className="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}