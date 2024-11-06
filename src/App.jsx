import { useState } from 'react'
import {  BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from "./Components/Home.jsx";
import LinkedList from './Components/LinkedList/LinkedList.jsx';
import Header from './Components/Header&Footer/Header.jsx';
import Footer from './Components/Header&Footer/Footer.jsx';

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-300 flex flex-col items-center relative">
      <Router>
        <Header/>
          <Routes>
            <Route path="/Structify/" element={<Home />} />
            <Route path="/linked-list" element={<LinkedList />} /> 
          </Routes>
        <Footer/>
      </Router>
    </div>
)
}

export default App
