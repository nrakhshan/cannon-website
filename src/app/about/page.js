import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Profiles from "@/components/Profiles";
import Title from "@/components/Title";
import ButtonRound from '@/components/ButtonRound';

export default function About() {
  return (
    <div className="">
      <NavBar />
      <div className="mt-15 w-full lg:px-[6%] pt-24 px-[9%] text-[18px]">
        <Title>About <p className="italic inline">The Cannon</p></Title>
        <p className="afacad"><i>The Cannon</i>, est. 1978, is the official magazine 
        of <a href="https://skule.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">The University of Toronto Engineering Society</a> (EngSoc), publishing 
        written and visual compositions from engineers across all disciplines, 
        in all years – if you enjoy creating in any capacity, you’re always welcome 
        to contribute! Issues range in length from 24-32 pages, and are published 
        both in print and online, four times throughout the school year 
        (in September, November, January and March).  
        <br/><br/>
        Each issue has a distinct theme, selected by the Editor-in-Chief, 
        which gives each a unique feel. For our readers: you never quite 
        know what the next issue will look like, so it’s always worth it 
        to pick up the next copy! 
 </p>

        <Title className="mt-15">A Brief History</Title>
        <div className="afacad"><i>The Cannon</i> was originally started as a newspaper, 
          published monthly to inform the student body on happenings within the faculty. 
          Over the years, there became a growing need to publish not only facts but also 
          opinions, art and poetry. And thus, in 2022, as demand for an arts and culture 
          publication grew, <i>The Cannon</i>, as a magazine, was officially formed. 
          <br/><br/>
          In 2025, <i>The Cannon</i> was reformatted to include six distinct sections: Media & Culture, 
          Skule<div className="inline-block text-[10px] -translate-y-2">TM</div> Life, Science & Research, Humour & Comics, Poetry & Fiction and Puzzles & Games. 
          Regardless of what your interests are, or what kinds of content you enjoy creating (or consuming!), 
          there is a place for you to showcase your work (and explore others’ work!) here at <i>The Cannon</i>. 
          <br/><br/>
          If you’re interested in learning more about our history, check out our page on <a href="https://skulepedia.ca/wiki/The_Cannon_(Magazine)" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Skulepedia</a>, 
          a wiki-based archive for all things engineering-related at UofT! 
        </div>

        <Title className="mt-15">Meet the Team</Title>
        <p className="afacad"><i>The Cannon</i> is run by a small team of dedicated students 
          at the University of Toronto. It is comprised of three main branches: 
          the editorial team (responsible for reviewing and editing all written submissions), 
          the graphics team (responsible for most of the graphics you’ll see throughout the magazine, 
          including the front cover!) and the promotions team (responsible for this website, 
          our Instagram account @thecannonuoft, and distributing posters and printed copies of 
          the magazine across campus). 
          <br/><br/>
          If you’d like to join our team (and meet some very talented people!), 
          click the “Join Us” button below!
        </p>
      </div>

      <Profiles />
      
      <p className="mx-auto text-center poppins text-[18px] mt-32 mb-6">Want to be a part of the team?</p>
      <div className="mx-auto flex justify-center text-center">
        <a href="https://forms.gle/JHPj7FUeZwexAZwq8" target="_blank" rel="noopener noreferrer"><ButtonRound text="Join Us" isHighlight="true"/></a>
      </div>
      <Footer/>
    </div>
  );
}