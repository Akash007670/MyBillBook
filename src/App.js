import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import LoginSection from "./Components/LoginSection";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Statistics from "./Components/Statistics";

const App = () => {
  return (
    <div>
      <Navbar />
      <LoginSection />
      <Statistics />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
