// components/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-900 text-white">
      <CustomCursor />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
