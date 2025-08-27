"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showControls, setShowControls] = useState(false);

  return (
    <main>
      <section id="hero" className="container mx-auto">
        <div className="flex flex-wrap border-1 border-black">
          <div className="w-full lg:w-1/2">
            <Image
              src="/banner-image-left.jpg"
              alt="Hero Image"
              width={450}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col p-12">
            {/* H1 fills top space */}
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <h1 className="text-3xl lg:text-5xl font-medium tracking-widest mb-4">
                THE ART OF <br /> THE SMILE
              </h1>
              <a href="#" className="uppercase tracking-widest link-underline">
                Pročitajte više
              </a>
            </div>

            {/* Paragraph sticks to bottom */}
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <p className="mt-4 text-md font-bold uppercase tracking-widest font-quicksand text-center md:text-left">
                nađite nas na adresi
                <br /> Radovana Simića Cige 7<br /> 11000 Beograd
              </p>
              <div className="text-5xl lg:text-7xl font-extrabold flex-none px-5">
                <Image
                  src="/Logo.svg"
                  alt="Logo"
                  width={220} // base size
                  height={40}
                  className="w-34 sm:w-38 md:w-45 lg:w-48 h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <a href="#" className="link-underline">
            SCROLL DOWN
          </a>
        </div>
      </section>
      <section id="doctors" className="container mx-auto py-12">
        <div className="flex flex-wrap">
          <div className="order-2 lg:order-1 lg:w-5/12 flex flex-col md:text-center lg:justify-center lg:items-center">
            <h2 className="uppercase pb-7 text-2xl lg:text-4xl tracking-widest">
              The <br />
              Doctors
            </h2>
            <p className="pb-6 md:px-10">
              Dr. Marc Lowenberg, Dr. Gregg Lituchy, and Dr. Brian Kantor are
              cosmetic dentists who have transformed the smiles of many of the
              world’s best-known actors, models, rock stars, authors, and other
              public figures. Since the 1980’s, Dr. Lowenberg and Dr. Lituchy
              have been at the forefront of the field, with Dr. Kantor joining
              the practice in 2002.
            </p>
            <a href="#" className="uppercase pb-6 link-underline">
              Read more
            </a>
          </div>
          <div className="order-1 lg:order-2 lg:w-7/12 mb-6 lg:mb-0 bg-gray-400 h-full w-full ">
            <img src="https://placehold.co/1400x776" alt="" />
          </div>
        </div>
      </section>
      <section id="stories" className="container mx-auto py-12">
        <div className="flex flex-col border-1 items-center justify-center border-black text-center bg-gray-300 min-h-[426px]">
          <h2 className="uppercase pb-7 text-4xl tracking-widest">
            View our
            <br /> patient stories
          </h2>
          <a href="#" className="uppercase link-underline w-auto">
            See our results
          </a>
        </div>
        <div className="text-center w-full py-6">
          <a href="#" className="uppercase pb-6 text-center link-underline">
            More
          </a>
        </div>
        <h2 className="uppercase pb-7 text-4xl tracking-widest"></h2>
      </section>
      <div className="border-t-1 border-black"></div>
      <section id="whatwedo" className="container mx-auto py-12 ">
        <div className="flex flex-wrap mb-16">
          <div className="lg:w-8/12 flex gap-6 flex-wrap box-border">
            <a
              href="#"
              className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[320px]"
            >
              <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
                Porcelain
                <br /> veneers
              </h3>
              <span className="uppercase text-white link-underline">More</span>
            </a>
            <a
              href="#"
              className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[320px]"
            >
              <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
                Bonding
              </h3>
              <span className="uppercase text-white link-underline">More</span>
            </a>
            <a
              href="#"
              className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[320px]"
            >
              <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
                Whitening
              </h3>
              <span className="uppercase text-white link-underline">More</span>
            </a>
            <a
              href="#"
              className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[320px]"
            >
              <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
                Procelain fillings
              </h3>
              <span className="uppercase text-white link-underline">More</span>
            </a>
          </div>
          <div className="lg:w-4/12 flex-col pr-12 pt-8 lg:pl-10 box-border">
            <h2 className="uppercase pb-7 tracking-widest">
              What
              <br /> we do
            </h2>
            <p className=" pb-6">
              Your smile is your calling card. Whether you’re on a job interview
              or a first date – or just going through the many actions and
              interactions of an average day – your smile has an immediate
              impact on the way people perceive you. And if you’re embarrassed
              about your teeth – because of spaces, chips, crookedness, or color
              – people aren’t perceiving the most confident and attractive
              version of you.
            </p>

            <div className="flex flex-col items-start gap-4 mt-8 uppercase font-bold tracking-widest">
              <a href="#" className="link-underline-reverse ">
                More about our procedures
              </a>
              <a href="#" className="link-underline-reverse ">
                Before and after gallery
              </a>
              <a href="#" className="link-underline-reverse ">
                Read our faqs
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className=" pb-6 text-center">
            Lowenberg, Lituchy & Kantor is a cosmetic dental practice in
            Manhattan, New York (NY) at the forefront of the cosmetic dental
            revolution. In the early 1980’s, Dr. Marc Lowenberg became the
            founding member of this dental practice that early on included rock
            stars, movie stars, fashion designers, artists and authors, who were
            among the first to seek cosmetic dental enhancement and smile
            makeover. He was later joined by Dr.Gregg Lituchy and Dr. Brian
            Kantor. Over the years, they earned the moniker of “dentists to the
            stars” and became universally renowned for their smile
            transformations with the use of porcelain veneers. With the addition
            of Jason J. Kim, a master ceramist, and a world class in house
            dental lab, LLK
          </p>
        </div>
      </section>
      <div></div>
      <section id="office" className="py-12 bg-foreground2 text-white">
        <div className="container mx-auto  ">
          <div className="text-center">
            <h2 className=" uppercase pb-7 text-4xl tracking-widest">
              View our office
            </h2>
            <p className="">
              You can visit us at Radovana Simica Cige 7, 11000 Beograd
            </p>
          </div>
          <div
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <video
              loop
              muted
              playsInline
              controls={showControls}
              className="w-full h-full object-cover mt-6"
            >
              <source src="/office.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="font-quicksand tracking-widest py-6 text-center uppercase">
              Our office is located in the heart of Belgrade, in a modern and
              comfortable building. We have state-of-the-art equipment and a
              team of experienced professionals who are dedicated to providing
              you with the best possible care.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
