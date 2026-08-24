import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar className={"bg-gradient-to-b from-black to-transparent"} />
      <Landing />
      <Footer />
    </div>
  );
}