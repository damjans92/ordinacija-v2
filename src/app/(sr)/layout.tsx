import Contact from "@/components/Contact";

export default function SerbianLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
      <Contact />
    </>
  );
}
