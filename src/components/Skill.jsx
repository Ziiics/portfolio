import React from "react";
import cpp from "../assets/c.png";
import css from "../assets/css.png";
import dart from "../assets/dart.png";
import flutter from "../assets/flutter.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import letter_c from "../assets/letter_c.png";
import oracle from "../assets/oracle.png";
import physics from "../assets/physics.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import { useEffect } from "react";
import { gsap } from "gsap";

const Skill = () => {
  useEffect(() => {
    gsap.fromTo(
      ".rotate",
      { rotation: 0 },
      { rotation: 360, duration: 4, ease: "none", stagger: 2 }
    );
  }, []);

  return (
    <div className="lg:h-screen place-items-center flex justify-around items-center">
      <div className="p-8 md:flex md:justify-center" id="skill">
        <div className="border-4 border-[#306398] p-12 rounded-3xl grid lg:grid-cols-4 grid-cols-2 md:mx-[10vh] my-auto gap-8 md:gap-12 md:gap-x-20 border border-[#306398]">
          <div>
            <h2 className="text-3xl font-extrabold">
              My <br />
              Tech <br />
              Skills
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={letter_c}
              alt="c logo"
              className="rotate md:size-32 size-20"
            />
            <h3 className="font-bold text-md pt-4">C</h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={cpp} alt="cpp logo" className="rotate md:size-32 size-20" />
            <h3 className="font-bold text-md pt-4">C++</h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={css} alt="css logo" className="rotate md:size-32 size-20" />
            <h3 className="font-bold text-md pt-4">CSS</h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={dart} alt="dart logo" className="rotate md:size-32 size-20" />
            <h3 className="font-bold text-md pt-4">Dart</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={flutter}
              alt="flutter logo"
              className="rotate md:size-32 size-20"
            />
            <h3 className="font-bold text-md pt-4">Flutter</h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={html} alt="html logo" className="rotate md:size-32 size-20" />
            <h3 className="font-bold text-md pt-4">HTML</h3>
          </div>

          <div className="flex flex-col items-center">
            <img src={js} alt="js logo" className="rotate md:size-32 size-20" />
            <h3 className="font-bold text-md pt-4">JavaScript</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={oracle}
              alt="oracle logo"
              className="rotate md:size-32 size-20"
            />
            <h3 className="font-bold text-md pt-4">Oracle Cloud</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={physics}
              alt="react logo"
              className="rotate md:size-32 size-20"
            />
            <h3 className="font-bold text-md pt-4">React</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={python}
              alt="python logo"
              className="rotate md:size-32 size-20"
            />
            <h3 className="font-bold text-md pt-4">Python</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={tailwind}
              alt="tailwind logo"
              className="rotate md:size-32 size-20"
            />
            <h3 className="font-bold text-md pt-4">Tailwind</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
