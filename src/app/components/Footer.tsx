import React from "react";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="order-4 lg:order-1">
            <div className="text-5xl lg:text-7xl font-extrabold flex-none px-5 py-12 text-center">
              VTR
            </div>
          </div>
          <div className="order-1 lg:order-2 flex gap-12 mb-12 lg:mb-30">
            <div>
              <h5 className="uppercase mb-6 ">
                <a href="#">Site Links</a>
              </h5>
              <ul className="flex flex-col gap-2 leading-5">
                <li>
                  <a href="#" className="underline hover:no-underline">
                    Patient Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:no-underline">
                    {" "}
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:no-underline">
                    Print Media
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:no-underline">
                    {" "}
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase mb-6">
                <a href="#">Site Links</a>
              </h5>
              <ul className="flex flex-col gap-2 leading-5">
                <li>
                  <a href="#" className="underline hover:no-underline">
                    Patient Stories
                  </a>{" "}
                </li>
                <li>
                  <a href="#" className="underline hover:no-underline">
                    {" "}
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:no-underline">
                    Print Media
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:no-underline">
                    {" "}
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:order-3"> </div>
          <div className="order-2 lg:order-4 border-b-1 border-black lg:border-none pb-6">
            <h5 className="uppercase mb-6">Follow Us</h5>
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
        </div>
        <div className="border-t-1 border-black pt-6">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} VTR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
