import Image from "next/image";
import React from "react";

const HeroGallery = () => {
  return (
    <section>
      <div className="container mx-auto">
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
              <a
                href="#"
                className="uppercase tracking-widest link-underline font-light"
              >
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
                VTR
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <a href="#" className="link-underline font-light">
            SCROLL DOWN
          </a>
        </div>
        <div className="py-12 px-6 mt-6">
          <p className="max-w-2xl mx-auto text-center">
            Success and celebrity is not what defines LLK; the doctor’s
            commitment to their patients and to each other is the true hallmark
            of the LLK philosophy. Doctors Marc Lowenberg, Gregg Lituchy and
            Brian Kantor are partners and best friends, and the key to this
            triumvirate’s success is their shared value system which places
            patient care above all else. They have done more than perfect the
            art of the smile; they have found a way to individualize the art of
            dental care and treatment so that each patient’s result reflects how
            they want to be seen, and ultimately how they see themselves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;
