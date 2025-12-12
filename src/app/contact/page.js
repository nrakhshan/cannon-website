import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import ButtonRound from '@/components/ButtonRound';
import Title from "@/components/Title";

export default function Contact() {
  return (
    <div className="">
      <NavBar />
      <div className="mt-15 w-full lg:px-[6%] pt-24 lg:pb-4 block lg:flex px-[9%] justify-between text-[18px]">
          <div className="afacad space-y-1 text-left pb-6">
            <Title>Contact Us</Title>
            <b>Instagram: </b><a href="https://www.instagram.com/thecannonuoft/" target="_blank" rel="noopener noreferrer"><p className="inline afacad text-blue-500 underline">@thecannonuoft</p></a>
            <br/>
            <b>Discord: </b><a href="https://discord.gg/FSwwhMqPPe" target="_blank" rel="noopener noreferrer"><p className="inline afacad text-blue-500 underline">discord.gg/FSwwhMqPPe</p></a>
            <br/>
            <b>Email: </b><a href="mailto:cannon@skule.ca"><p className="inline afacad text-blue-500 underline">cannon@skule.ca</p></a>
          </div>
          <div className="lg:w-[48%]">
            <ContactForm />
          </div>
      </div>
      <div className="w-full px-[9%] lg:px-[6%] pb-12 lg:pb-24 pt-36 lg:pt-0 space-y-6 lg:space-y-4 text-left">
          <Title>Get Involved</Title>
          <p className="afacad text-[18px]">Interested in the chance to be published 
            in a print magazine for all of UofT to see? Here at <i>The Cannon</i>, we are 
            always looking for new writers, artists, graphic designers, and more! 
            You can join us at any point throughout the year – no experience required, all are welcome! 
            <br/><br/>
            If you’re interested in getting involved, fill out the form below with a 
            brief description of your interests and what part of the magazine you’re hoping 
            to work on, and we’ll get back to you as soon as possible. Looking forward to 
            connecting with you!
          </p>
          <div className="flex justify-center lg:justify-start text-center pt-6">
            <a href="https://forms.gle/JHPj7FUeZwexAZwq8" target="_blank" rel="noopener noreferrer"><ButtonRound text="Join Us" isHighlight="true"/></a>
          </div>
      </div>
      <Footer />
    </div>
  );
}