'use client';
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import issues from '../../data/issues.json'
import Grid from "@/components/Grid";
import Title from "@/components/Title";
import React, { Suspense, useState } from 'react';

export default function Issues() {
  const [issue, setIssue] = useState(0);

  return (
    <div className="">
      <NavBar />
      {/* <div className="mt-15 mb-2 w-full lg:px-[6%] pt-24 px-[9%] text-[18px]">
        <Title>Issues</Title>
      </div> */}
      <Suspense fallback={<div className="flex justify-center py-20">Loading...</div>}>
        <Grid issues={issues} issue={issue} setIssue={setIssue} />
      </Suspense>
      <Footer />
    </div>
  );
}