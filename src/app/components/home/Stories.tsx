import React from "react";

const Stories = () => {
  return (
    <section id="stories" className="container mx-auto py-12">
      <div className="flex flex-col border-1 items-center justify-center border-black text-center bg-gray-300 min-h-[260px] lg:min-h-[426px]">
        <h2 className="uppercase pb-7 lg:text-4xl tracking-widest leading-12">
          Pogledajte priče <br /> naših pacijenata
        </h2>
        <a href="#" className="uppercase tracking-widest link-underline w-auto">
          Pogledajte naŠe rezultate
        </a>
      </div>
      <div className="text-center w-full py-6">
        <a
          href="#"
          className="uppercase tracking-widest pb-6 text-center link-underline  font-light"
        >
          Pročitaj više
        </a>
      </div>
      <h2 className="uppercase pb-7 text-4xl tracking-widest"></h2>
    </section>
  );
};

export default Stories;
