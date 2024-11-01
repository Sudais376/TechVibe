import React, { useEffect } from "react";
import AOS from "aos";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section id="features" data-aos="fade-up" className="py-12 px-6">
        <div className="hd">
          <div>
            <h2
              data-aos="fade-up"
              className="font-bold text-2xl md:text-4xl text-center px-6 pb-4"
            >
              Key features of TechVibe
            </h2>
            <p
              data-aos="fade-up"
              className=" max-w-[800px] text-[#5A5A5A] mx-auto md:text-center text-lg py-4 px-6"
            >
              Discover the powerful features that make TechVibe the ideal choice
              for forward-thinking businesses. From seamless integration to
              unmatched performance, TechVibe provides the tools and technology
              needed to stay ahead in a competitive landscape. Explore how each
              feature is designed to enhance productivity, simplify processes,
              and drive success.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-8 py-12"
        >
          <div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] bg-[#F7F7F7] border border-[#E0E0E0] p-4 rounded-md "
            >
              <img
                className="rounded-md h-[350px] object-cover transform transition duration-300 hover:scale-105"
                src="/assets/rank.png"
                width={400}
                alt=""
              />
              <div data-aos="fade-up">
                <h4
                  data-aos="fade-up"
                  className="font-semibold text-xl py-2 text-[#2C3E50]"
                >
                  Fast, Reliable Performance
                </h4>
                <p data-aos="fade-up" className=" text-[#5a5a5a] pb-4 ">
                  Experience unparalleled speed and reliability designed to meet
                  your business’s demands.
                </p>
              </div>
              <div data-aos="fade-up">
                <button className="bg-[#58C9B9] hover:bg-[#45A897] w-full transition duration-500 px-6 py-2 rounded-md font-bold text-white">
                  Learn More!
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] min-h-[420px] bg-[#F7F7F7] border border-[#E0E0E0] p-4 rounded-md "
            >
              <img
                className="rounded-md h-[350px] object-cover transform transition duration-300 hover:scale-105 "
                src="/assets/interface.png"
                width={400}
                alt=""
              />
              <div data-aos="fade-up">
                <h4
                  data-aos="fade-up"
                  className="font-semibold text-xl py-2 text-[#2C3E50]"
                >
                  {" "}
                  Intuitive User Interface
                </h4>
                <p data-aos="fade-up" className=" text-[#5a5a5a] pb-4 ">
                  Our user-friendly design ensures seamless navigation for a
                  hassle-free experience.
                </p>
              </div>
              <div data-aos="fade-up">
                <button className="bg-[#58C9B9] hover:bg-[#45A897] w-full transition duration-500 px-6 py-2 rounded-md font-bold text-white">
                  Learn More!
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] bg-[#F7F7F7] border border-[#E0E0E0] p-4 rounded-md "
            >
              <img
                className="rounded-md h-[350px] object-cover transform transition duration-300 hover:scale-105"
                src="/assets/cardintegration.png"
                width={400}
                alt=""
              />
              <div data-aos="fade-up">
                <h4
                  data-aos="fade-up"
                  className="font-semibold text-xl py-2 text-[#2C3E50]"
                >
                  Seamless Integration
                </h4>
                <p data-aos="fade-up" className=" text-[#5a5a5a] pb-4 ">
                  Effortlessly integrate with existing tools to enhance
                  functionality.
                </p>
              </div>
              <div data-aos="fade-up">
                <button className="bg-[#58C9B9] hover:bg-[#45A897] w-full transition duration-500 px-6 py-2 rounded-md font-bold text-white">
                  Learn More!
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] bg-[#F7F7F7] border border-[#E0E0E0] p-4 rounded-md "
            >
              <img
                className="rounded-md h-[350px] object-cover transform transition duration-300 hover:scale-105"
                src="/assets/security.png"
                width={400}
                alt=""
              />
              <div data-aos="fade-up">
                <h4
                  data-aos="fade-up"
                  className="font-semibold text-xl py-2 text-[#2C3E50]"
                >
                  Advanced Security
                </h4>
                <p data-aos="fade-up" className=" text-[#5a5a5a] pb-4 ">
                  Protect your data with our robust, state-of-the-art security
                  features.
                </p>
              </div>
              <div data-aos="fade-up">
                <button className="bg-[#58C9B9] hover:bg-[#45A897] w-full transition duration-500 px-6 py-2 rounded-md font-bold text-white">
                  Learn More!
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] bg-[#F7F7F7] border border-[#E0E0E0] p-4 rounded-md  "
            >
              <img
                className="rounded-md h-[350px] object-cover transform transition duration-300 hover:scale-105 "
                src="/assets/customizedsolution.png"
                width={400}
                alt=""
              />
              <div data-aos="fade-up">
                <h4
                  data-aos="fade-up"
                  className="font-semibold text-xl py-2 text-[#2C3E50]"
                >
                  {" "}
                  Customizable Solutions
                </h4>
                <p data-aos="fade-up" className=" text-[#5a5a5a] pb-4 ">
                  Tailor features to meet the unique needs of your business.
                </p>
              </div>
              <div data-aos="fade-up">
                <button className="bg-[#58C9B9] hover:bg-[#45A897] w-full transition duration-500 px-6 py-2 rounded-md font-bold text-white">
                  Learn More!
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] bg-[#F7F7F7] border border-[#E0E0E0] p-4 rounded-md "
            >
              <img
                className="rounded-md h-[350px] object-cover transform transition duration-300 hover:scale-105"
                src="/assets/cardanalytics.png"
                width={400}
                alt=""
              />
              <div data-aos="fade-up">
                <h4
                  data-aos="fade-up"
                  className="font-semibold text-xl py-2 text-[#2C3E50]"
                >
                  Real-Time Analytics
                </h4>
                <p data-aos="fade-up" className=" text-[#5a5a5a] pb-4 ">
                  Track and analyze performance with real-time data insights.
                </p>
              </div>
              <div data-aos="fade-up">
                <button className="bg-[#58C9B9] hover:bg-[#45A897] w-full transition duration-500 px-6 py-2 rounded-md font-bold text-white">
                  Learn More!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
