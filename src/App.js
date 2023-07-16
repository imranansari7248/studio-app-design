import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer.js";
import Creation from "./components/Creation";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Features />
      <Creation />
      <Footer />
    </React.Fragment>
  );
}

export default App;
