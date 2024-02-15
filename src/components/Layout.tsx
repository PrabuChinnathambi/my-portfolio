import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-dvh relative">
      <div className=" absolute top-[10px] left-[-10px]  min-h-[200px] w-[200px] border-t-[10px] border-l-[10px] border-white "></div>
      <main
        className="flex items-center w-[100%] h-[100%] px-[30px] "
        style={{
          background: "rgba(216, 216, 216, 0.03)",
          borderRadius: "16px",
          boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: " blur(0px)",
          WebkitBackdropFilter: " blur(0px)",
          border: "1px solid rgba(216, 216, 216, 0.03)",
        }}
      >
        {children}
      </main>
      <div className=" absolute bottom-[10px] right-[-10px] flex justify-end ">
        <div className="flex text-end min-h-[200px] w-[200px] border-r-[10px] border-b-[10px] border-white"></div>
      </div>
    </div>
  );
};

export default Layout;
