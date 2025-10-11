import React from "react";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareYoutube,
} from "react-icons/fa6";

interface FooterSocialProps {
  title: string;
}

const FooterSocial = ({ title }: FooterSocialProps) => {
  return (
    <div className="order-2 lg:order-4 border-b-1 border-black lg:border-none pb-6">
      <h5 className="text-lg uppercase mb-6 font-semibold ">{title}</h5>
      <div className="flex gap-4">
        <div>
          <FaSquareFacebook size={30} />
        </div>
        <div>
          <FaSquareInstagram size={30} />
        </div>
        <div>
          <FaSquareYoutube size={30} />
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
