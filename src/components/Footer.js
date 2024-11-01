import React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="py-12 bg-[#2C3E50] max-w-[1800px] mx-auto">
        <div
          data-aos=""
          className="flex flex-col lg:flex-row justify-around items-center gap-2"
        >
          <div>
            <div className="flex items-center gap-4">
            <Link to="home" smooth={true} duration={500}>
                <img className="cursor-pointer" src="/assets/logo.png" width={60} alt="Logo" />
              </Link>

              <Link to="home" smooth={true} duration={500}>
                <span className="text-white hover:!text-[#58c9b9] transition duration-500 cursor-pointer font-bold text-2xl">
                  TechVibe
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <ul className="hidden md:flex justify-center items-center gap-8">
                <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
                  <Link to="features" smooth={true} duration={500}>
                    Features
                  </Link>
                </li>
                <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
                  <Link to="about" smooth={true} duration={500}>
                    About Us
                  </Link>
                </li>
                <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
                  <Link to="testimonials" smooth={true} duration={500}>
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-white">
                <span className="text-lg font-bold">Contact:</span>{" "}
                <span>(555) 123-4567</span>
              </p>
              <p className="text-white">
                <span className="text-lg font-bold">Email:</span>
                <span> randomuser@example.com</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
