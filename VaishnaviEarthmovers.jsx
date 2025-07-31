import React, { useState } from 'react';
import LanguageToggle from './components/LanguageToggle';
import ContactForm from './components/ContactForm';
import MachineGallery from './components/MachineGallery';
import Footer from './components/Footer';

const content = {
  en: {
    title: 'Vaishnavi Earthmovers and Transports',
    description: 'We provide JCBs, Volvos, Tralas, and Pickups on rent.',
    contact: 'Contact Us'
  },
  hi: {
    title: 'वैष्णवी अर्थमूवर्स एंड ट्रांसपोर्ट्स',
    description: 'हम जेसीबी, वोल्वो, ट्राला और पिकअप किराए पर देते हैं।',
    contact: 'संपर्क करें'
  }
};

function VaishnaviEarthmovers() {
  const [lang, setLang] = useState('en');
  const t = content[lang];

  return (
    <div className="app">
      <LanguageToggle lang={lang} setLang={setLang} />
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <MachineGallery />
      <h2>{t.contact}</h2>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default VaishnaviEarthmovers;
