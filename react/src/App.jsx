import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white duration-300 min-h-screen">
      <div className='sticky top-0 z-50'> <Navbar /></div>
      <div id="home"><Home /></div>
      <div id="shop"><Shop /></div>
      <div id="contact"><ContactUs /></div>
      <div id="about"><AboutUs /></div>
    </div>
  );
};

export default App;