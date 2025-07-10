import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import Us from './pages/Us.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path='/us' element={<Us/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
