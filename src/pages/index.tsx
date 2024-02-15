import DashBoard from "@/components/DashBoard/DashBoard";
import Layout from "@/components/Layout";
import React from "react";

const index = () => {
  return (
    <div className="container p-[20px] md:p-0">
      <Layout>
        <DashBoard />
      </Layout>
    </div>
  );
};

export default index;
