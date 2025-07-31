import React from 'react';

function LanguageToggle({ lang, setLang }) {
  return (
    <div>
      <button onClick={() => setLang('en')} disabled={lang === 'en'}>English</button>
      <button onClick={() => setLang('hi')} disabled={lang === 'hi'}>हिन्दी</button>
    </div>
  );
}

export default LanguageToggle;
