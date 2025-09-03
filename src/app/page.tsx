"use client";

import Doctor from "./components/home/Doctor";
import Stories from "./components/home/Stories";
import WhatWeDo from "./components/home/WhatWeDo";
import Office from "./components/home/Office";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero imageSrc="/banner-home.jpg" />
      <Doctor />
      <Stories />
      <div className="border-t-1 border-black"></div>
      <WhatWeDo />
      <Office />
    </main>
  );
}
