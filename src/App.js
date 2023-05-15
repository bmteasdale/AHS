import React from 'react';
import NavBar from './components/Navbar';
import Title from './components/Title';
import Details from './components/Description';
import Features from './components/Features';
import Brands from './components/Brands';
import PrevWork from './components/PrevWork';
import './App.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <Features />
      <Brands />
      <PrevWork />
      <Details />
    </div>
  );
}

export default App;
