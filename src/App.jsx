import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ServiciosMunicipales from './components/ServiciosMunicipales';
import NoticiasDestacadas from './components/NoticiasDestacadas';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServiciosMunicipales />
      <NoticiasDestacadas />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;