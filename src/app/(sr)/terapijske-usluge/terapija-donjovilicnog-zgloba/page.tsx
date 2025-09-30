import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

const ServicePages = () => {
  return (
    <main>
      <div className="container mx-auto py-8 lg:py-12">
        <Breadcrumbs />
        <h1 className="uppercase text-2xl md:text-4xl font-extralight font-outfit mb-4 mt-4 md:leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
          Terapija <br /> donjoviličnog zgloba
        </h1>

        <div className="grid md:grid-cols-3 gap-8 p-10 px-8 mt-12 border-1 border-foreground2">
          <div>
            <p>
              Kod velikog broja pacijenata se pri rutinskom pregledu detektuju
              različiti problemi sa donjoviličnim zglobom. Oni se ogledaju u
              širokom dijapazonu poremećaja, počevši od krckanja, pucanja,
              preskakanja u regiji ispred ušne školjke, do bolova i glavobolja.
              Poseban problem imaju pacijenti sa poremećajem u zagrižaju, kao i
              oni koji imaju oštećenje bočnih zuba koje nastaje usled prirodnog
              trošenja zubnog tkiva ili kao posledica karijesa. Kod
              uznapredovalog poremećaja funkcije javlja se i otežano otvaranje
              ili nemogućnost otvaranja usta.
            </p>
          </div>
          <div>
            <p>
              Terapija najvećeg broja poremećaja se može izvesti vežbama, uz
              izradu specijalnih splinotva ili držača položaja donje vilice.
              Nakon nekoliko dana osećaju se prva olakšanja, a nakon mesec dana
              se uglavnom povlači najveći broj simptoma. Izrada splintova je
              visoko precizan proces, budući da se svakom pacijentu pruža
              individualna terapija. Topao savet pacijentima je da obave pregled
              u slučaju glavobolja (posebno jutarnjih), kao i bolova u ramenima,
              vratu i lopaticama, jer uzrok bolova može biti porekla
              donjoviličnog zgloba.
            </p>
          </div>
          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServicePages;
