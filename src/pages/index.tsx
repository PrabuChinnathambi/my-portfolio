import DashBoard from "@/components/DashBoard";
import Layout from "@/components/Layout";
import React, { useEffect, useRef, useState } from "react";
import Welcome from "@/components/Welcome";
import HomePage from "./homePage";
import Particles from "@/components/particles";

const index = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  useEffect(() => {
    document.body.classList.add("darkMode");
  });

  return (
    <div className="w-screen h-screen darkMode ">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      {!click ? (
        <div className="container p-[20px] md:p-0 flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl via-zinc-600/20 ">
          <Welcome handleClick={handleClick} />
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default index;
