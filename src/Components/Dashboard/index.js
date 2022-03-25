import React from "react";
import Footer from "../Footer";
import LoginSection from "../LoginSection";
import Navbar from "../Navbar";
import Pricing from "../Pricing";
import Statistics from "../Statistics";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <LoginSection />
      <Statistics />
      <Pricing />
      <Footer />
    </>
  );
};

export default Dashboard;
