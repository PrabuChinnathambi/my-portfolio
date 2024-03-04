import React, { ReactNode, useEffect } from "react";
import Particles from "./particles";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <Header />
      <main className="container pb-[5rem] ">{children}</main>
    </div>
  );
};

export default Layout;
