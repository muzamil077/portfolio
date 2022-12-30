import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
