import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <div className="min-h-[85vh] pt-10 flex flex-col items-center justify-center">
      <ScrollAnimation
        animateIn="fadeIn"
        className="lg:text-6xl text-4xl duration-1000 font-bold"
      >
        Contact Me
      </ScrollAnimation>

      <div className="p-12 flex flex-col items-center space-y-12">
        <ScrollAnimation
          animateIn="fadeIn"
          delay={300}
          className="duration-1000"
        >
          <a
            href="mailto:zivanacsyah@gmail.com"
            className="px-[50px] py-4 rounded-xl mr-4 text-[#f0ede6] bg-[#306398] text-xl font-semibold md:px-32"
          >
            Email
          </a>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          delay={600}
          className="duration-1000"
        >
          <a
            href="https://www.linkedin.com/in/zivana-syahputri/"
            className="px-8 py-4 rounded-xl mr-4 text-[#f0ede6] bg-[#306398] text-xl font-semibold md:px-28"
          >
            LinkedIn
          </a>
        </ScrollAnimation>
      </div>

      <div className="max-w-[800px} mx-auto">
        <ScrollAnimation
          animateIn="fadeIn"
          delay={900}
          className="duration-1000"
        >
          <div className="mt-6 border-4 border-[#306398] rounded-3xl">
            <div className="p-10">
              <form action="https://getform.io/f/apjmyjea" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Your Name"
                        className="w-full md:px-8 md:py-6 p-4 text-[#306398] placeholder-[#306398] font-mono text-l
                                rounded-2xl border-2 border-[#306398] focus:border-orange-300"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="email"
                        id=""
                        placeholder="Your Email"
                        className="w-full md:px-8 md:py-6 p-4 text-[#306398] placeholder-[#306398] font-mono text-l
                                rounded-2xl border-2 border-[#306398] focus:border-orange-300"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id=""
                        placeholder="Your Message"
                        className="w-full md:px-8 md:py-6 p-4 text-[#306398] placeholder-[#306398] font-mono text-l
                                rounded-2xl border-2 border-[#306398] focus:border-orange-300"
                        rows="4"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="text-xl w-full p-4 mt-2 font-semibold text-white bg-orange-300 rounded-full"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Contact;
