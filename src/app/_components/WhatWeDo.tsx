import Card from "./Card";
import React from "react";

type WhatWeDoProps = {
  title: string;
  description: string;
  link1: { text: string; href: string };
  link2: { text: string; href: string };
  link3: { text: string; href: string };
  btnText: string;
  servicesList: { id: string | number; title: string; url: string }[];
  showDesc?: boolean;
};

const WhatWeDo = ({
  title,
  description,
  link1,
  link2,
  link3,
  servicesList,
  btnText,
  showDesc = true,
}: WhatWeDoProps) => {
  return (
    <section id="whatwedo" className="container mx-auto py-12 md:pt-24">
      <div className="flex flex-wrap mb-16">
        <div className="order-2 md:order-1 w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {servicesList.map((service) => (
            <Card url={service.url} btnText={btnText} key={service.id}>
              {service.title}
            </Card>
          ))}
        </div>
        <div className="order-1 md:order-2 lg:w-4/12 flex-col pr-12 md:pt-8 lg:pl-10 box-border">
          <h2 className="uppercase pb-7 tracking-[7px]">
            {title.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <p className=" pb-6">{description}</p>

          <div className="flex flex-col items-start gap-4 mt-8 uppercase font-bold tracking-widest mb-12">
            <a href="#" className="link-underline-reverse ">
              {link1.text}
            </a>
            <a href="#" className="link-underline-reverse ">
              {link2.text}
            </a>
            <a href="#" className="link-underline-reverse ">
              {link3.text}
            </a>
          </div>
        </div>
      </div>
      {showDesc && (
        <div>
          <p className=" pb-6 text-center">{description}</p>
        </div>
      )}
    </section>
  );
};

export default WhatWeDo;
