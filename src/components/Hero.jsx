import React from "react";
import profile from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="md:h-[80vh] grid grid-cols-1 md:grid-cols-2 place-content-center">
      <div className="col-span-1">
        <img src={profile} alt="profile picture" />
      </div>

      <div className="cols-span-2 items-center my-auto mx-10">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="text-2xl italic font-semibold">Hi, I am a</span>{" "}
          <br />
          <TypeAnimation
            sequence={[
              "Recent Undergraduate",
              1000,
              "Webdesigner",
              1000,
              "Cybersecurity Geek",
              1000,
              "Data Network Learner",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="flex sm:text-md my-6 lg:text-xl font-mono">
          My name is Zivana C Syahputri, <br />
          recent graduate from CUNY Hunter College, NYC <br />
          with a degree in Computer Science BA. <br />
          <br />
          I specialize in IT and Cybersecurity and <br />
          have experience in Unix programming and Webdesign.
        </p>

        <div className="py-8">
          <a
            href="/cv.pdf"
            download="Zivana_CV.pdf"
            className="px-6 py-3 w-full rounded-xl mr-4 text-[#f0ede6] bg-[#306398] font-semibold"
          >
            Download CV
          </a>
          <a
            href="mailto: zivanacsyah@gmail.com"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-[#f0ede6] text-[#306398] border border-[#306398] font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
