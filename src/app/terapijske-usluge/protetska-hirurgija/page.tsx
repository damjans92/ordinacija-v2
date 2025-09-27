import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

const ServiceProstetics = () => {
  return (
    <main>
      <div className="container mx-auto py-8 lg:py-12">
        <Breadcrumbs />
        <h1 className="uppercase text-2xl md:text-4xl font-extralight font-outfit mb-4 mt-4 md:leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
          Protetska
          <br /> hirurgija
        </h1>

        <div className="grid md:grid-cols-3 gap-4 p-10 px-8 mt-12 border-1 border-foreground2">
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              Fiksna protetika – mostovi, krunice i implanti
            </h2>
            <p>
              Najbrži način nadoknade izgubljenog zuba je svakako izrada mosta,
              a najbrži način estetskog zbrinjavanja zuba (veliki ispuni –
              plombe, promena boje zuba zbog povrede ili nakon starog lečenja)
              je izrada krunica. Danas postoje, pored klasičnih metalokeramičkih
              kruna i mostova, i bezmetalne varijante koje pružaju superiornu
              estetiku po pristupačnim cenama. Zubni implanti su sastavni deo
              moderne stomatologije i danas postoji širok dijapazon pouzdanih
              svetskih proizvođača, te je moguće nadoknaditi zub, uz očuvanje
              susednih zuba, za novac koji više nije nedostižan.
            </p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              Mobilna protetika – zubne proteze
            </h2>
            <p>
              U situacijama kada nedostaje veliki broj zuba a fiksni rad ili
              ugradnja implantata nisu mogući, klasične zubne proteze su jedini
              izbor. One se mogu kombinovati sa fiksnim radovima – mostovima i
              krunicama, kada situacija to dozvoljava, što povećava njihovu
              stabilnost i ujedno čuva preostale zube. Totalne zubne proteze su
              terapija izbora kada nedostaju svi zubi i one mogu biti izrađene
              standardnom metodom ili u kombinaciji sa implantima, kada je
              međusobna veza na bazi magneta ili drikera. Ovo omogućava skidanje
              proteze radi higijene, dok istovremeno omogućava čvrstu vezu
              proteza sa vilicama.
            </p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              Hirurške intervencije
            </h2>
            <p>
              Manje hirurške intervencije kao što su vađenje zuba, ušivanje rane
              nakon povreda ili drenaža abscesa, se rutinski izvode. Kod
              komplikovanih vađenja i intervencija angažuje se specijalista
              oralne hirurgije.
            </p>
          </div>
          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServiceProstetics;
