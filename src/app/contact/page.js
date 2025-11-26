import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import ButtonRound from '@/components/ButtonRound';
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="">
      <NavBar />
      <div className="mt-15 w-full lg:px-[6%] pt-24 lg:pb-4 block lg:flex px-[9%] justify-between text-[18px]">
          <div className="space-y-1 text-left pb-6">
            <h1 className="cantata font-light text-4xl pb-6 lg:pb-4">Contact Us</h1>
            <p className="afacad"><b>Instagram: </b>@thecannonuoft</p>
            <p className="afacad"><b>Discord: </b>discord.gg/FSwwhMqPPe</p>
            <p className="afacad"><b>Email: </b>cannon@skule.ca</p>
          </div>
          <div className="lg:w-[48%]">
            <ContactForm />
          </div>
      </div>
      <div className="w-full px-[9%] lg:px-[6%] pb-12 lg:pb-24 pt-36 lg:pt-0 space-y-6 lg:space-y-4 text-left">
          <h1 className="cantata font-light text-4xl">Get Involved</h1>
          <p className="afacad text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <div className="flex justify-center lg:justify-start text-center mb-15 pt-6 lg:pt-0">
            <ButtonRound text="Join Us" isHighlight="true"/>
          </div>
      </div>
      <Footer />
    </div>
  );
}