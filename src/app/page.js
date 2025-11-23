import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="cantata text-[200px] leading-none uppercase text-left w-[65%] m-auto mt-50">The Cannon</div>
      <p className="afacad font-bold text-4xl text-center mt-15">Home page</p>
      <Landing />
      <Footer />
    </div>
  );
}