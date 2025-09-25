import React from "react";

const Contact = () => {
  return (
    <section id="stories" className="bg-foreground2 text-white">
      <div className="container mx-auto py-12 pb-24 text-white">
        <h2 className="md:text-4xl text-center uppercase pb-7 tracking-[7px]">
          Kontakt
        </h2>
        <p className="text-center text-white mb-12">
          Posetite nas u Radovana Simica Cige 7, 11000 Beograd
        </p>
        <div className="flex flex-wrap gap-8 border-2 border-background2/25 ">
          <div className="order-2 md:order-1 w-full md:flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.6911350433247!2d20.497611681968248!3d44.774319826168764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71d1d92fc845%3A0xebf4ebf097ca252f!2sDr%20Savkovi%C4%87%20Dental%20Office!5e0!3m2!1sen!2srs!4v1637866099433!5m2!1sen!2srs"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Dr Savkovic dental office"
            ></iframe>
          </div>
          <article className="order-1 md:order-2 w-full md:flex-1 flex flex-col gap-8 md:gap-12 justify-start p-6 pt-12 text-center md:text-left">
            <h3 className="text-2xl font-light tracking-widest uppercase">
              Zakazivanje termina
            </h3>

            <div className="info-box">
              {/* <img
                alt="Zakazivanje termina"
                style={{ width: "200px", marginLeft: "-20px" }}
              /> */}
              <div className="leading-7 md:leading-10 text-lg">
                <span>
                  <strong>PON - PET</strong>: 11h - 19h
                </span>
                <br />
                <span>
                  <strong>SUB i NED</strong> po pozivu
                </span>
                <br />
                <br />
                <span>
                  <strong>Email</strong>: info@drsavkovic.rs
                </span>
                <br />
                <span>
                  <strong>Telefon</strong>:{" "}
                  <a href="tel:+381691986900">069/19 869 00</a>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
