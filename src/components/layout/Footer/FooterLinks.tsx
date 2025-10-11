import React from "react";

interface QuickLink {
  href: string;
  text: string;
}

interface FooterLinksProps {
  tData: {
    title: string;
    link1: QuickLink;
    link2: QuickLink;
    link3: QuickLink;
    link4: QuickLink;
    link5: QuickLink;
    link6: QuickLink;
  };
}

const FooterLinks: React.FC<FooterLinksProps> = ({ tData }) => {
  return (
    <div className="order-1 lg:order-2 flex gap-12 mb-12 lg:mb-30">
      <div className="lg:mx-auto">
        <h3 className="text-lg font-semibold mb-6   uppercase">
          {tData.title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12 ">
          <ul className="space-y-2">
            <li>
              <a
                href={tData.link1.href}
                className="underline hover:no-underline"
              >
                {tData.link1.text}
              </a>
            </li>
            <li>
              <a
                href={tData.link2.href}
                className="underline hover:no-underline"
              >
                {tData.link2.text}
              </a>
            </li>
            <li>
              <a
                href={tData.link3.href}
                className="underline hover:no-underline"
              >
                {tData.link3.text}
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <a
                href={tData.link4.href}
                className="underline hover:no-underline"
              >
                {tData.link4.text}
              </a>
            </li>
            <li>
              <a
                href={tData.link5.href}
                className="underline hover:no-underline"
              >
                {tData.link5.text}
              </a>
            </li>
            <li>
              <a
                href={tData.link6.href}
                className="underline hover:no-underline"
              >
                {tData.link6.text}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
