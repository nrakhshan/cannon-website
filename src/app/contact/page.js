import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import ButtonRound from '@/components/ButtonRound';
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="">
      <NavBar />
      <DesktopContact />
      <MobileContact />
      <Footer />
    </div>
  );
}

const DesktopContact = () => {
  return (
    <div className="hidden lg:block">
      <div className="mt-15 w-full px-[6%] pt-24 pb-4 flex justify-between text-[18px]">
          <div className="space-y-1 text-left">
            <h1 className="cantata font-light text-4xl pb-4">Contact Us</h1>
            <p className="afacad"><b>Instagram: </b>@cannon.mag</p>
            <p className="afacad"><b>Discord: </b>discord.gg/FSwwhMqPPe</p>
            <p className="afacad"><b>Email: </b>cannon@skule.ca</p>
          </div>
          <div className="w-[48%]">
            <ContactForm />
          </div>
      </div>
      <div className="w-full px-[6%] pb-24 space-y-4 text-left">
          <h1 className="cantata font-light text-4xl">Get Involved</h1>
          <p className="afacad text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <div className="flex justify-start text-center mb-15">
            <ButtonRound text="Join Us" isHighlight="true"/>
          </div>
      </div>
    </div>
  )
}

const MobileContact = () => {
  return (
    <div className="block lg:hidden">
      <div className="w-full px-[9%] pt-24 text-[18px]">
          <div className="space-y-1 text-left pb-6">
            <h1 className="cantata font-light text-4xl mt-15 pb-6">Contact Us</h1>
            <p className="afacad"><b>Instagram: </b>@cannon.mag</p>
            <p className="afacad"><b>Discord: </b>discord.gg/FSwwhMqPPe</p>
            <p className="afacad"><b>Email: </b>cannon@skule.ca</p>
          </div>
          <ContactForm />
          <div className="space-y-6 pt-36 pb-12 text-left">
            <h1 className="cantata font-light text-4xl">Get Involved</h1>
            <p className="afacad">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div className="w-full text-center pt-6 mb-15 flex justify-center">
              <ButtonRound text="Join Us" isHighlight="true"/>
            </div>
          </div>
      </div>
    </div>
  )
}