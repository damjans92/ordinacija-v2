import React from "react";

const ServiceEndodontics = () => {
  return (
    <main>
      <div className="container mx-auto py-12">
        <h1 className="uppercase text-4xl font-extralight font-outfit mb-12 leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
          Endodoncija
          <br /> Lečenje zuba
        </h1>
        {/* <div className="py-10"></div> */}

        <div className="grid grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>
              Nakon karijesa, drugi najčešći razlog javljanja stomatologu je
              upala zubnog živca. Ona može biti posledica karijesa ili povrede.
              Ako upala prođe neopaženo ili se zanemari, prelazi u gangrenu, i
              tada se mogu javiti jak bol, otok i/ili temperatura. U tom slučaju
              terapija je duža ali moguća. Dalje, u sklopu pripreme za protetske
              radove, savetuje se endodontska terapija u određenim slučajevima,
              prema proceni doktora. Savremenim terapijskim metodama,
              instrumentima i materijalima, omogućen je jako visok procenat
              uspeha u terapiji lečenja zuba – preko 97%.
            </p>
          </div>

          <div>
            <img src="/Infekcija-zuba.jpg" alt="Infekcija zuba" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceEndodontics;
