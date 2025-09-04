import React from "react";

const About = () => {
  return (
    <main>
      <section>
        <div className="container mx-auto py-12">
          <h1 className="text-4xl lg:text-5xl font-medium tracking-widest mb-12 uppercase leading-16 text-center">
            Vaš stomatolog
          </h1>
          <div className="flex flex-wrap justify-between gap-6 px-6 lg:px-0 max-w-4xl mx-auto  ">
            <div className="lg:flex-1">
              <p>
                Diplomirao na Stomatološkom fakultetu Univerziteta u Beogradu
                2013. godine, a 2014. nakon završenog staža otpočinje rad u
                privatnoj praksi. Usavršava se u oblasti endodontologije,
                konzervativne stomatologije i stomatološke protetike.
                <br />
                <br /> Paralelno sa radom učestvuje u sertifikovanim kursevima
                domaćih i stranih predavača iz pomenutih oblasti, kao i iz
                oblasti terapije poremećaja u radu donjoviličnog zgloba i
                estetske medicine uz primenu hijaluronskih preparata. <br />
                <br /> Tokom studija otpočinje saradnju sa Dijabetološkim
                savezom Srbije i učestvuje na kongresima u Berlinu i Barseloni
                kao stručni saradnik, gde stiče dodatna znanja iz oblasti
                dijabetologije u stomatologiji. Divnu saradnju sa kolegama,
                domaćim i inostranim pacijentima koristi kao podstrek za
                osnivanje sopstvene private prakse.
              </p>
            </div>
            <div className="flex-1 items-center justify-center">
              <img
                src="/osnivac.jpg"
                alt="Dr Savkovic"
                className="w-full grayscale-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
