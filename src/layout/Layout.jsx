import Footer from "./Footer";
import Navbar from "./Navbar";
import * as React from "react";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
