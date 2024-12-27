import Image from "next/image";
import Link from "next/link"
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="parent-container">
      <Navbar/>
      <HomeContent/>
      <Footer/>
      
    </div>
  );
}
