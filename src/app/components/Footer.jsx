import React from "react";

const Footer = () => {
  return (
    <div className=" text-white  pb-5 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl pt-11 font-bold mb-4">Reach Out to Me</h1>
      <p className="text-lg mb-8">Built by Vinston Cutinha</p>
      <a
        href="mailto:Vinston.justin.cutinha@gmail.com"
        className="bg-white hover:bg-purple-700 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Contact Me
      </a>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Vinston Cutinha
        </p>
      </div>
    </div>
  );
};

export default Footer;
