import Link from "next/link";

type WhatWeDoProps = {
  showDesc?: boolean;
};

const WhatWeDo = ({ showDesc = true }: WhatWeDoProps) => {
  return (
    <section id="whatwedo" className="container mx-auto py-12 ">
      <div className="flex flex-wrap mb-16">
        <div className="lg:w-8/12 flex gap-6 flex-wrap box-border">
          <Link
            href="/services/conservative-dentistry"
            className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[170px]"
          >
            <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
              Konzervativna <br /> stomatologija
            </h3>
            <span className="uppercase text-white link-underline tracking-widest font-light">
              Detaljnije
            </span>
          </Link>
          <Link
            href="/services/endodontics"
            className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[170px]"
          >
            <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
              Endodoncija
            </h3>
            <span className="uppercase text-white link-underline tracking-widest font-light">
              Detaljnije
            </span>
          </Link>
          <a
            href="#"
            className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[170px]"
          >
            <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
              Protetika <br /> Hirurgija
            </h3>
            <span className="uppercase text-white link-underline tracking-widest font-light">
              Detaljnije
            </span>
          </a>
          <a
            href="#"
            className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[170px]"
          >
            <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
              Izbeljivanje
            </h3>
            <span className="uppercase text-white link-underline tracking-widest font-light">
              Detaljnije
            </span>
          </a>
          <a
            href="#"
            className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[170px]"
          >
            <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
              Pregled
            </h3>
            <span className="uppercase text-white link-underline tracking-widest font-light">
              Detaljnije
            </span>
          </a>
          <a
            href="#"
            className="flex-1 flex flex-col items-center bg-foreground2 text-center p-12 lg:min-h-[170px]"
          >
            <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
              Ortodoncija
            </h3>
            <span className="uppercase text-white link-underline tracking-widest font-light">
              Detaljnije
            </span>
          </a>
          <a
            href="#"
            className="flex-1 flex flex-col grow items-center bg-foreground2 text-center p-12 lg:min-h-[170px]"
          >
            <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
              Terapija donjoviličnog <br />
              zgloba
            </h3>
            <span className="uppercase text-white link-underline tracking-widest font-light">
              Detaljnije
            </span>
          </a>
          <div className="flex-1 flex flex-col grow items-center text-center p-12 lg:min-h-[170px]"></div>
        </div>
        <div className="lg:w-4/12 flex-col pr-12 pt-8 lg:pl-10 box-border">
          <h2 className="uppercase pb-7 tracking-widest">
            Za vaš <br />
            osmeh
          </h2>
          <p className=" pb-6">
            Your smile is your calling card. Whether you’re on a job interview
            or a first date – or just going through the many actions and
            interactions of an average day – your smile has an immediate impact
            on the way people perceive you. And if you’re embarrassed about your
            teeth – because of spaces, chips, crookedness, or color – people
            aren’t perceiving the most confident and attractive version of you.
          </p>

          <div className="flex flex-col items-start gap-4 mt-8 uppercase font-bold tracking-widest">
            <a href="#" className="link-underline-reverse ">
              Više o procedurama
            </a>
            <a href="#" className="link-underline-reverse ">
              Pre i posle galerija
            </a>
            <a href="#" className="link-underline-reverse ">
              Pročitajte Najčešća pitanja
            </a>
          </div>
        </div>
      </div>
      {showDesc && (
        <div>
          <p className=" pb-6 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem et
            fugit quia totam expedita beatae consequatur obcaecati. Distinctio
            quo, et assumenda porro nulla odio expedita inventore repellat dicta
            omnis dolores explicabo voluptatibus nisi, cum voluptates? Commodi
            beatae sapiente facilis unde aspernatur a expedita consectetur
            necessitatibus vitae vero. Necessitatibus itaque odit id iusto
            eveniet incidunt, quaerat deleniti quas dolore aut qui? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus, expedita
            tenetur. Ab nostrum natus voluptates numquam impedit atque soluta
            accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis praesentium quidem officia saepe odit? Odit dolorum magnam
            sed repudiandae sapiente?
          </p>
        </div>
      )}
    </section>
  );
};

export default WhatWeDo;
