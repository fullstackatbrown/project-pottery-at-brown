function Pottery() {
  return (
    <div className="flex flex-col bg-white p-12 rounded-lg justfy-center items-center drop-shadow-2xl ">
      <h1 className="text-3xl text-[#513223] font-normal pb-4 font-hedvig">
        Join Pottery @ Brown
      </h1>
      <h2 className="text-xl text-[#513223] font-normal pb-4 font-inter">
        Pottery @ Brown is open to any member of the Brown or RISD community, of
        all experience levels!
      </h2>
      <p className="text-lg text-[#513223] pb-4 font-inter">
        If you're looking for a leadership position, we also have a team of
        Studio Aides who act as teachers and space managers, ensuring that
        operations run smoothly and everyone feels supported.
      </p>
      <button className="text-[24px] bg-[#3B7F9C] text-white font-bold py-5 px-6 rounded-full font-inter">
        Fill out the interest form now!
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex-1 bg-[url(/pottery.png)] bg-cover bg-center relative flex flex-1 p-10 h-full">
        {/* Background Section */}
          {/* Overlay */}
          <div className="h-full flex-1 absolute inset-0 bg-[#CFA88880]"></div>

          {/* Content */}
          <div className="grid grid-cols-2 gap-24 relative z-10 px-12">
            <div className="">
              <Pottery className="" />
            </div>
          </div>
    </div>
  );
}
