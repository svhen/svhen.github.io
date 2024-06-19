import { useState } from "react";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Design from "./components/Design";
import Aptos from "./components/Aptos";

function App() {
  return (
    <>
      <Hero />
      <Timeline />
      <Location />
      <Aptos
        area="71.46 m2"
        title="Tipo 1: Apartamento con acabados"
        image="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
      />
      <Design
        type="apartamento Tipo 1"
        image1="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
        image2="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
        image3="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
        image4="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
      />
      <Footer />
    </>
  );
}

export default App;
