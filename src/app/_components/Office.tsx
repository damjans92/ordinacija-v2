import React, { useState } from "react";

const Office = () => {
  const [showControls, setShowControls] = useState(false);

  return (
    <section id="office" className="py-12 bg-background2 text-black border-t">
      <div className="container mx-auto pt-10">
        <div className="text-center">
          <h2 className="uppercase pb-7 md:text-4xl tracking-widest font-light">
            Pogled iz naše ordinacije
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
            className="w-full h-full object-cover mt-6 border-10 border-black"
          >
            <source src="/office.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="font-outfit font-extralight tracking-widest py-6 text-center uppercase">
            Our office is located in the heart of Belgrade, in a modern and
            comfortable building. We have state-of-the-art equipment and a team
            of experienced professionals who are dedicated to providing you with
            the best possible care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Office;
