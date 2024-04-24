import React from "react";
import Navbar from "./globals/Navbar";
import Footer from "./globals/Footer";

const Layout = ({ page }) => {
  return (
    <>
      <Navbar />
      <div className="w-full">{page}</div>
      <Footer />
    </>
  );
};

export default Layout;
