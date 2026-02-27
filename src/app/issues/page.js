'use client';
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import issues from '../../data/issues.json'
import Carousel from "@/components/Carousel";
import Title from "@/components/Title";
// import PDFViewer from "@/components/PDFViewer";
import React, { useState } from 'react'
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@/components/PDFViewer"),
  { ssr: false }
);

export default function Issues() {
  const [issue, setIssue] = useState(0);

  return (
    <div className="">
      <NavBar />
      <div className="mt-15 mb-2 w-full lg:px-[6%] pt-24 px-[9%] text-[18px]">
        <Title>Issues</Title>
      </div>
      <Carousel issues={issues} issue={issue} setIssue={setIssue} />
      <PDFViewer issues={issues} issue={issue} />
      <Footer />
    </div>
  );
}