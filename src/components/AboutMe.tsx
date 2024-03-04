"use client";
import Image from "next/image";
import React from "react";
import NextJsLogo from "../../public/Icons/nextJsLogo.svg";
import ReactJsLogo from "../../public/Icons/reactJsLogo.svg";
import HtmlLogo from "../../public/Icons/htmlLogo.png";
import CssLogo from "../../public/Icons/cssLogo.png";
import JsLogo from "../../public/Icons/jsLogo.png";
import TailwindcssLogo from "../../public/Icons/tailwindcss.png";
import { AlignJustify } from "lucide-react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center relative ">
        <p
          data-aos="flip-down"
          data-aos-duration="500"
          data-aos-delay="300"
          className="w-[60%] text-white border border-white rounded-[30px] p-[20px]"
        >
          As a techie and developer, I excel in blending hard work with smart
          strategies. My journey is a testament to my passion for innovation and
          dedication to mastering the digital realm. With each project, I
          navigate challenges with creativity and precision, leaving a trail of
          technological advancements in my wake.
        </p>
        <h2 className=" text-blue font-short absolute -top-[60px] right-[30px] flex flex-col  leading-[10rem]">
          About Me
        </h2>
        <hr
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="500"
          className=" w-[40%] h-[2px] bg-white rounded-sm border-0  "
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row w-[60%]">
          {/* left container */}
          <div className="w-[50%]">
            <div className="border-b border-white px-[10px] py-[1rem] mt-[1rem]">
              <h3 className=" flex flex-row gap-2 items-center  text-blue">
                <AlignJustify width={"30px"} height={"30px"} color="#ffffff" />{" "}
                Infosys
              </h3>
              <p
                className=" text-white"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                I began my career at <span className=" text-blue">Infosys</span>{" "}
                as a fresher, diving headfirst into the world of development. As
                I honed my skills, I transitioned to{" "}
                <span className=" text-blue">React</span>, where I found my true
                passion. This journey has been a testament to my adaptability
                and love for learning, as I continue to explore new technologies
                and push the boundaries of what's possible.
              </p>
            </div>
            <div className="border-b border-white px-[10px] py-[1rem] mt-[7rem]">
              <h3 className=" flex flex-row gap-2 items-center  text-blue">
                <AlignJustify width={"30px"} height={"30px"} color="#ffffff" />{" "}
                IBM
              </h3>
              <p
                className=" text-white "
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                At <span className=" text-blue">IBM</span>, I serve as a
                Frontend Engineer, where we're leveraging the latest in web
                development with <span className=" text-blue">Next.js</span>.
                Working from scratch, we harness the power of server-side
                rendering <span className=" text-blue">(SSR)</span> and static
                site generation <span className=" text-blue">(SSG)</span>{" "}
                features to build robust projects. It's an exciting journey,
                pushing boundaries and delivering high-performance web solutions
                in line with industry-leading practices.
              </p>
            </div>
          </div>
          {/* line */}

          <hr className=" w-[2px] h-[500px] bg-white rounded-sm border-0  " />

          {/* right container */}

          <div className=" w-[50%]  border-b border-white ">
            <div className="border-b border-white px-[10px] py-[1rem] mt-[8rem] ">
              <h3 className=" flex flex-row gap-2 items-center  text-blue">
                <AlignJustify width={"30px"} height={"30px"} color="#ffffff" />{" "}
                Starberry
              </h3>

              <p
                className=" text-white "
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                After two and a half years, I decided to pivot in my career
                journey. I joined <span className=" text-blue">Starberry</span>,
                where I further enriched my skill set, delving into technologies
                like{" "}
                <span className=" text-blue">
                  Gatsby, Strapi, Material-UI,{" "}
                </span>
                and <span className=" text-blue">Styled-Components.</span> This
                transition marked a significant step forward in my professional
                growth, empowering me to tackle new challenges and expand my
                expertise in web development.
              </p>
            </div>
          </div>
        </div>
        <div className=" relative w-[40%]">
          <div className=" w-full flex flex-row justify-between gap-1 p-2 absolute -bottom-[45px]  border  rounded-sm  border-white  ">
            <figure className="max-w-lg">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={NextJsLogo}
                alt={""}
              />
            </figure>
            <figure className="max-w-lg">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={ReactJsLogo}
                alt={""}
              />
            </figure>
            <figure className="max-w-lg">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={TailwindcssLogo}
                alt={""}
              />
            </figure>
            <figure className="max-w-lg">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={HtmlLogo}
                alt={""}
              />
            </figure>
            <figure className="max-w-lg">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={CssLogo}
                alt={""}
              />
            </figure>
            <figure className="max-w-lg">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={JsLogo}
                alt={""}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
