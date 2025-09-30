"use client";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { faqsData } from "@/data/faqs";

type AccordionProps = {
  questions: {
    title: string;
    content: string;
  }[];
};

export default function Accordion({ questions }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Da li su intervencije bezbolne, da li uvek dajete anesteziju?",
      content:
        "U 95% slučajeva intervencije su apsolutno bezbolne. Postoje slučajevi kada je davanje anestezije bespotrebno, jer zub ne može boleti - na primer, ako nema živac. Isto tako, delovanje anestezije može biti ograničeno na 80-90% kada su akutne upale u pitanju. Zato se UVEK preporučuju redovne kontrole, kako bismo mogli da obezbedimo maksimalan komfor pacijenata.",
    },
    {
      title: "Da li izbeljivanje zuba oštećuje zube?",
      content:
        "Ne, preparati koji se koriste u našoj ordinaciji su registrovani i najvišeg su kvaliteta. Izbeljivanje zuba je zapravo dubinsko čišćenje gleđi, posebnim preparatima i na određeni način, tako da ne dolazi do fizičkog i hemijskog oštećenja.",
    },
    {
      title:
        "Da li se u Vašoj ordinaciji izvode sve procedure ili samo estetska stomatologija?",
      content:
        "U našoj ordinaciji se izvode kompletne stomatološke usluge, od izbeljivanja zuba pa do najkompleksnijih implantno nošenih protetskih radova. ",
    },
    {
      title:
        'Koliko poseta je potrebno od kada dođem u ordinaciju, da "dobijem nove zube"?',
      content:
        'Ovo pitanje, neretko ovako formulisano, je možda i najčešće. Nažalost, univerzalan odgovor je - zavisi od slučaja. Nekada se iz dve posete zameni 5-6 plombi ili se uradi most sa dve nadogradnje. U drugim slučajevima, za dve krunice se može dolaziti četiri puta. Sve zavisi od stepena oštećenja tkiva i od mnogih drugih faktora. Ono što uvek naglašavam pacijentima - pođite od toga da i doktor i pacijent žele da se što pre dobiju što bolji rezultati, tako da "odugovlačenje" sa radom nikada nije proizvod nezainteresovanosti doktora.',
    },
    {
      title:
        'Skupljam novac da dođem kod Vas, pa da "sredim sve". Koliko mi otprilike treba novca? ',
      content:
        'Uz prethodno pitanje, najčešće je i razumljivo je što se postavlja. Treba imati u vidu sledeće stvari: najčešće u praksi se dešava da pacijent preceni cenu rada, pa zaključi da je to "mogao i mnogo ranije da završi, da je znao". Sledeće, ako ne znamo šta se radi, ne znamo ni koliko košta. Zato bez detaljnog pregleda i plana terapije ne vredi diskutovati na tu temu, čak ni okvirno. Na posletku, najvažnije - NAJTEŽE JE POČETI. Krenite od malih stvari - plombe, lečenje zuba, uklanjanje kamenca. Finansijski se tako mnogo manje optereti pacijent, a ujedno se stvori dobra navika redovnih poseta. Kroz vreme, sve se reši i to bez stresa. Zato - krenite odmah.',
    },
    {
      title:
        "Da li se moji zubi mogu pomeriti sa folijama ili moram da stavim fiksnu protezu?",
      content:
        "Pomeranje, pa čak i veće, prednjih zuba, može se izvesti sa folijama, jer se u našoj ordinaciji radi analognom metodom koja to omogućava. Ukoliko to nije moguće, angažujemo specijalistu ortodoncije kako bi se pristupilo terapiji fiksnim protezama. Moderni materijali i tehnike pomeranja omogućavaju da se i mlađim pacijentima to uspešno izvede.",
    },
    {
      title:
        "Plašim se da uradim veliki protetski rad, jer ne želim da mi zubi budu blještavi i da izgledaju veštački.",
      content:
        'Razumljiv je strah pacijenata jer ulažu vreme i novac, a ne znaju kako će to izgledati. Tehničari sa kojima sarađujemo dugi niz godina koriste najmodernije materijale, edukuju se i ulažu u znanje, kako bismo mogli da pružimo najviši nivo kvaliteta. Kada su kompleksni slučajevi u pitanju, postoji mogućnost izrade visoko estetskih privremenih kruna i mostova, kao i kompjuterskih modela osmeha, tzv. mock-up. Na taj način pacijent može da se "upozna" sa novim osmehom i tako do detalja možemo da izađemo u susret pacijentu.',
    },
    {
      title: "Da li će me vađenje živca boleti?",
      content:
        'Vađenje živca je bezbolno. Može se dogoditi da istog ili narednog dana zub bude osetljiv na zagrižaj ili da "bridi" ali to se svakako ne može meriti sa jačinom bola upaljenog zuba.',
    },
  ];

  return (
    <div className="mx-auto space-y-2">
      {questions.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full flex font-outfit font-light uppercase tracking-widest justify-between items-center py-4 text-left border-b-3 border-[var(--foreground2)]  bg-[var(--background2)] "
          >
            {item.title}
            <span className="ml-5">
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-600 ${
              openIndex === index ? "max-h-150 " : "max-h-0 "
            }  text-gray-700`}
          >
            <p className="py-4   text-gray-700  ">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
