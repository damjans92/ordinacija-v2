import React from "react";

const WhatWeDo = () => {
  return (
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
            interactions of an average day – your smile has an immediate impact
            on the way people perceive you. And if you’re embarrassed about your
            teeth – because of spaces, chips, crookedness, or color – people
            aren’t perceiving the most confident and attractive version of you.
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
          stars” and became universally renowned for their smile transformations
          with the use of porcelain veneers. With the addition of Jason J. Kim,
          a master ceramist, and a world class in house dental lab, LLK
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
