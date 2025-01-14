import React from "react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";

const Layout = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
