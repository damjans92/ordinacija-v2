import React from "react";

const ServiceWhitening = () => {
  return (
    <main>
      <div className="container mx-auto py-12">
        <h1 className="uppercase text-4xl font-extralight font-outfit mb-12 leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
          Izbeljivanje
        </h1>
        {/* <div className="py-10"></div> */}

        <div className="grid grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>
              Izbeljivanje zuba može biti izvedeno u kućnim ili ordinacijskim
              uslovima. Kućno izbeljivanje se vrši izradom individualnih folija
              koje u sebi imaju rezervoare u koje se stavlja gel. Folije se nose
              nekoliko sati dnevno ili tokom noći, u zavisnosti od jačine gela.
              Ordinacijsko izbeljivanje se vrši u kratkom roku – 30 do 45
              minuta, uz primenu posebnih lampi i gelova visoke koncentracije.
              Ova metoda ne oštećuje zube, već ih hemijski dubinski čisti, čime
              se postiže belina.
            </p>
          </div>

          <div>
            <img src="/Izbeljivanje2.webp" alt="Izbeljivanje" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceWhitening;
