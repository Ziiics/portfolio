import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-[200px] flex justify-between items-center mx-auto my-auto p-8">
      <img src={logo} alt="logo" />
      <ul className="hidden md:flex flex-row gap-8 text-2xl mr-10 font-bold static">
        <li>
            <a href="#skill" className="ease-in duration-300">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden z-50">
        {nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>

      <div
        className={
          nav
            ? "z-10 fixed left-[-100%] ease-in-out duration-300 top-0"
            : "absolute  w-full h-[30vh] left-0 top-0 ease-in-out duration-300 bg-white"
        }
      >
        <ul className="flex flex-col p-8 pt-20 gap-4 text-2xl font-semibold">
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
