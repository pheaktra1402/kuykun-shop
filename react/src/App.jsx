import React from 'react';
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
      <section id="home">
        <Home />
      </section>
      <section id="shop">
        <Shop />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section id="about">
        <AboutUs />
      </section>
    </div>
  );
};

export default App;