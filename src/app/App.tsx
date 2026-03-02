import React from "react";
import Hero from "../components/Hero/Hero";
import { Footer } from "../components/Footer/Footer";

const App = () => {
  const handleOpenGame = () => {
    alert("Game opened!");
  };

  return (
    <>
      <Hero />
      <Footer />
    </>
  );
};

export default App;
