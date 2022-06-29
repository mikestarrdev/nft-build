import Navbar from "../components/Navbar";
import Uploader from "../components/Uploader";

function Home() {
  return (
    <>
      <Navbar />
      <h1 className="font-bold text-3xl text-center mx-auto my-3">NFT Gram</h1>
      <h3 className="text-center text-xl">
        Mint your own NFT's with 1 click! Drag & Drop, create an NFT with 1
        click
      </h3>
      <Uploader />
    </>
  );
}

export default Home;
