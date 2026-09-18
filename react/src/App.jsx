import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white duration-300 min-h-screen scroll-smooth">
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;