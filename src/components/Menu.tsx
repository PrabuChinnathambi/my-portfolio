import React from "react";

interface MenuInterface {
  hanldeMenu: (id: number) => void;
  selectedMenu: number;
}

const Menu = ({ hanldeMenu, selectedMenu }: MenuInterface) => {
  const hanldeOnClick = (id: number) => {
    console.log(id);
    hanldeMenu(id);
  };

  const menuValue = [
    {
      label: "Home",
      id: 1,
    },
    {
      label: "Education",
      id: 2,
    },
    {
      label: "Experience",
      id: 3,
    },
    {
      label: "Contact Me",
      id: 4,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {menuValue.map((item, i) => {
        return (
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay={item.id * 100}
            key={i}
          >
            <button
              onClick={() => hanldeOnClick(item.id)}
              className={`btn ${selectedMenu == item.id && "selected-menu"}`}
            >
              {item.label}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
