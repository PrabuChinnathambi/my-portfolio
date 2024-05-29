"use client";

import React, { useState } from "react";
import { MoveDown } from "lucide-react";
import Link from "next/link";

const Welcome = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="flex flex-col items-center">
      <hr className="w-full bg-white" data-aos="flip-up" />
      <div className=" w-screen h-px animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1
        data-aos-delay="300"
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="  font-short z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
      >
        Prabu.Dev
      </h1>
      <hr className="w-full bg-white" data-aos="flip-up" />

      <div onClick={handleClick}
      >
        <Link href="/homePage">
          <MoveDown className="w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem]  delay-150 stroke-white hover:scale-150 transition-all duration-500 hover:stroke-blue cursor-pointer " />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
