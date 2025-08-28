"use client";
import Image from "next/image";
import { useState } from "react";
import Hero from "./components/home/Hero";
import Doctor from "./components/home/Doctor";
import Stories from "./components/home/Stories";
import WhatWeDo from "./components/home/WhatWeDo";
import Office from "./components/home/Office";

export default function Home() {
  return (
    <main>
      <Hero />
      <Doctor />
      <Stories />
      <div className="border-t-1 border-black"></div>
      <WhatWeDo />
      <Office />
    </main>
  );
}
