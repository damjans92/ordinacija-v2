// app/en/layout.tsx
import Contact from "@/components/Contact";

export default function EnglishLayout({
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
