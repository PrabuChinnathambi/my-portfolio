import React, { useState } from "react";
import Menu from "./Menu";
import Welcome from "./Welcome";
import Education from "./Education";
import Experience from "./Experience";
import ContactMe from "./ContactMe";

const DashBoard = () => {
  const [selectedMenu, setSelectedMenu] = useState<number>(1);

  const hanldeMenu = (id: number) => {
    setSelectedMenu(id);
  };

  return (
    <div className="flex flex-col w-[100%] md:flex-row items-center justify-between">
      <div className="md:w-[70%]">
        <HanldeComponenet id={selectedMenu} />
      </div>
      <hr
        className="bg-white w-[2px] h-[500px] hidden md:block absolute right-[25%] xl:right-[15%] "
        data-aos="flip-up"
      />
      <Menu selectedMenu={selectedMenu} hanldeMenu={hanldeMenu} />
    </div>
  );
};

const HanldeComponenet = ({ id }: { id: number }) => {
  switch (id) {
    case 1:
      return <Welcome />;
      break;
    case 2:
      return <Education />;
      break;
    case 3:
      return <Experience />;
      break;
    case 4:
      return <ContactMe />;
      break;

    default:
      break;
  }
};

export default DashBoard;
