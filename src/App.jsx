import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Professionals from "./components/Professionals";
import CombinedFooter from "./components/CombinedFooter";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Professionals />
      <CombinedFooter />
    </>
  );
};

export default App;
