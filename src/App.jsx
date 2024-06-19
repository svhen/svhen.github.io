import { useState } from "react";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Hero />
      <Timeline />
      <Location />
      <Footer />
    </>
  );
}

export default App;
