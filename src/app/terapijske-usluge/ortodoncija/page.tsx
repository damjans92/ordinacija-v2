import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

const ServicePage = () => {
  return (
    <main>
      <div className="container mx-auto py-8 lg:py-12">
        <Breadcrumbs />
        <h1 className="uppercase text-2xl md:text-4xl font-extralight font-outfit mb-4 mt-4 md:leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
          Ortodoncija
        </h1>

        <div className="grid md:grid-cols-3 gap-4 p-10 px-8 mt-12 border-1 border-foreground2">
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              Fiksna proteza
            </h2>
            <p>
              Klasična fiksna proteza je postala trend među mlađom populacijom
              ali ni stariji pacijenti nemaju više otklon prema ortodotskoj
              terapiji. U slučajevima većih pomeranja i problema sa zagrižajem,
              kao i u sklopu pripreme za protetski rad, fiksni aparat je pravi
              izbor.
            </p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              Providne folije
            </h2>
            <p>
              Folije za pomeranje zuba su postale sastavni deo stomatološke
              terapije. Njihov estetski učinak je neprevaziđen, budući da su
              faktički neprimetne prilikom nošenja. Postoji nekoliko digitalnih
              sistema koji koriste softver za planiranje terapije. Ograničenja
              digitalnih sistema se ogledaju u tome što je potreban veliki broj
              skupih folija za relativno mala pomeranja. Analogna, „hibridna“
              tehnika izrade folija podrazumeva uzimanje nekoliko otisaka
              prilikom terapije, kako bi se pomeranje precizno pratilo. Tip
              folije koji se koristi u hibridnoj tehnici se menja u zavisnosti
              od vrste pomeranja, a broj folija koje se koriste je znatno manji
              nego kod digitalnih metoda, zbog bržih pomeranja i preciznije
              izrade.
            </p>
            <p className="mt-4">
              Prednosti folija u odnosu na fiksni aparat su: skidanje zbog
              održavanja higijene, udobnost prilikom nošenja, maksimalna
              estetika i mogućnost izrade terapije bez dolazaka na kontrolu u
              slučaju kada pacijent ne živi u zemlji ili u istom gradu.
            </p>
          </div>
          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
