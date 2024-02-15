import React from "react";
import { TypeAnimation } from "react-type-animation";

const DashBoard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col gap-2">
        <AnimatedText />
        <h1>This is Prabu...!!!</h1>
        <p className="text-4xl font-bold">@prabudev00</p>
        <p className="mt-3  md:w-[60%]">
          In my professional endeavors, I am dedicated to crafting digital
          experiences that are not only pixel-perfect but also deeply engaging
          and accessible to all users. With a fervent passion for my work, I
          continuously seek out opportunities to contribute to the development
          of comprehensive, end-to-end products. These products are meticulously
          designed to not only meet immediate needs but also to establish
          sustainable and scalable systems that can withstand the test of time.
          My focus extends beyond mere technical proficiency; I am committed to
          creating solutions that have a meaningful impact on both social and
          technical landscapes. By leveraging my skills and expertise, I aim to
          drive positive change and foster innovation in a way that resonates
          with users and stakeholders alike.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <p className="btn">Home</p>
        <p className="btn">Education</p>
        <p className="btn">Experience</p>
        <p className="btn">Contact Me</p>
      </div>
    </div>
  );
};

export default DashBoard;

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Haii",
        1000,
        "Hello",
        1000,
        "Vanakkam",
        1000,
        "Vandhanam",
        1000,
        "Namaste",
        1000,
        "Welcome You All !",

        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={1}
      style={{ fontSize: "60px", display: "inline-block" }}
    />
  );
};
