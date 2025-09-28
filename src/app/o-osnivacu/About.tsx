import React from "react";

type AboutProps = {
  aboutTitle: string;
  aboutText: string;
};

const About = ({ aboutTitle, aboutText }: AboutProps) => {
  return (
    <main>
      <section>
        <div className="container mx-auto py-8 lg:py-12">
          <h1 className="text-3xl lg:text-5xl font-normal tracking-widest mb-12 uppercase lg:leading-16 text-center">
            {aboutTitle}
          </h1>
          <div className="flex flex-wrap justify-between gap-6 px-6 lg:px-0 max-w-4xl mx-auto  ">
            <div className="lg:flex-1">
              <p>
                {aboutText.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
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
