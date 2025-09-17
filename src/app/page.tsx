"use client";

import Doctor from "./_components/Doctor";
import Stories from "./_components/Stories";
import WhatWeDo from "./_components/WhatWeDo";
import Office from "./_components/Office";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">
        Dr Savković – stomatolog u Beogradu, zdrav osmeh za ceo život
      </h1>
      <Hero title="Zdrav osmeh za ceo život" imageSrc="/banner-home2.jpg" />
      <Doctor />
      <Stories />
      <div className="border-t-1 border-black"></div>
      <WhatWeDo />
      <Office />
    </main>
  );
}
