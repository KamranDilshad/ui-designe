import React from "react";
import {
  Blog,
  Footer,
  Possibility,
  WhatGPT,
  Header,
} from "./contianer";
import { CTA, Brand, Navbar, Features } from "./component";
import './App.css'
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT />
        <Features/>
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
