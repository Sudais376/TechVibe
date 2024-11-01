import React from "react";

const Testimonials = () => {
  return (
    <>
      <section id="reviews" className="py-12 px-6">
        <div className="hd">
          <div>
            <h2
              data-aos="fade-up"
              className=" text-[#2C3E50] font-bold text-2xl md:text-4xl text-center px-6 pb-4"
            >
              What Our Users Say
            </h2>
            <p
              data-aos="fade-up"
              className=" max-w-[800px] text-[#5A5A5A] mx-auto md:text-center text-lg px-6 py-4"
            >
              Our clients' experiences are the best reflection of our commitment
              to innovation and quality. Discover how TechVibe's solutions have
              empowered businesses to streamline operations, enhance
              productivity, and achieve outstanding results. See what our users
              have to say about the impact we've made on their journeys.
            </p>
          </div>
        </div>

        <div data-aos ="fade-up" id="testimonials" className="carousel slide">
          <div  className="carousel-inner">
            <div  className="carousel-item active">
              <div  className="testimonialsFlex1 flex flex-wrap justify-center gap-8 py-12 ">
                <div  className="Item1 bg-[#F7F7F7] max-w-[500px] py-6 px-4 rounded-md ">
                  <p  className="pb-2">
                    <span className=" text-[#58C9B9] font-semibold text-lg">
                      Emily Ross
                    </span>{" "}
                    <span  className=" text-[#5a5a5a] text-sm px-4">
                      CEO, Future Solutions
                    </span>
                  </p>
                  <p  className="pb-4">⭐⭐⭐⭐⭐</p>
                  <p  className=" text-[#2C3E50] ">
                    TechVibe's solutions transformed our business operations. We
                    can’t imagine working without them now!
                  </p>
                </div>
                <div  className="Item2 bg-[#F7F7F7] max-w-[500px] py-6 px-4 rounded-md ">
                  <p  className="pb-2">
                    <span className=" text-[#58C9B9] font-semibold text-lg">
                      Liam Patel
                    </span>{" "}
                    <span className=" text-[#5a5a5a] text-sm px-4">
                    Marketing Director, InsightsPro
                    </span>
                  </p>
                  <p className="pb-4">⭐⭐⭐⭐</p>
                  <p  className=" text-[#2C3E50] ">
                  The user-friendly design and real-time analytics have been game-changers for us. Highly recommend TechVibe!
                  </p>
                </div>
              </div>
            </div>
            <div  className="carousel-item">
              <div className="testimonialsFlex2 flex flex-wrap justify-center gap-8 py-12 ">
                <div className="Item3 bg-[#F7F7F7] max-w-[500px] py-6 px-4 rounded-md ">
                  <p className="pb-2">
                    <span className=" text-[#58C9B9] font-semibold text-lg">
                      Sophia Kim
                    </span>{" "}
                    <span className=" text-[#5a5a5a] text-sm px-4">
                    Product Manager, InnovateTech
                    </span>
                  </p>
                  <p className="pb-4">⭐⭐⭐⭐⭐</p>
                  <p className=" text-[#2C3E50] ">
                  TechVibe exceeded our expectations with seamless integration and exceptional support. Fantastic experience!
                  </p>
                </div>
                <div className="Item4 bg-[#F7F7F7] max-w-[500px] py-6 px-4 rounded-md ">
                  <p className="pb-2">
                    <span className=" text-[#58C9B9] font-semibold text-lg">
                      James Lee
                    </span>{" "}
                    <span className=" text-[#5a5a5a] text-sm px-4">
                    Operations Head, BlueWave
                    </span>
                  </p>
                  <p className="pb-4">⭐⭐⭐⭐⭐</p>
                  <p className=" text-[#2C3E50] ">
                  From ease of use to fast performance, TechVibe is hands down the best choice for our company.
                  </p>
                </div>
              </div>
            </div>
            <div  className="carousel-item">
              <div className="testimonialsFlex3 flex flex-wrap justify-center gap-8 py-12 ">
                <div className="Item5 bg-[#F7F7F7] max-w-[500px] py-6 px-4 rounded-md ">
                  <p className="pb-2">
                    <span className=" text-[#58C9B9] font-semibold text-lg">
                      Olivia Martinez
                    </span>{" "}
                    <span className=" text-[#5a5a5a] text-sm px-4">
                    Founder, Spark Ventures
                    </span>
                  </p>
                  <p className="pb-4">⭐⭐⭐⭐</p>
                  <p className=" text-[#2C3E50] ">
                  The personalized approach and innovative solutions have given us a competitive edge. Thanks, TechVibe!
                  </p>
                </div>
              </div>
            </div>
            <button
            className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonials"
              data-bs-slide="prev"
            >
              <span
                 className="carousel-control-prev-icon bg-[#58C9B9] py-1 rounded-md"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonials"
              data-bs-slide="next"
            >
              <span
                 className="carousel-control-next-icon bg-[#58C9B9] py-1 rounded-md"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
