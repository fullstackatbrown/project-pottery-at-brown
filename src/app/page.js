import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Pottery() {
  return (
    <div className="flex flex-col bg-white p-10 rounded-lg justfy-center items-center">
      <h1 className="text-2xl font-bold pb-10">Pottery @ Brown</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mt-10">
        Call to Action
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-full">
        <div className="flex flex-row p-10 h-2/3 bg-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <Pottery className="p-20" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
