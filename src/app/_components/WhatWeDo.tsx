import Card from "./Card";
type WhatWeDoProps = {
  showDesc?: boolean;
};

const WhatWeDo = ({ showDesc = true }: WhatWeDoProps) => {
  return (
    <section id="whatwedo" className="container mx-auto py-12 md:pt-24">
      <div className="flex flex-wrap mb-16">
        <div className="order-2 md:order-1 w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          <Card url="/terapijske-usluge/konzervativna-stomatologija">
            Konzervativna <br /> stomatologija
          </Card>
          <Card url="/terapijske-usluge/endodoncija">Endodoncija</Card>

          <Card url="/terapijske-usluge/protetska-hirurgija">
            Protetika <br /> Hirurgija
          </Card>
          <Card url="/terapijske-usluge/izbeljivanje">Izbeljivanje</Card>
          <Card url="/terapijske-usluge/pregled">Pregled</Card>
          <Card url="/terapijske-usluge/ortodoncija">Ortodoncija</Card>
          <Card url="/terapijske-usluge/terapija-donjovilicnog-zgloba">
            Terapija donjoviličnog <br /> zgloba
          </Card>
        </div>
        <div className="order-1 md:order-2 lg:w-4/12 flex-col pr-12 md:pt-8 lg:pl-10 box-border">
          <h2 className="uppercase pb-7 tracking-[7px]">
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

          <div className="flex flex-col items-start gap-4 mt-8 uppercase font-bold tracking-widest mb-12">
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
