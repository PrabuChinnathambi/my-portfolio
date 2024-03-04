'use client'

import React from "react";
import Layout from "./Layout";
import PersonImg from "../../public/DevImage.svg";
import Image from "next/image";
import AboutMe from "./AboutMe";
import { UserCircleIcon } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      <div className="container ">
        <div>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <hr
              className="h-px w-full bg-white animate-fade-left"
              data-aos="flip-up"
            />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-jump-out animate-once animate-duration-[2000ms] animate-delay-1000font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
              Welcome Home ...!
            </h1>
            <hr
              className="w-full bg-white animate-fade-left "
              data-aos="flip-up"
            />
          </div> */}
          <div data-aos="zoom-in-up"
            data-aos-duration="1000" 
            className="flex justify-between items-center gap-[5rem] h-full rounded-sm  ">
            <div
              className="w-[60%] p-[20px] "
              data-aos="fade-right"
              // data-aos-delay="1000"
              data-aos-duration="1500"
            >
              <h3 className=" text-white" >Web Developer</h3>
              <h2 className=" text-white" >
                Hi, I'm <span className="text-blue  font-short ">Prabu</span>{" "}
                <br />
                Chinnathambi From India
              </h2>
              <p className="text-[14px] text-gray">
                I am a passionate individual who is dedicated to creating
                end-to-end products that develop sustainable and scalable social
                and technical systems to make a lasting impact. I am adept at
                utilizing the latest technologies such as React, Next.js, and
                Tailwind CSS to achieve my goals. My commitment to innovation
                and my ability to create attractive, user-friendly designs make
                me a valuable asset to any team.
              </p>
            </div>
            <div
              className="w-[30%]"
              data-aos="fade-left"
              // data-aos-delay="1000"
              data-aos-duration="1500"
            >
              <Image priority src={PersonImg} alt="Follow us on Twitter" />
            </div>
          </div>
        </div>
        <div className="mt-[5rem]" ><AboutMe /></div>
      </div>
    </Layout>
  );
};

export default Home;
