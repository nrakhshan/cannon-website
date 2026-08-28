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
        <p className="afacad"><i>The Cannon</i>, est. 1978, is the official arts and culture platform of the <a href="https://skule.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">University of Toronto Engineering Society</a> (EngSoc). We publish four themed magazine issues each year, both in print and online, which feature work from our staff writers alongside submissions from students at all stages of their engineering education at UofT. For our readers: you never quite know what you’ll get with each issue, so it’s always worth picking up the next copy!
          <br /><br />
          Apart from the magazine, <i>The Cannon</i> now produces its own <a href="https://open.spotify.com/show/4gLMBJ36N0LvOWx89wDbnz" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">podcast</a>, creates video content, and hosts workshops and events for the Skule<div className="inline-block text-[10px] -translate-y-2">TM</div> community. We’re also looking beyond campus to engage more closely with Toronto’s arts and culture scene, covering local events and creating opportunities to spotlight Toronto-based artists. This year, (for the first time!) that includes accredited coverage of the Toronto International Film Festival. If there’s something creative that interests you, there’s probably a place for it here.
        </p>

        <Title className="mt-15">A Brief History</Title>
        <div className="lg:grid grid-cols-3 gap-7">
          <div className="afacad col-span-2">
            <i>The Cannon</i> was founded in 1978 as a monthly newspaper to inform the student body of happenings within the faculty. Over the years, its pages increasingly became a home not only for news, but also for opinion, art, poetry, and other creative work. <i>The Cannon</i> was reimagined as an arts and culture magazine in 2022, in response to a growing demand for a dedicated creative publication within Skule<div className="inline-block text-[10px] -translate-y-2">TM</div>.
            <br /><br />
            In 2026, <i>The Cannon</i> began its next chapter, expanding beyond its quarterly magazine into a broader arts and culture hub. We launched our podcast 'Echoes from The Cannon', introduced <i>The Cannon</i>’s Creative Competition, hosted workshops and community events, and started publishing more work outside the traditional print cycle.
            <br /><br />
            If you’re interested in learning more about our history, check out our page on <a href="https://skulepedia.ca/wiki/The_Cannon_(Magazine)" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Skulepedia</a>,
            a wiki-based archive for all things engineering-related at UofT!
          </div>

          <iframe className="hidden lg:flex w-fit" data-testid="embed-iframe" style={{ borderRadius: 12 + 'px' }} src="https://open.spotify.com/embed/show/4gLMBJ36N0LvOWx89wDbnz?utm_source=generator&theme=0&si=60a74368a8f14e5c" width="50%" height="352" border="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          {/* Mobile */}
          <iframe className="flex lg:hidden mt-7" data-testid="embed-iframe" style={{ borderRadius: 12 + 'px' }} src="https://open.spotify.com/embed/show/4gLMBJ36N0LvOWx89wDbnz?utm_source=generator&theme=0&si=60a74368a8f14e5c" width="100%" height="152" border="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

        <Title className="mt-15">Meet the Team</Title>
        <p className="afacad"><i>The Cannon</i> is run by a small team of dedicated students
          at the University of Toronto. There are plenty of ways to contribute, whether you’re interested in writing, editing, graphic design, photography, podcasting, video production, social media, web development, UX/UI, or event planning. No previous experience is required, and many of our roles are an opportunity to learn as you go.
          <br /><br />
          If you’d like to join our team (and meet some very talented people!),
          click the “Join Us” button below!
        </p>
      </div>

      <Profiles />

      <p className="mx-auto text-center poppins text-[18px] mt-32 mb-6">Want to be a part of the team?</p>
      <div className="mx-auto flex justify-center text-center">
        <a href="https://docs.google.com/forms/d/1hsw1ttCi_5jtz12LeeikYzfpFJJuLU6CFI7GDITlBWU/" target="_blank" rel="noopener noreferrer"><ButtonRound text="Join Us" isHighlight="true" /></a>
      </div>
      <Footer />
    </div>
  );
}