'use client';
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Winners from "@/components/Winners";
import Title from "@/components/Title";

export default function Competition() {
    return (
        <div className="">
            <NavBar />
            <div className="mt-15 w-full lg:px-[6%] pt-24 px-[9%] text-[18px]">
                <Title><p className="italic inline">The Cannon</p>'s Creative Competition</Title>
                <p className="afacad mb-7">Each issue, we invite all UofT Engineering students to submit original <b>photography</b>, <b>poetry</b>, and <b>short fiction</b> inspired by that issue’s theme. Prizes are awarded to the top three submissions in each category, plus a feature in The Cannon’s print edition! Details about upcoming competitions are shared on our Instagram and in the monthly EngSoc newsletter.
                    <br /><br />
                    Past winners and runners-up are available on this page.
                </p>
            </div>
            <Winners />
            <Footer />
        </div>
    );
}