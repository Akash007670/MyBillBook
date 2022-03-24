import React from "react";
import "./App.css";
import LoginSection from "./Components/LoginSection";
import Navbar from "./Components/Navbar";
import Statistics from "./Components/Statistics";

const App = () => {
  return (
    <div>
      <Navbar />
      <LoginSection />
      <Statistics />
    </div>
  );
};

export default App;
