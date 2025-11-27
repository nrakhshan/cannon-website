import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <div className="">
      <NavBar />
      <div className="cantata text-[14vw] leading-none uppercase text-left w-[70%] m-auto mt-50 z-10">The Cannon</div>
      <p className="afacad font-bold text-4xl text-center mt-15 mb-50">About Page</p>
      <Footer/>
    </div>
  );
}