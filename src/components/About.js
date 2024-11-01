import React, { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section id="about">
        <div data-aos="fade-up" className="bg-[#2C3E50] py-12">
          <div data-aos="fade-up" className="hd max-w-[800px] mx-auto px-6 ">
            <h2
              data-aos="fade-up"
              className=" text-white text-center text-2xl md:text-4xl px-6 font-bold "
            >
              Why Choose TechVibe?
            </h2>
            <p
              data-aos="fade-up"
              className="text-[#d3d3d3] md:text-center text-lg py-4 px-6"
            >
              At TechVibe, we are dedicated to delivering innovative solutions
              that empower your business. Our cutting-edge technology offers
              unparalleled features, including real-time analytics,
              user-friendly interfaces, and seamless integration, all designed
              to enhance efficiency and drive growth. Join us in shaping the
              future of technology.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="FlexSection flex flex-wrap justify-center items-center py-12 gap-8 "
          >
            <div
              data-aos="fade-up"
              className="max-w-[400px] p-6 bg-[#58c9b9] rounded-md"
            >
              <div
                data-aos="fade-up"
                className="Item flex items-center pb-4 gap-2 "
              >
                <img
                  data-aos="fade-up"
                  src="/assets/light.png"
                  width={40}
                  alt=""
                />
                <h4
                  data-aos="fade-up"
                  className="font-bold text-xl text-white "
                >
                  Cutting-Edge Technology
                </h4>
              </div>
              <div>
                <p data-aos="fade-up" className=" px-4 ">
                  Stay ahead with our latest innovations that keep your business
                  competitive.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] p-6 bg-[#58c9b9] rounded-md"
            >
              <div
                data-aos="fade-up"
                className="Item flex items-center pb-4 gap-2 "
              >
                <img
                  data-aos="fade-up"
                  src="/assets/mobile.png"
                  width={40}
                  alt=""
                />
                <h4 data-aos="fade-up" className="font-bold text-xl text-white">
                  User-Friendly Interface
                </h4>
              </div>
              <div>
                <p data-aos="fade-up" className=" px-4 ">
                  Stay ahead with our latest innovations that keep your business
                  competitive.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] p-6 bg-[#58c9b9] rounded-md"
            >
              <div
                data-aos="fade-up"
                className="Item flex items-center pb-4 gap-2 "
              >
                <img
                  data-aos="fade-up"
                  src="/assets/graph.png"
                  width={40}
                  alt=""
                />
                <h4 data-aos="fade-up" className="font-bold text-xl text-white">
                  Real-Time Analytics
                </h4>
              </div>
              <div>
                <p data-aos="fade-up" className=" px-4 ">
                  Stay ahead with our latest innovations that keep your business
                  competitive.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] p-6 bg-[#58c9b9] rounded-md"
            >
              <div
                data-aos="fade-up"
                className="Item flex items-center pb-4 gap-2 "
              >
                <img
                  data-aos="fade-up"
                  src="/assets/integration.png"
                  width={40}
                  alt=""
                />
                <h4 data-aos="fade-up" className="font-bold text-xl text-white">
                  Seamless Integration
                </h4>
              </div>
              <div>
                <p data-aos="fade-up" className=" px-4 ">
                  Stay ahead with our latest innovations that keep your business
                  competitive.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] p-6 bg-[#58c9b9] rounded-md"
            >
              <div
                data-aos="fade-up"
                className="Item flex items-center pb-4 gap-2 "
              >
                <img
                  data-aos="fade-up"
                  src="/assets/customer.png"
                  width={40}
                  alt=""
                />
                <h4 data-aos="fade-up" className="font-bold text-xl text-white">
                  Exceptional Customer Support
                </h4>
              </div>
              <div>
                <p data-aos="fade-up" className=" px-4 ">
                  Stay ahead with our latest innovations that keep your business
                  competitive.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="max-w-[400px] p-6 bg-[#58c9b9] rounded-md"
            >
              <div
                data-aos="fade-up"
                className="Item flex items-center pb-4 gap-2 "
              >
                <img
                  data-aos="fade-up"
                  src="/assets/trophy.png"
                  width={40}
                  alt=""
                />
                <h4 data-aos="fade-up" className="font-bold text-xl text-white">
                  Proven Results
                </h4>
              </div>
              <div>
                <p data-aos="fade-up" className=" px-4 ">
                  Stay ahead with our latest innovations that keep your business
                  competitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
