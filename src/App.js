import './App.css';
import * as React from 'react';
import About from './components/About';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <h1>Hello there!</h1>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
