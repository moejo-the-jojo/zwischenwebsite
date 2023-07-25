import "./App.css";
import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NächsteShow from "./components/NächsteShow";

function App() {
  return (
    <>
      <BrowserRouter id="browwz">
        <Navbar />
        <Routes id="routesContainer" className="contentContainer">
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/naechste-show" element={<NächsteShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
