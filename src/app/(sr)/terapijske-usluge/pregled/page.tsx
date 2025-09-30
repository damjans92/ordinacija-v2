import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

const ServiceAppointment = () => {
  return (
    <main>
      <div className="container mx-auto py-8 lg:py-12">
        <Breadcrumbs />
        <h1 className="uppercase text-2xl md:text-4xl font-extralight font-outfit mb-4 mt-4 md:leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
          Pregled
        </h1>

        <div className="grid md:grid-cols-3 gap-4 p-10 px-8 mt-12 border-1 border-foreground2">
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              Stomatološki pregled
            </h2>
            <p>
              Prvi korak ka upoznavanju sa pacijentom je pregled, pri kome se
              registruje stanje u ustima pacijenta i pravi plan za dalju
              terapiju, u skladu sa željama pacijenta i pravilima struke.
              Savetuje se rutinski pregled na svakih 6 meseci i kod pacijenata
              koji imaju naizgled zdrave zube, jer se neke promene mogu videti
              samo stručnim pregledom.
            </p>
          </div>

          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServiceAppointment;
