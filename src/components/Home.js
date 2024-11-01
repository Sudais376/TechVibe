import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home - TechVibe</title>
      </Helmet>

      <section id="home">
        <div>
          <div className="relative w-full h-[600px]">
            {/* Overlay */}
            <div className="absolute z-20 inset-0 bg-[#1A252F] opacity-50"></div>

            <img
              className="absolute z-10 w-full h-[600px]"
              src="/assets/hero.png"
              alt="Hero Image"
            />
          </div>
          <div className="absolute top-[25%] md:top-[35%] w-full text-center z-30">
            <div data-aos="fade-up" className="bg-[rgba(99,123,227,0.2)] ">
              <h2 className="font-bold text-3xl text-white hover:text-[#58C9B9] transition duration-500 lg:text-5xl px-6">
                Shaping Tomorrow’s Digital Solutions
              </h2>
              <p data-aos="fade-left" className="text-xl text-[#D3D3D3] p-4">
                Empowering your business with innovative tech solutions designed
                for the future.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="bg-[rgba(99,123,227,0.2)] flex justify-center items-center gap-6 "
            >
              <button className="bg-[#58C9B9] hover:bg-[#45A897] transition duration-500 px-6 py-2 rounded-md font-bold text-white">
                Get Started
              </button>
              <button className="px-6 py-2 border border-[#58C9B9] text-[#58C9B9] font-bold rounded-md hover:bg-white transition duration-500">
                Learn More!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
