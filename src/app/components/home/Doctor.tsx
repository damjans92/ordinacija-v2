import React from "react";

const Doctor = () => {
  return (
    <section id="doctor" className="container mx-auto py-12">
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
            public figures. Since the 1980’s, Dr. Lowenberg and Dr. Lituchy have
            been at the forefront of the field, with Dr. Kantor joining the
            practice in 2002.
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
  );
};

export default Doctor;
