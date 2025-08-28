import React from "react";

const Stories = () => {
  return (
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
  );
};

export default Stories;
