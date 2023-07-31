import "./App.css";
import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NächsteShow from "./components/NächsteShow";
import VergangeneShows from "./components/VergangeneShows";
import Fotos from "./components/Fotos";
import Jingle from "./components/Jingle";
import Kontakt from "./components/Kontakt";
import ViennaImprov from "./components/ViennaImprov";
import Kalender from "./components/Kalender";

function App() {
  return (
    <>
      <BrowserRouter id="browwz">
        <Navbar />
        <div className="routesContainer">
          <Routes id="routesContainer" className="routesContainer">
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/naechste-show" element={<NächsteShow />} />
            <Route
              exact
              path="/vergangene-shows"
              element={<VergangeneShows />}
            />
            <Route exact path="/calender" element={<Kalender />} />
            <Route exact path="/fotos" element={<Fotos />} />
            <Route exact path="/jingle" element={<Jingle />} />
            <Route exact path="/kontakt" element={<Kontakt />} />
            <Route exact path="/vienna-improv" element={<ViennaImprov />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
