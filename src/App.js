import React, { useEffect } from 'react';
import './App.css';

// Import all components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior to the HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optional: Handle hash links on page load
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Subscribe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
