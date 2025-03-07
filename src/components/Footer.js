import Image from "next/image";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <div className="flex grid grid-col-6 gap-4 p-10 justfy-center items-center">
          <Image
            className="row-span-2"
            src="/brown.svg"
            alt="Brown"
            width={200}
            height={200}
          />
        </div>
      </footer>
    );
  };
  
  export default Footer;