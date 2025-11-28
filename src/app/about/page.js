import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Profiles from "@/components/Profiles";
import Title from "@/components/Title";

export default function About() {
  return (
    <div className="">
      <NavBar />
      <div className="mt-15 w-full lg:px-[6%] pt-24 px-[9%] text-[18px]">
        <Title>About <p className="uppercase inline">The Cannon</p></Title>
        <p className="afacad">The Cannon, est. 1978, is the official magazine of 
          The University of Toronto Engineering Society (EngSoc), publishing all 
          kinds of written and visual compositions from engineers across all disciplines, 
          in all years – if you enjoy creating in any capacity, you’re always welcome to 
          contribute! Issues range in length from 24-32 pages, and are published both in 
          print and online, four times throughout the school year (in September, November, 
          January and March). Each issue has a distinct theme, selected by the Editor-in-Chief, 
          which gives each  issue a unique feel. For our readers: you never quite know what the 
          next issue will look like, so it’s always worth it to pick up the next copy! </p>

        <Title className="mt-15">A Brief History</Title>
        <p className="afacad">The Cannon, est. 1978, is the official magazine of 
          The University of Toronto Engineering Society (EngSoc), publishing all 
          kinds of written and visual compositions from engineers across all disciplines, 
          in all years – if you enjoy creating in any capacity, you’re always welcome to 
          contribute! Issues range in length from 24-32 pages, and are published both in 
          print and online, four times throughout the school year (in September, November, 
          January and March). Each issue has a distinct theme, selected by the Editor-in-Chief, 
          which gives each  issue a unique feel. For our readers: you never quite know what the 
          next issue will look like, so it’s always worth it to pick up the next copy! </p>

        <Title className="mt-15">Meet the Team</Title>
        <p className="afacad">The Cannon, est. 1978, is the official magazine of 
          The University of Toronto Engineering Society (EngSoc), publishing all 
          kinds of written and visual compositions from engineers across all disciplines, 
          in all years – if you enjoy creating in any capacity, you’re always welcome to 
          contribute! Issues range in length from 24-32 pages, and are published both in 
          print and online, four times throughout the school year (in September, November, 
          January and March). Each issue has a distinct theme, selected by the Editor-in-Chief, 
          which gives each  issue a unique feel. For our readers: you never quite know what the 
          next issue will look like, so it’s always worth it to pick up the next copy! </p>
      </div>
      <Profiles />
      <Footer/>
    </div>
  );
}