import React from "react";
import Hero from "../components/Hero";
import Accordion from "../components/Accordion";

const FaqsPage = () => {
  return (
    <main>
      <Hero title="Najčešća pitanja" />
      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-20 px-6 py-12">
            <div className="lg:flex-1">
              <Accordion />
            </div>
            <div className="lg:flex-1 py-4">
              <h3 className="uppercase mb-6 pl-6 font-light">Vaš doktor</h3>
              <div>
                <p className="pl-6">
                  Diplomirao na Stomatološkom fakultetu Univerziteta u Beogradu
                  2013. godine, a 2014. nakon završenog staža otpočinje rad u
                  privatnoj praksi. Usavršava se u oblasti endodontologije,
                  konzervativne stomatologije i stomatološke protetike.
                  Paralelno sa radom učestvuje u sertifikovanim kursevima
                  domaćih i stranih predavača iz pomenutih oblasti, kao i iz
                  oblasti terapije poremećaja u radu donjoviličnog zgloba i
                  estetske medicine uz primenu hijaluronskih preparata.
                </p>
              </div>
              <div className="flex-1 items-center justify-center p-6">
                <img
                  src="/osnivac.jpg"
                  alt="Dr Savkovic"
                  className="w-full grayscale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaqsPage;
