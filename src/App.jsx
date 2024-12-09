import { useState } from 'react'
import {  HashRouter as Router,Route, Routes } from 'react-router-dom';
import Home from "./Components/Home.jsx";
import LinkedList from './Components/LinkedList/LinkedList.jsx';
import Header from './Components/Header&Footer/Header.jsx';
import Footer from './Components/Header&Footer/Footer.jsx';
import ParticlesComponent from './Components/Design/BackgoundParticles.jsx';
import Stack from './Components/Stack/Stack.jsx';

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-300 flex flex-col items-center relative">
      <ParticlesComponent id='Particles'/>
      <Router>
        <Header/>
          <Routes>
            <Route path="/Structify/" element={<Home />} />
            <Route path="/Structify/linked-list" element={<LinkedList />} /> 
            <Route path="/Structify/stack" element={<Stack />} /> 
            <Route path="*" element={<Home />} />
          </Routes>
        <Footer/>
      </Router>
    </div>
)
}

export default App
