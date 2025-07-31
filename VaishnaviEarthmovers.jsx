import React from 'react';
import LanguageToggle from './components/LanguageToggle';
import ContactForm from './components/ContactForm';
import MachineGallery from './components/MachineGallery';
import Footer from './components/Footer';

function VaishnaviEarthmovers() {
  return (
    <div>
      <LanguageToggle />
      <header className="header">
        <h1>Vaishnavi Earthmovers and Transports</h1>
        <p>Excavator, Loader, Backhoe Loader, Dumper & Trala for Rent</p>
      </header>
      <MachineGallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default VaishnaviEarthmovers;
