// Description is commented out to be used 
// for a later time.

import React from 'react';
import NavBar from './components/Navbar';
import Title from './components/Title';
import Details from './components/Description';
import Features from './components/Features';
import Brands from './components/Brands';
import Contact from './components/Contact';
import PrevWork from './components/PrevWork';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <Details />
      <Brands />
      <Features />
      <PrevWork />
      <Contact />
    </div>
  );
}

export default App;
