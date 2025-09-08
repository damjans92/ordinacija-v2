import Breadcrumbs from "@/app/components/Breadcrumbs";
import React from "react";

const ServiceConservative = () => {
  return (
    <main>
      <div className="container mx-auto py-12">
        <h1 className="uppercase text-4xl font-extralight font-outfit mb-12 leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
          Konzervativna
          <br /> stomatologija
        </h1>
        <Breadcrumbs />
        <div className="grid grid-cols-3 gap-4 p-10 px-8 mt-7 border-1 border-foreground2">
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              Ispuni (plombe) i viniri
            </h2>
            <p>
              Klasične kompozitne (bele) plombe su standard u zbrinjavanju
              karijesa ili zameni crnih plombi. Od kompozitnih materijala se
              mogu napraviti i ljuspice (viniri), kojima se mogu preoblikovati
              prednji zubi, te u nekim slučajevima mogu biti bolji izbor od
              krunica, jer se na taj način čuva više zubnog tkiva. Kada se
              nadoknađuje zub koji je endodontski tretiran (izvađen živac), u
              tom slučaju se plombe mogu ojačati metalnim kočićem ili FRC (Fiber
              Reinforced Composite) kočićem.
            </p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              Indirektne plombe/inleji
            </h2>
            <p>
              Posebno velika destrukcija zuba se u nekim situacijama može
              nadoknaditi bez brušenja zuba, izradom indirektnih plombi (inleja)
              na modelu, koje se potom cementiraju posebnim kompozitnim
              cementima boje zuba, radi maksimalnog estetskog učinka. Indirektne
              plombe ili inleji mogu biti izrađeni i od keramike.
            </p>
          </div>
          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServiceConservative;
