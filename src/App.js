import './App.css';
import * as React from 'react';
import About from './components/About';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './components/Home';
import UeberUns from './components/Ueber-uns';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter id="browwz">
      <h1>Hello there!</h1>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/ueber-uns" element={<UeberUns />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
