import Link from "next/link";

type CardProps = {
  url: string;
  children: React.ReactNode;
};

export default function ServiceCard({ children, url }: CardProps) {
  return (
    <Link
      href={url}
      className="w-full md:flex-1 flex flex-col items-center relative bg-foreground2 text-center p-12 min-h-[200px] sm:min-h-[246px] lg:min-h-[246px] card-shine-effect border border-green-900/20"
    >
      <h3 className="m-auto uppercase text-2xl lg:text-3xl tracking-widest text-white">
        {children}
      </h3>
      <span className="z-1 uppercase text-white link-underline mt-3 tracking-widest ">
        Detaljnije
      </span>
    </Link>
  );
}
