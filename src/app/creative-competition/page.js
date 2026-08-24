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
                {/* Replace this text */}
                {/* <p className="afacad mb-7"><i>The Cannon</i>, est. 1978, is the official magazine
                    of <a href="https://skule.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">The University of Toronto Engineering Society</a> (EngSoc), publishing
                    written and visual compositions from engineers across all disciplines,
                    in all years – if you enjoy creating in any capacity, you’re always welcome
                    to contribute! Issues range in length from 24-32 pages, and are published
                    both in print and online, four times throughout the school year
                    (in September, November, January and March).
                </p> */}
            </div>
            <Winners />
            <Footer />
        </div>
    );
}