import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Navbar from './components/Header';
import ThemeContextProvider from './contexts/ThemeContext';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NotFound from './pages/Error404';
import './App.css';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </ThemeContextProvider>
    </Router>
  );
}

export default App;



