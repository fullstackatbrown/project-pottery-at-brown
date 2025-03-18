import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
        <h1 className="text-6xl">Home Page</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
