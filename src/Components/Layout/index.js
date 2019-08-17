import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="mt-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
